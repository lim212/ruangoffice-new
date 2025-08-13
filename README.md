# RuangOffice Nuxt Migration

This repository was converted from a standalone `index.html` into a minimal Nuxt 3 project.

## How it works
- Essential `<head>` meta, favicon links, fonts, and external CSS/JS are declared in `nuxt.config.ts` under `app.head`.
- The original static HTML is preserved at `public/original.html`.
- The Nuxt page `pages/index.vue` loads the original HTML at runtime and injects the `<body>` content into the page using `v-html`.

This approach minimizes manual changes and keeps the original layout and content intact while providing a Nuxt app structure.

## Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   npm run start
   ```

## Notes
- If the original HTML relied on inline scripts inside the `<body>`, those may not execute automatically when injected via `v-html`. We already load key external scripts (Google Analytics, Font Awesome). If you need additional scripts to run, consider porting them to Nuxt plugins or `onMounted` hooks.
- All external assets referenced via full URLs (CDN) will continue to work. If there are local relative assets, copy them into `public/` and update paths accordingly.
- You can move more of the `<head>` configuration from the original HTML into `nuxt.config.ts` if needed.
