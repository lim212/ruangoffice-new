import { NuxtModule, ModuleDependencyMeta, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-simple-sitemap"]?: ModuleDependencyMeta<typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-simple-sitemap`
     */
    ["sitemap"]: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-simple-sitemap`
     */
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-simple-sitemap"]?: ModuleDependencyMeta<typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-simple-sitemap`
     * @see https://www.npmjs.com/package/nuxt-simple-sitemap
     */
    ["sitemap"]: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-simple-sitemap`
     * @see https://www.npmjs.com/package/nuxt-simple-sitemap
     */
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["C:/Users/FELIX/RO/ruangoffice-new/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   "nuxt-simple-sitemap": {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,

      multiTenancy: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   waPhone: string,

   testimonialsEndpoint: string,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }