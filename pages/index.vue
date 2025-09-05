<template>
  <div>
    <RunningText />
    <Header />
    <Hero />
    <TrustedBy />
    <BannerSlider />
    <About />
    <KbliSection />
    <PeraturanSection />
    <Services />
    <BestOffers />
    <WhyChooseUs />
    <Testimonials />
    <ContactSection />
    <CTA />
    <Footer />
    <FloatingActions />
  </div>
</template>

<script setup>
// Import all components
import RunningText from '~/components/RunningText.vue'
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import TrustedBy from '~/components/TrustedBy.vue'
import BannerSlider from '~/components/BannerSlider.vue'
import About from '~/components/About.vue'
import KbliSection from '~/components/KbliSection.vue'
import PeraturanSection from '~/components/PeraturanSection.vue'
import Services from '~/components/Services.vue'
import BestOffers from '~/components/BestOffers.vue'
import WhyChooseUs from '~/components/WhyChooseUs.vue'
import Testimonials from '~/components/Testimonials.vue'
import ContactSection from '~/components/ContactSection.vue'
import CTA from '~/components/CTA.vue'
import Footer from '~/components/Footer.vue'
import FloatingActions from '~/components/FloatingActions.vue'

// SEO
useHead({
  title: 'RuangOffice - Solusi Bisnis Terpercaya | Virtual Office, Pendirian PT, Konsultasi',
  meta: [
    {
      name: 'description',
      content: 'RuangOffice menyediakan layanan Virtual Office, Private Office, Pendirian PT/CV, Konsultasi Hukum & Keuangan, dan Pengurusan ISO. Solusi bisnis terpercaya sejak 2021.'
    },
    {
      name: 'keywords',
      content: 'virtual office, private office, pendirian PT, pendirian CV, konsultasi hukum, konsultasi keuangan, ISO, PMA, ruangoffice'
    }
  ],
  og: {
    title: 'RuangOffice - Solusi Bisnis Terpercaya',
    description: 'Layanan Virtual Office, Pendirian PT, dan Konsultasi Bisnis Terpercaya',
    image: '/assets/img/RO Banner 3.png'
  }
})
</script>
