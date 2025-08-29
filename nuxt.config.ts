// Nuxt 3 configuration for migrated static HTML site
// We include essential head/meta/link/script tags here. You can extend as needed.
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css", "~/assets/css/patch.css"],
  runtimeConfig: {
    public: {
      waPhone: process.env.NUXT_PUBLIC_WA_PHONE || '62811113666',
      testimonialsEndpoint: process.env.NUXT_PUBLIC_TESTIMONIALS_ENDPOINT || ''
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
        {
          name: "csrf-token",
          content: "dt9YQgqXhSV9oCNOfdjoWlyQNJFzXqcEj2esCZFu",
        },
        {
          name: "google-site-verification",
          content: "7vvLsc2TMRyTFk8JMcnDbqT1EwtIDcMl8E0RBVf6Me0",
        },
        {
          name: "description",
          content:
            "Jasa Pendirian dan Pembuatan layanan Perizinan bikin atau buat PT / CV / Firma / UD / Yayasan, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office",
        },
        {
          name: "keywords",
          content:
            "jasa buat pt, jasa bikin pt, jasa buat cv, jasa pendirian pt, jasa pendirian cv, jasa pendirian PMA, jasa TDP, Jasa SIUP, Jasa ISO, Jasa SNI, jasa bikin SNI, jasa buat SNI, jasa bpom,jasa bikin bpom, jasa buat bpom, jasa buat haki, jasa bikin haki, jasa bikin yayasan, jasa bikin cv, jasa buat firma, jasa bikin firma, jasa buat ud, jasa bikin ud, jasa buat yayasan, jasa bikin yayasan, jasa legalitas, jasa KAP, jasa Haki, jasa konsultan pajak, jasa buat NIB, Jasa Bikin NIB, jasa iso, jasa buat pma, jasa bikin pma, jasa buat pt pma, Virtual Office, perizinan, perijinan, pajak, SIUP, jasa buat siup, jasa bikin siup, Perizinan bikin PT / CV / Firma / UD / Yayasan, Domisili, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office",
        },
        { name: "author", content: "RuangOffice.com" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://ruangoffice.online" },
        {
          property: "og:title",
          content:
            "RuangOffice.com Biro Jasa Legalitas perizinan & Virtual Office #1 Layanan Terbaik",
        },
        {
          property: "og:description",
          content:
            "Jasa Pendirian dan Pembuatan layanan Perizinan bikin atau buat PT / CV / Firma / UD / Yayasan, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office",
        },
        { property: "og:image", content: "/assets/img/logo-ro.ico" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://ruangoffice.online" },
        {
          name: "twitter:title",
          content:
            "RuangOffice.com Biro Jasa Legalitas perizinan & Virtual Office #1 Layanan Terbaik",
        },
        {
          name: "twitter:description",
          content:
            "Jasa Pendirian dan Pembuatan layanan Perizinan bikin atau buat PT / CV / Firma / UD / Yayasan, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office",
        },
        { name: "twitter:image", content: "/assets/img/logo-ro.ico" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        // Favicons (use local assets to match ruangoffice.com/.online)
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/assets/img/logo-ro.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/assets/img/logo-ro.ico",
        },
        // Standard favicons
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/img/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/img/favicon.png",
        },
        {
          rel: "icon",
          href: "/assets/img/logo-ro.ico",
          type: "image/x-icon",
        },
        {
          rel: "alternate icon",
          href: "/assets/img/favicon.png",
          class: "js-site-favicon",
          type: "image/png",
        },
        // Google Fonts and CSS libraries
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cookie:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Abel&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.quilljs.com/1.3.6/quill.snow.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/shimmer-css@1.0.0/shimmer.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        // Bootstrap CSS (base)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css",
          crossorigin: "anonymous"
        },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/lightbox2@2/dist/css/lightbox.min.css" },
        { rel: "stylesheet", href: "/assets/css/styles.css" },
        { rel: "stylesheet", href: "/assets/ruangoffice/widget/whatsapp/style.css" },
        { rel: "stylesheet", href: "/assets/css/sch-style2.css" },
        { rel: "stylesheet", href: "/assets/css/patch.css" },
      ],
      script: [
        // Google Analytics gtag
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-64CPVQTDR6",
          async: true,
        },
        {
          children:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-64CPVQTDR6');",
          tagPosition: "head",
        },

        // jQuery (some legacy inline scripts may use $)
        {
          src: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js",
          crossorigin: "anonymous",
          defer: true,
        },
        // Axios (used by original body scripts)
        {
          src: "https://cdn.jsdelivr.net/npm/axios@1.7.7/dist/axios.min.js",
          crossorigin: "anonymous",
          defer: true,
        },
        // Alpine.js for x-data components in the injected HTML
        {
          src: "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
          defer: true,
        },
        // Font Awesome
        {
          src: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.0/js/all.min.js",
          crossorigin: "anonymous",
          defer: true,
        },
        // Bootstrap bundle (for dropdowns, collapse, etc.)
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          crossorigin: "anonymous",
          defer: true,
        },
        // SwiperJS (for sliders)
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
          defer: true,
        },
        // Lightbox2 (for gallery in "Kantor Kami" section)
        {
          src: "https://cdn.jsdelivr.net/npm/lightbox2@2/dist/js/lightbox.min.js",
          defer: true,
        },
        // Lightbox2 (for image galleries in Happy Client)
        {
          src: "/assets/ruangoffice/assets/vendor/lightbox/js/lightbox.min.js",
          defer: true,
        },
      ],
      // For inline scripts via innerHTML, allow unsafe inline (you may want to handle CSP separately)
      // Note: nuxt-security or strict CSP is not configured in this minimal scaffold.
    },
  },
  nitro: {
    // Ensure /public is served
    serveStatic: true,
  },
  // Disable SSR for the home page to avoid dev-time dynamic import failures on some environments
  // This page only renders client-side content fetched from /public/original.html anyway.
  routeRules: {
    "/": { ssr: false },
  },

  // SEO & Sitemaps via @nuxtjs/seo-experiments
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://ruangoffice.online",
  },
  sitemap: {
    // Auto-generate from pages (default behavior of the module)
    exclude: ["/admin", "/admin/**"],
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/"],
      },
    ],
    sitemap: [
      `${process.env.NUXT_PUBLIC_SITE_URL || "https://ruangoffice.online"}/sitemap.xml`,
    ],
  },
});
