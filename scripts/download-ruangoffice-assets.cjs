#!/usr/bin/env node
/**
 * Download all assets referenced from https://www.ruangoffice.com in the project
 * and save them under public/assets/ruangoffice preserving path structure.
 *
 * Usage:
 *   node scripts/download-ruangoffice-assets.cjs           -> download only
 *   node scripts/download-ruangoffice-assets.cjs --rewrite -> also rewrite references to local paths
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const TARGET_BASE = path.join(PUBLIC_DIR, "assets", "ruangoffice");
const REWRITE = process.argv.includes("--rewrite");

function walk(
  dir,
  exts = [".html", ".vue", ".ts", ".js", ".tsx", ".jsx", ".json"],
) {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of list) {
    if (
      ent.name === "node_modules" ||
      ent.name === ".output" ||
      ent.name === ".nuxt" ||
      ent.name === ".git"
    )
      continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results.push(...walk(full, exts));
    } else if (exts.includes(path.extname(ent.name))) {
      results.push(full);
    }
  }
  return results;
}

function extractUrls(text) {
  const urls = new Set();
  const regex =
    /(https:\/\/www\.ruangoffice\.com[^"'\s)]+)|(https:\/\/ruangoffice\.com[^"'\s)]+)/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const url = (m[1] || m[2]).trim();
    if (
      url.startsWith("https://www.ruangoffice.com") ||
      url.startsWith("https://ruangoffice.com")
    ) {
      urls.add(url);
    }
  }
  return Array.from(urls);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    ensureDir(path.dirname(dest));
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve({ url, dest, skipped: true });
    }
    const file = fs.createWriteStream(dest);
    const req = https.get(url, (res) => {
      if (
        res.statusCode &&
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        const redirectUrl = res.headers.location.startsWith("http")
          ? res.headers.location
          : new URL(res.headers.location, url).toString();
        res.destroy();
        download(redirectUrl, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.rmSync(dest, { force: true });
        return reject(
          new Error(`Failed to download ${url} -> status ${res.statusCode}`),
        );
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve({ url, dest })));
    });
    req.on("error", (err) => {
      file.close();
      fs.rmSync(dest, { force: true });
      reject(err);
    });
  });
}

function localPathFor(url) {
  try {
    const u = new URL(url);
    let p = u.pathname || "";
    if (p === "" || p === "/") {
      p = "index.html";
    } else {
      if (p.startsWith("/")) p = p.slice(1);
      if (p.endsWith("/")) p += "index.html";
    }
    return path.join(TARGET_BASE, p);
  } catch {
    return path.join(TARGET_BASE, url.replace(/[^a-zA-Z0-9._-]+/g, "_"));
  }
}

function rewriteFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [remote, localRel] of replacements) {
    const before = content;
    const pattern = new RegExp(
      remote.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "g",
    );
    content = content.replace(pattern, localRel);
    if (content !== before) changed = true;
  }
  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
  }
  return changed;
}

(async function main() {
  console.log("Scanning project for ruangoffice assets...");
  const files = walk(PROJECT_ROOT);
  const allUrls = new Set();
  for (const f of files) {
    try {
      const text = fs.readFileSync(f, "utf8");
      extractUrls(text).forEach((u) => allUrls.add(u));
    } catch {}
  }

  const urls = Array.from(allUrls).sort();
  if (urls.length === 0) {
    console.log("No URLs found. Nothing to download.");
    return;
  }

  console.log(
    `Found ${urls.length} ruangoffice.com URLs. Downloading to ${path.relative(PROJECT_ROOT, TARGET_BASE)} ...`,
  );
  const results = [];

  function shouldDownload(u) {
    if (u.includes("${")) return false; // skip template literals
    try {
      const { pathname } = new URL(u);
      const ext = path.extname(pathname).toLowerCase();
      const allow = new Set([
        ".css",
        ".js",
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".svg",
        ".ico",
        ".webp",
        ".woff",
        ".woff2",
        ".ttf",
        ".otf",
        ".json",
        ".map",
      ]);
      return allow.has(ext);
    } catch {
      return false;
    }
  }

  for (const url of urls) {
    if (!shouldDownload(url)) {
      results.push({ url, dest: "", status: "skipped-non-asset" });
      continue;
    }
    const dest = localPathFor(url);
    try {
      const r = await download(url, dest);
      results.push({
        url,
        dest: path.relative(PROJECT_ROOT, dest),
        status: r.skipped ? "skipped" : "downloaded",
      });
      console.log(
        `${r.skipped ? "SKIP" : "OK  "} ${url} -> ${path.relative(PROJECT_ROOT, dest)}`,
      );
    } catch (e) {
      results.push({
        url,
        dest: path.relative(PROJECT_ROOT, dest),
        status: "failed",
        error: e.message,
      });
      console.warn(`FAIL ${url}: ${e.message}`);
    }
  }

  if (REWRITE) {
    console.log("Rewriting references to local assets...");
    const replacePairs = results
      .filter((r) => r.status === "downloaded" || r.status === "skipped")
      .map((r) => {
        const rel =
          "/" +
          path
            .relative(PUBLIC_DIR, path.join(PROJECT_ROOT, r.dest))
            .replace(/\\/g, "/");
        return [r.url, rel];
      });

    let changedFiles = 0;
    for (const f of files) {
      const changed = rewriteFile(f, replacePairs);
      if (changed) {
        changedFiles++;
        console.log(`Rewrote: ${path.relative(PROJECT_ROOT, f)}`);
      }
    }
    console.log(`Rewrite complete. Changed files: ${changedFiles}`);
  }

  const reportPath = path.join(
    PROJECT_ROOT,
    "public",
    "assets",
    "ruangoffice",
    "download-report.json",
  );
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), "utf8");
  console.log(`Report saved to ${path.relative(PROJECT_ROOT, reportPath)}`);
})();
