// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  // 🔹 Modules
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots"
  ],

  // 🔹 Global CSS
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/themes.css"
  ],

  // 🔹 Runtime Config (bisa diubah via .env)
  runtimeConfig: {
    public: {
      waPhone: process.env.NUXT_PUBLIC_WA_PHONE || "0811113666",
      testimonialsEndpoint:
        process.env.NUXT_PUBLIC_TESTIMONIALS_ENDPOINT || ""
    }
  },

  // 🔹 Head / Meta Tags
  app: {
    head: {
      htmlAttrs: { lang: "id" },
      title: "RuangOffice.com - Jasa Pendirian PT, CV & Virtual Office Terpercaya | Legalitas Bisnis #1",

      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        {
          name: "description",
          content:
            "RuangOffice.com - Jasa pendirian PT, CV, PMA, Virtual Office, SIUP, HAKI, ISO, NIB, Pajak terpercaya sejak 2009. Proses cepat 1-3 hari, harga terjangkau, garansi 100%. Konsultasi gratis!"
        },
        {
          name: "keywords",
          content:
            "jasa pendirian PT, jasa buat PT, jasa bikin PT, jasa pendirian CV, jasa legalitas, jasa HAKI, jasa ISO, Virtual Office Jakarta, pendirian perusahaan, perizinan usaha, SIUP, TDP, NPWP perusahaan, konsultasi hukum bisnis"
        },
        { name: "author", content: "RuangOffice.com" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },
        { name: "theme-color", content: "#f59e0b" },
        { name: "msapplication-TileColor", content: "#f59e0b" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        
        // Open Graph Meta Tags
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.ruangoffice.com" },
        { property: "og:site_name", content: "RuangOffice.com" },
        {
          property: "og:title",
          content: "RuangOffice.com - Jasa Pendirian PT, CV & Virtual Office Terpercaya | Legalitas Bisnis #1"
        },
        {
          property: "og:description",
          content: "Jasa pendirian PT, CV, PMA, Virtual Office, SIUP, HAKI, ISO, NIB, Pajak terpercaya sejak 2009. Proses cepat 1-3 hari, harga terjangkau, garansi 100%. Konsultasi gratis!"
        },
        { property: "og:image", content: "https://www.ruangoffice.com/og-image.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "RuangOffice.com - Jasa Legalitas & Virtual Office" },
        { property: "og:locale", content: "id_ID" },
        
        // Twitter Card Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@ruangoffice" },
        { name: "twitter:creator", content: "@ruangoffice" },
        {
          name: "twitter:title",
          content: "RuangOffice.com - Jasa Pendirian PT, CV & Virtual Office Terpercaya"
        },
        {
          name: "twitter:description",
          content: "Jasa pendirian PT, CV, PMA, Virtual Office terpercaya sejak 2009. Proses cepat, harga terjangkau, garansi 100%."
        },
        { name: "twitter:image", content: "https://www.ruangoffice.com/twitter-image.jpg" },
        
        // Additional SEO Meta Tags
        { name: "geo.region", content: "ID-JK" },
        { name: "geo.placename", content: "Jakarta" },
        { name: "geo.position", content: "-6.2088;106.8456" },
        { name: "ICBM", content: "-6.2088, 106.8456" },
        { name: "DC.title", content: "RuangOffice.com - Jasa Legalitas & Virtual Office" },
        { name: "DC.description", content: "Jasa pendirian PT, CV, PMA, Virtual Office terpercaya sejak 2009" },
        { name: "DC.subject", content: "Jasa Legalitas, Virtual Office, Pendirian PT, Pendirian CV" },
        { name: "DC.creator", content: "RuangOffice.com" },
        { name: "DC.publisher", content: "RuangOffice.com" },
        { name: "DC.contributor", content: "RuangOffice.com" },
        { name: "DC.date", content: "2024-01-01" },
        { name: "DC.type", content: "Service" },
        { name: "DC.format", content: "text/html" },
        { name: "DC.identifier", content: "https://www.ruangoffice.com" },
        { name: "DC.language", content: "id" },
        { name: "DC.relation", content: "https://www.ruangoffice.com" },
        { name: "DC.coverage", content: "Indonesia" },
        { name: "DC.rights", content: "Copyright RuangOffice.com" }
      ],

      link: [
        // 🔹 Favicons (taruh di /public)
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512x512.png" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-touch-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-touch-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-touch-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-touch-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png" },
        { rel: "apple-touch-icon", sizes: "192x192", href: "/apple-touch-icon-192x192.png" },
        { rel: "apple-touch-icon", sizes: "512x512", href: "/apple-touch-icon-512x512.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#f59e0b" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.ruangoffice.com" },

        // 🔹 Google Fonts (pilih maksimal 2 biar ringan)
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
        }
      ],

      script: [
        // Google Analytics
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-64CPVQTDR6",
          async: true
        },
        // Structured Data
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RuangOffice.com",
            "url": "https://www.ruangoffice.com",
            "logo": "https://www.ruangoffice.com/logo-ro.ico",
            "description": "Jasa pendirian PT, CV, PMA, Virtual Office, SIUP, HAKI, ISO, NIB, Pajak terpercaya sejak 2009",
            "foundingDate": "2009",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-811-113-6666",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ID",
              "addressRegion": "Jakarta"
            }
          })
        }
      ]
    }
  },

  // 🔹 Nitro → pastikan /public diserve
  nitro: {
    serveStatic: true
  },

  // 🔹 SSR Rules
  routeRules: {
    "/": { ssr: false }
  },

  // 🔹 Sitemap & Robots
  sitemap: {
    exclude: ["/admin", "/admin/**"]
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/"]
      }
    ]
  }
})
