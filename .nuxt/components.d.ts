
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'About': typeof import("../components/About.vue")['default']
    'BannerSlider': typeof import("../components/BannerSlider.vue")['default']
    'BestOffers': typeof import("../components/BestOffers.vue")['default']
    'CTA': typeof import("../components/CTA.vue")['default']
    'Contact': typeof import("../components/Contact.vue")['default']
    'ContactSection': typeof import("../components/ContactSection.vue")['default']
    'FloatingActions': typeof import("../components/FloatingActions.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'GlobalSearch': typeof import("../components/GlobalSearch.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'Hero': typeof import("../components/Hero.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'HeroSlider': typeof import("../components/HeroSlider.vue")['default']
    'ImageLoader': typeof import("../components/ImageLoader.vue")['default']
    'KbliQuickSearch': typeof import("../components/KbliQuickSearch.vue")['default']
    'KbliSection': typeof import("../components/KbliSection.vue")['default']
    'LatestNews': typeof import("../components/LatestNews.vue")['default']
    'LoadingBar': typeof import("../components/LoadingBar.vue")['default']
    'PeraturanSection': typeof import("../components/PeraturanSection.vue")['default']
    'Pricing': typeof import("../components/Pricing.vue")['default']
    'ProgressBar': typeof import("../components/ProgressBar.vue")['default']
    'RunningText': typeof import("../components/RunningText.vue")['default']
    'ScrollProgress': typeof import("../components/ScrollProgress.vue")['default']
    'ScrollSection': typeof import("../components/ScrollSection.vue")['default']
    'SectionHeader': typeof import("../components/SectionHeader.vue")['default']
    'SectionTestimonials': typeof import("../components/SectionTestimonials.vue")['default']
    'Services': typeof import("../components/Services.vue")['default']
    'Testimonials': typeof import("../components/Testimonials.vue")['default']
    'ThemeToggle': typeof import("../components/ThemeToggle.vue")['default']
    'TopBar': typeof import("../components/TopBar.vue")['default']
    'WhyChooseUs': typeof import("../components/WhyChooseUs.vue")['default']
    'PendirianPt': typeof import("../components/pendirian-pt.vue")['default']
    'VirtualOffice': typeof import("../components/virtual-office.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'SiteLink': typeof import("../node_modules/nuxt-site-config/dist/runtime/component/SiteLink.vue")['default']
    'RobotMeta': typeof import("../node_modules/nuxt-simple-robots/dist/runtime/components/RobotMeta")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAbout': LazyComponent<typeof import("../components/About.vue")['default']>
    'LazyBannerSlider': LazyComponent<typeof import("../components/BannerSlider.vue")['default']>
    'LazyBestOffers': LazyComponent<typeof import("../components/BestOffers.vue")['default']>
    'LazyCTA': LazyComponent<typeof import("../components/CTA.vue")['default']>
    'LazyContact': LazyComponent<typeof import("../components/Contact.vue")['default']>
    'LazyContactSection': LazyComponent<typeof import("../components/ContactSection.vue")['default']>
    'LazyFloatingActions': LazyComponent<typeof import("../components/FloatingActions.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyGlobalSearch': LazyComponent<typeof import("../components/GlobalSearch.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHero': LazyComponent<typeof import("../components/Hero.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../components/HeroSection.vue")['default']>
    'LazyHeroSlider': LazyComponent<typeof import("../components/HeroSlider.vue")['default']>
    'LazyImageLoader': LazyComponent<typeof import("../components/ImageLoader.vue")['default']>
    'LazyKbliQuickSearch': LazyComponent<typeof import("../components/KbliQuickSearch.vue")['default']>
    'LazyKbliSection': LazyComponent<typeof import("../components/KbliSection.vue")['default']>
    'LazyLatestNews': LazyComponent<typeof import("../components/LatestNews.vue")['default']>
    'LazyLoadingBar': LazyComponent<typeof import("../components/LoadingBar.vue")['default']>
    'LazyPeraturanSection': LazyComponent<typeof import("../components/PeraturanSection.vue")['default']>
    'LazyPricing': LazyComponent<typeof import("../components/Pricing.vue")['default']>
    'LazyProgressBar': LazyComponent<typeof import("../components/ProgressBar.vue")['default']>
    'LazyRunningText': LazyComponent<typeof import("../components/RunningText.vue")['default']>
    'LazyScrollProgress': LazyComponent<typeof import("../components/ScrollProgress.vue")['default']>
    'LazyScrollSection': LazyComponent<typeof import("../components/ScrollSection.vue")['default']>
    'LazySectionHeader': LazyComponent<typeof import("../components/SectionHeader.vue")['default']>
    'LazySectionTestimonials': LazyComponent<typeof import("../components/SectionTestimonials.vue")['default']>
    'LazyServices': LazyComponent<typeof import("../components/Services.vue")['default']>
    'LazyTestimonials': LazyComponent<typeof import("../components/Testimonials.vue")['default']>
    'LazyThemeToggle': LazyComponent<typeof import("../components/ThemeToggle.vue")['default']>
    'LazyTopBar': LazyComponent<typeof import("../components/TopBar.vue")['default']>
    'LazyWhyChooseUs': LazyComponent<typeof import("../components/WhyChooseUs.vue")['default']>
    'LazyPendirianPt': LazyComponent<typeof import("../components/pendirian-pt.vue")['default']>
    'LazyVirtualOffice': LazyComponent<typeof import("../components/virtual-office.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazySiteLink': LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/component/SiteLink.vue")['default']>
    'LazyRobotMeta': LazyComponent<typeof import("../node_modules/nuxt-simple-robots/dist/runtime/components/RobotMeta")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const About: typeof import("../components/About.vue")['default']
export const BannerSlider: typeof import("../components/BannerSlider.vue")['default']
export const BestOffers: typeof import("../components/BestOffers.vue")['default']
export const CTA: typeof import("../components/CTA.vue")['default']
export const Contact: typeof import("../components/Contact.vue")['default']
export const ContactSection: typeof import("../components/ContactSection.vue")['default']
export const FloatingActions: typeof import("../components/FloatingActions.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const GlobalSearch: typeof import("../components/GlobalSearch.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Hero: typeof import("../components/Hero.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const HeroSlider: typeof import("../components/HeroSlider.vue")['default']
export const ImageLoader: typeof import("../components/ImageLoader.vue")['default']
export const KbliQuickSearch: typeof import("../components/KbliQuickSearch.vue")['default']
export const KbliSection: typeof import("../components/KbliSection.vue")['default']
export const LatestNews: typeof import("../components/LatestNews.vue")['default']
export const LoadingBar: typeof import("../components/LoadingBar.vue")['default']
export const PeraturanSection: typeof import("../components/PeraturanSection.vue")['default']
export const Pricing: typeof import("../components/Pricing.vue")['default']
export const ProgressBar: typeof import("../components/ProgressBar.vue")['default']
export const RunningText: typeof import("../components/RunningText.vue")['default']
export const ScrollProgress: typeof import("../components/ScrollProgress.vue")['default']
export const ScrollSection: typeof import("../components/ScrollSection.vue")['default']
export const SectionHeader: typeof import("../components/SectionHeader.vue")['default']
export const SectionTestimonials: typeof import("../components/SectionTestimonials.vue")['default']
export const Services: typeof import("../components/Services.vue")['default']
export const Testimonials: typeof import("../components/Testimonials.vue")['default']
export const ThemeToggle: typeof import("../components/ThemeToggle.vue")['default']
export const TopBar: typeof import("../components/TopBar.vue")['default']
export const WhyChooseUs: typeof import("../components/WhyChooseUs.vue")['default']
export const PendirianPt: typeof import("../components/pendirian-pt.vue")['default']
export const VirtualOffice: typeof import("../components/virtual-office.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const SiteLink: typeof import("../node_modules/nuxt-site-config/dist/runtime/component/SiteLink.vue")['default']
export const RobotMeta: typeof import("../node_modules/nuxt-simple-robots/dist/runtime/components/RobotMeta")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyBannerSlider: LazyComponent<typeof import("../components/BannerSlider.vue")['default']>
export const LazyBestOffers: LazyComponent<typeof import("../components/BestOffers.vue")['default']>
export const LazyCTA: LazyComponent<typeof import("../components/CTA.vue")['default']>
export const LazyContact: LazyComponent<typeof import("../components/Contact.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/ContactSection.vue")['default']>
export const LazyFloatingActions: LazyComponent<typeof import("../components/FloatingActions.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyGlobalSearch: LazyComponent<typeof import("../components/GlobalSearch.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../components/Hero.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyHeroSlider: LazyComponent<typeof import("../components/HeroSlider.vue")['default']>
export const LazyImageLoader: LazyComponent<typeof import("../components/ImageLoader.vue")['default']>
export const LazyKbliQuickSearch: LazyComponent<typeof import("../components/KbliQuickSearch.vue")['default']>
export const LazyKbliSection: LazyComponent<typeof import("../components/KbliSection.vue")['default']>
export const LazyLatestNews: LazyComponent<typeof import("../components/LatestNews.vue")['default']>
export const LazyLoadingBar: LazyComponent<typeof import("../components/LoadingBar.vue")['default']>
export const LazyPeraturanSection: LazyComponent<typeof import("../components/PeraturanSection.vue")['default']>
export const LazyPricing: LazyComponent<typeof import("../components/Pricing.vue")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../components/ProgressBar.vue")['default']>
export const LazyRunningText: LazyComponent<typeof import("../components/RunningText.vue")['default']>
export const LazyScrollProgress: LazyComponent<typeof import("../components/ScrollProgress.vue")['default']>
export const LazyScrollSection: LazyComponent<typeof import("../components/ScrollSection.vue")['default']>
export const LazySectionHeader: LazyComponent<typeof import("../components/SectionHeader.vue")['default']>
export const LazySectionTestimonials: LazyComponent<typeof import("../components/SectionTestimonials.vue")['default']>
export const LazyServices: LazyComponent<typeof import("../components/Services.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../components/Testimonials.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../components/ThemeToggle.vue")['default']>
export const LazyTopBar: LazyComponent<typeof import("../components/TopBar.vue")['default']>
export const LazyWhyChooseUs: LazyComponent<typeof import("../components/WhyChooseUs.vue")['default']>
export const LazyPendirianPt: LazyComponent<typeof import("../components/pendirian-pt.vue")['default']>
export const LazyVirtualOffice: LazyComponent<typeof import("../components/virtual-office.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazySiteLink: LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/component/SiteLink.vue")['default']>
export const LazyRobotMeta: LazyComponent<typeof import("../node_modules/nuxt-simple-robots/dist/runtime/components/RobotMeta")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
