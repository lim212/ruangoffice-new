<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global app-level logic can be added here if needed.
</script>

<style>
/* Ensure full-bleed sections (like the hero slider) align perfectly to viewport edges */
html, body { margin: 0; padding: 0; }
/* Prevent tiny horizontal scrollbars due to 100vw elements inside containers */
body { overflow-x: hidden; }
</style>

<style>
/* Legacy homepage patches: running text + full-bleed slider */
/* Scope to injected container to avoid affecting other pages */
.__migrated-html .tw-animate-marquee,
.__migrated-html .tw-animate-marquee-md {
  display: inline-block;
  white-space: nowrap;
  min-width: 100%;
  animation: tw-marquee var(--tw-marquee-speed, 20s) linear infinite;
  will-change: transform;
}
@keyframes tw-marquee { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
@keyframes tw-marquee2 { from { transform: translateX(0); } to { transform: translateX(-200%); } }
/* On md+ screens, use alternate keyframes if present */
.__migrated-html .tw-animate-marquee-md { animation-name: tw-marquee2; }

/* Ensure the running text bar truly spans edge-to-edge and sits above content */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  position: relative;
  z-index: 40;
  overflow: hidden;
}

/* Make the main banner slider full-bleed */
.__migrated-html #section-1 > .position-relative {
  width: 100%;
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  margin-top: 0 !important; /* remove gap under the nav */
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.__migrated-html #section-1 #swiper-banner {
  width: 100%;
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: clamp(8px, 1.2vw, 14px);
  border-radius: 18px !important;
  background: linear-gradient(135deg, #f8fafc, #eef2ff 35%, #f1f5f9);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
  overflow: hidden; /* clip inner corners */
}
.__migrated-html #section-1 #swiper-banner .swiper-slide img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain; /* Avoid cropping and keep banner not too tall */
}
/* Larger, responsive banner height */
.__migrated-html #section-1 #swiper-banner .swiper-wrapper { align-items: stretch; }
.__migrated-html #section-1 #swiper-banner .swiper-slide {
  height: clamp(220px, 42vw, 640px) !important;
  display: block;
  text-align: center;
}
@media (max-width: 767.98px) {
  .__migrated-html #section-1 #swiper-banner .swiper-slide {
    height: clamp(180px, 60vw, 480px) !important;
  }
}
/* Center slide content defensively without breaking layout */
.__migrated-html #section-1 #swiper-banner .swiper-slide {
  display: block;
  text-align: center;
}

/* Small polish: avoid unexpected overflow from any full-bleed element */
.__migrated-html [style*="width: 100vw"],
.__migrated-html .full-bleed { overflow: hidden; }

/* Force correct visibility for marquee variants regardless of Tailwind JIT availability */
@media (min-width: 768px) {
  .__migrated-html .tw-animate-marquee { display: none !important; }
  .__migrated-html .tw-animate-marquee-md { display: inline-block !important; }
}
@media (max-width: 767.98px) {
  .__migrated-html .tw-animate-marquee { display: inline-block !important; }
  .__migrated-html .tw-animate-marquee-md { display: none !important; }
}

/* Remove unintended gaps between header, running text, and nav */
.__migrated-html .sticky-top,
.__migrated-html #section-0,
.__migrated-html #section-0 header,
.__migrated-html nav.custom-navigation { margin: 0 !important; }

.__migrated-html nav.custom-navigation { border-top: 0 !important; }
.__migrated-html nav.custom-navigation > ul { margin: 0 !important; }

/* Running text strip: collapse vertical padding to sit flush */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>


<style>
/* Legacy running text: improve contrast and look */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block {
  /* Make text readable on all screens */
  color: #111827 !important; /* neutral-900 */
  /* Softer, modern gradient so dark text remains visible */
  background: linear-gradient(90deg, #dcfce7 0%, #bbf7d0 50%, #dcfce7 100%) !important; /* green-100 -> green-200 -> green-100 */
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
/* Typography polish for marquee content */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee,
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee-md {
  font-weight: 600;
  letter-spacing: 0.2px;
}
/* Accentuate the CTA link inside the running text */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block a {
  background: #059669; /* emerald-600 */
  color: #ffffff !important;
  padding: 2px 10px;
  border-radius: 9999px;
  text-decoration: none !important;
  display: inline-block;
  margin-left: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25);
}
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block a:hover {
  background: #047857; /* emerald-700 */
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(4, 120, 87, 0.3);
}
</style>


<style>
/* Legacy running text: slower speed + cooler typography/colors */
/* Slow down movement so users can read comfortably */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee,
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee-md {
  animation-duration: 60s !important; /* desktop/tablet */
}
@media (max-width: 767.98px) {
  .__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee,
  .__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee-md {
    animation-duration: 38s !important; /* mobile slower than before */
  }
}

/* Richer but still readable background with dark text */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block {
  background: linear-gradient(90deg, #d1fae5 0%, #a7f3d0 50%, #d1fae5 100%) !important; /* green-100 -> green-200 -> green-100 */
  color: #111827 !important; /* ensure readable dark text */
  border-top: 1px solid rgba(0,0,0,0.04);
}

/* Typography tweaks for a cleaner, modern look */
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee,
.__migrated-html .tw-text-right.tw-text-white.tw-bg-success.tw-block .tw-animate-marquee-md {
  letter-spacing: 0.3px;
  line-height: 1.25;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
}
</style>


<style>
/* Polyfill Tailwind display utilities inside injected legacy HTML to prevent double images per slide */
/* Scope strictly to the injected container */
.__migrated-html .tw-hidden { display: none !important; }
.__migrated-html .tw-block { display: block !important; }

/* md breakpoint behavior (>= 768px) */
@media (min-width: 768px) {
  .__migrated-html .md\:tw-block { display: block !important; }
  .__migrated-html .md\:tw-hidden { display: none !important; }
}
/* < md behavior */
@media (max-width: 767.98px) {
  .__migrated-html .md\:tw-block { display: none !important; }
  .__migrated-html .md\:tw-hidden { display: block !important; }
}
</style>


<style>
/* Polyfill Tailwind lg: display utilities inside injected legacy HTML */
@media (min-width: 1024px) {
  .__migrated-html .lg\:tw-hidden { display: none !important; }
  .__migrated-html .lg\:tw-block { display: block !important; }
  .__migrated-html .lg\:tw-inline { display: inline !important; }
  .__migrated-html .lg\:tw-inline-block { display: inline-block !important; }
  .__migrated-html .lg\:tw-flex { display: flex !important; }
}
</style>


<style>
/* Decorative frame for legacy homepage banner – inspired by jasapembayaran.com */
.__migrated-html #section-1 #swiper-banner { position: relative; --frame-radius: 18px; }
/* Soft gradient glow over the frame */
.__migrated-html #section-1 #swiper-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--frame-radius);
  pointer-events: none;
  background:
    radial-gradient(120% 120% at 0% 0%, rgba(16,185,129,0.16), transparent 42%),
    radial-gradient(120% 120% at 100% 0%, rgba(99,102,241,0.12), transparent 44%);
  opacity: .9; /* combine with existing background for a subtle glassy glow */
}
/* Inner ring to accentuate the frame without being harsh */
.__migrated-html #section-1 #swiper-banner::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--frame-radius);
  pointer-events: none;
  box-shadow:
    inset 0 0 0 1px rgba(17, 24, 39, 0.08),
    inset 0 1px 0 rgba(255,255,255,0.45);
}
/* Each slide looks like a framed card inside the container */
.__migrated-html #section-1 #swiper-banner .swiper-slide {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(2, 6, 23, 0.12);
}
.__migrated-html #section-1 #swiper-banner .swiper-slide img {
  border-radius: 12px; /* match slide corner for a clean frame */
  background: #fff;
}
/* Keep navigation above overlays */
.__migrated-html #section-1 #swiper-banner .swiper-button-prev,
.__migrated-html #section-1 #swiper-banner .swiper-button-next {
  position: absolute;
  z-index: 20; /* higher than ::before/::after */
}

@media (max-width: 767.98px) {
  .__migrated-html #section-1 #swiper-banner { --frame-radius: 14px; }
  .__migrated-html #section-1 #swiper-banner .swiper-slide { border-radius: 10px; }
  .__migrated-html #section-1 #swiper-banner .swiper-slide img { border-radius: 10px; }
}
</style>


<style>
/* Rounded-rectangle treatment for images across legacy sliders */
/* Keep it scoped to the injected legacy homepage and avoid overriding circular avatars */
.__migrated-html #section-1 #swiper-banner .swiper-slide img { border-radius: 14px; }
.__migrated-html #swiper-menu .swiper-slide img,
.__migrated-html #swiper-our-client .swiper-slide img,
.__migrated-html #swiper-happy-client .swiper-slide img,
.__migrated-html #swiper-we-office .swiper-slide img,
.__migrated-html #swiper-promo-1 .swiper-slide img,
.__migrated-html #swiper-promo-2 .swiper-slide img,
.__migrated-html #swiper-client-1 .swiper-slide img,
.__migrated-html #swiper-client-2 .swiper-slide img,
.__migrated-html #swiper-testimonial .swiper-slide img,
.__migrated-html #swiper-prices .swiper-slide img { border-radius: 12px; }
/* Do not override already circular team avatars */
.__migrated-html #swiper-teams .swiper-slide img.tw-rounded-full { border-radius: 9999px !important; }
/* Round any non-circular team images if present */
.__migrated-html #swiper-teams .swiper-slide img:not(.tw-rounded-full) { border-radius: 12px; }
</style>


<style>
/* Lightbox gallery images: apply rounded-rectangle corners and clip overflow */
.__migrated-html a[data-lightbox] { border-radius: 12px; overflow: hidden; display: inline-block; }
.__migrated-html a[data-lightbox] img { display: block; border-radius: 12px; }
</style>

<style>
/* Banner slider: stylish hover effects for white elements (buttons, frame, images) */
.__migrated-html #section-1 #swiper-banner .swiper-button-prev,
.__migrated-html #section-1 #swiper-banner .swiper-button-next {
  background: rgba(255,255,255,0.85);
  color: #0f172a;
  border: 1px solid rgba(2,6,23,0.08);
  box-shadow: 0 6px 14px rgba(2,6,23,0.12), inset 0 1px 0 rgba(255,255,255,0.6);
  transition: all .2s ease;
  backdrop-filter: blur(6px);
}
.__migrated-html #section-1 #swiper-banner .swiper-button-prev:hover,
.__migrated-html #section-1 #swiper-banner .swiper-button-next:hover {
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-1px) scale(1.06);
  box-shadow: 0 10px 22px rgba(16,185,129,0.28), 0 8px 18px rgba(59,130,246,0.22);
}
.__migrated-html #section-1 #swiper-banner .swiper-button-prev:active,
.__migrated-html #section-1 #swiper-banner .swiper-button-next:active {
  transform: translateY(0) scale(1.02);
  filter: saturate(1.05);
}
/* Slightly intensify frame glow on hover */
.__migrated-html #section-1 #swiper-banner:hover::before { opacity: 1; }
/* Gentle image hover within framed slides */
.__migrated-html #section-1 #swiper-banner .swiper-slide img {
  transition: transform .35s ease, filter .35s ease;
}
.__migrated-html #section-1 #swiper-banner .swiper-slide:hover img {
  transform: scale(1.02);
  filter: saturate(1.06) contrast(1.02);
}
@media (max-width: 767.98px) {
  .__migrated-html #section-1 #swiper-banner .swiper-slide:hover img { transform: scale(1.01); }
}
</style>

<style>
/* Legacy sliders: global nav buttons upgraded glass style */
.__migrated-html .swiper .swiper-button-prev,
.__migrated-html .swiper .swiper-button-next {
  background: rgba(255,255,255,0.88);
  color: #0f172a;
  border: 1px solid rgba(2,6,23,0.08);
  box-shadow: 0 6px 14px rgba(2,6,23,0.12), inset 0 1px 0 rgba(255,255,255,0.6);
  transition: all .2s ease;
  backdrop-filter: blur(6px);
}
.__migrated-html .swiper .swiper-button-prev:hover,
.__migrated-html .swiper .swiper-button-next:hover {
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-1px) scale(1.06);
  box-shadow: 0 10px 22px rgba(16,185,129,0.28), 0 8px 18px rgba(59,130,246,0.22);
}
.__migrated-html .swiper .swiper-button-prev:active,
.__migrated-html .swiper .swiper-button-next:active {
  transform: translateY(0) scale(1.02);
}

/* Legacy sliders: modern pagination bullets */
.__migrated-html .swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: rgba(17,24,39,0.3);
  opacity: 1;
  border: 1px solid rgba(255,255,255,0.6);
  transition: all .25s ease;
  margin: 0 4px !important;
}
.__migrated-html .swiper .swiper-pagination-bullet-active {
  width: 22px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-color: transparent;
  box-shadow: 0 6px 14px rgba(16,185,129,0.25), 0 4px 10px rgba(59,130,246,0.2);
}
.__migrated-html .swiper .swiper-pagination {
  position: relative;
  margin-top: 8px;
}
</style>

<style>
/* KBLI home search box: tidy, stylish, and slightly raised */
.__migrated-html #section-kbli {
  margin-top: clamp(-6px, -1.2vw, -14px) !important;
  /* Match width with Database Peraturan (#section-6): follow natural container width */
  max-width: none;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
.__migrated-html #section-kbli .input-group {
  border-radius: 9999px;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 8px 20px rgba(2, 6, 23, 0.08);
  padding: 6px 8px;
  backdrop-filter: blur(6px);
  width: 100%;
}
.__migrated-html #section-kbli .input-group-text {
  background: transparent;
  border: 0;
  color: #10b981; /* emerald-500 */
}
.__migrated-html #section-kbli .form-control#kbli-home-search {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 10px 12px;
  font-weight: 600;
}
.__migrated-html #section-kbli .btn.btn-outline-secondary {
  background: #f1f5f9;
  color: #0f172a;
  border: 1px solid rgba(2,6,23,0.08);
  border-radius: 9999px;
  transition: all .2s ease;
}
.__migrated-html #section-kbli .btn.btn-outline-secondary:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}
@media (max-width: 767.98px) {
  .__migrated-html #section-kbli .form-control#kbli-home-search {
    padding: 10px 8px;
    font-weight: 500;
  }
  .__migrated-html #section-kbli { margin-top: -6px !important; }
}

/* Pricing search input: tidy and attractive */
.__migrated-html #section-10 .search-pricing {
  border-radius: 9999px !important;
  padding: 10px 14px !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  box-shadow: 0 6px 14px rgba(2, 6, 23, 0.08) !important;
}
</style>


<style>
/* Banner pagination per spec: custom bullets (center-bottom, responsive) */
.__migrated-html #section-1 #swiper-banner { position: relative; }
.__migrated-html #section-1 #swiper-banner .swiper-pagination {
  position: absolute !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  bottom: 1rem !important; /* !bottom-4 */
  z-index: 6; /* above overlay (z=1) and below arrows (z=20) */
}
.__migrated-html #section-1 #swiper-banner .swiper-pagination-bullet {
  width: 16px !important; /* w-4 */
  height: 16px !important; /* h-4 */
  background: #eab308 !important; /* bg-yellow-500 */
  border-radius: 9999px !important; /* rounded-full */
  opacity: 0.5 !important; /* opacity-50 */
  transition: all 200ms ease !important; /* transition-all */
  margin: 0 6px !important;
  border: none !important;
  box-shadow: none !important;
}
.__migrated-html #section-1 #swiper-banner .swiper-pagination-bullet-active {
  width: 24px !important; /* w-6 */
  height: 24px !important; /* h-6 */
  background: #ca8a04 !important; /* bg-yellow-600 */
  opacity: 1 !important; /* opacity-100 */
}
</style>

<style>
/* Banner slide overlay + caption content (legacy injected homepage) */
.__migrated-html #section-1 #swiper-banner .ro-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0));
  z-index: 1;
  pointer-events: none;
  border-radius: inherit;
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem; /* p-10 */
  color: #ffffff;
  z-index: 2;
  pointer-events: none; /* do not block arrows; CTA re-enables */
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-inner {
  max-width: 36rem; /* ~max-w-md */
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-title {
  font-weight: 800; /* font-bold */
  font-size: 1.25rem; /* mobile: text-xl */
  line-height: 1.2;
  margin-bottom: 1rem; /* mb-4 */
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-desc {
  font-size: 1rem; /* mobile: text-base */
  margin-bottom: 1.25rem; /* mb-5/mb-6 approx */
  max-width: 28rem; /* keep paragraphs tidy */
  line-height: 1.6;
  opacity: .95;
  text-shadow: 0 1px 6px rgba(0,0,0,0.4);
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-cta {
  display: inline-block;
  background: #eab308; /* bg-yellow-500 */
  color: #0a0a0a;
  font-weight: 800; /* font-bold */
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 8px 20px rgba(234,179,8,0.35);
  transition: all .2s ease;
  text-decoration: none !important;
  pointer-events: auto; /* clickable inside caption */
}
.__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-cta:hover {
  background: #ca8a04; /* hover:bg-yellow-600 */
  transform: translateY(-1px);
}

/* md and up: increase typography per spec (md:text-5xl for title, md:text-xl for desc) */
@media (min-width: 768px) {
  .__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-title {
    font-size: 3rem; /* ~text-5xl */
  }
  .__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-desc {
    font-size: 1.25rem; /* ~text-xl */
  }
}

/* Mobile: center text and layout */
@media (max-width: 767.98px) {
  .__migrated-html #section-1 #swiper-banner .ro-banner-caption {
    align-items: center; /* items-center */
    text-align: center;
    padding: 1.25rem; /* reduce padding on small screens */
  }
  .__migrated-html #section-1 #swiper-banner .ro-banner-caption .ro-caption-inner {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

/* Enforce requested image sizing: w-full h-[500px] object-cover rounded-2xl */
.__migrated-html #section-1 #swiper-banner .swiper-slide { height: auto !important; }
.__migrated-html #section-1 #swiper-banner .swiper-slide img {
  width: 100% !important;
  height: 500px !important;
  object-fit: cover !important;
  border-radius: 1rem !important; /* 16px rounded-2xl */
}
</style>

<style>
/* Services grid modern cards for legacy injected homepage */
.__migrated-html .ro-services-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 1.5rem; }
@media (min-width: 768px) { .__migrated-html .ro-services-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (min-width: 1024px) { .__migrated-html .ro-services-grid { grid-template-columns: repeat(6, minmax(0,1fr)); } }

.__migrated-html a.ro-service-link { text-decoration: none !important; outline: none; }
.__migrated-html .ro-service-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(2,6,23,.06);
  transition: transform .2s ease, box-shadow .2s ease;
  will-change: transform;
}
.__migrated-html .ro-service-card:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 24px rgba(2,6,23,.12);
}
.__migrated-html a.ro-service-link:focus-visible .ro-service-card {
  box-shadow: 0 0 0 3px rgba(234,179,8,.5), 0 10px 22px rgba(2,6,23,.12);
}
.__migrated-html .ro-service-title {
  color: #1f2937; /* gray-800 */
  font-weight: 600;
  line-height: 1.25;
}
@media (prefers-reduced-motion: reduce) {
  .__migrated-html .ro-service-card { transition: box-shadow .2s ease; }
  .__migrated-html .ro-service-card:hover { transform: none; }
}
</style>

<style>
/* KBLI home: chips + suggestion panel (scoped to injected legacy homepage) */
.__migrated-html #section-kbli .ro-kbli-cat,
.__migrated-html #section-kbli .ro-kbli-quick { margin-top: .5rem; display: flex; flex-wrap: wrap; gap: .5rem; }
.__migrated-html #section-kbli .ro-chip {
  display: inline-flex; align-items: center; gap: .25rem;
  padding: .375rem .75rem; border-radius: 9999px; border: 1px solid rgba(2,6,23,0.12);
  background: #ffffff; color: #0f172a; font-weight: 600; font-size: .875rem;
  transition: all .2s ease; cursor: pointer;
}
.__migrated-html #section-kbli .ro-chip:hover { background: #f8fafc; transform: translateY(-1px); }
.__migrated-html #section-kbli .ro-chip.active { background: #eab308; color: #111827; border-color: transparent; }
.__migrated-html #section-kbli .ro-chip-ghost { background: #f8fafc; border-color: rgba(2,6,23,0.08); }

.__migrated-html #section-kbli .ro-kbli-suggest {
  margin-top: .5rem; border: 1px solid rgba(2,6,23,0.08); border-radius: 12px; background: #ffffff;
  box-shadow: 0 12px 24px rgba(2,6,23,0.12);
}
.__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-list { max-height: 380px; overflow: auto; }
.__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-item {
  display: block; padding: .75rem .875rem; text-decoration: none !important; color: inherit;
  border-bottom: 1px solid rgba(2,6,23,0.06);
}
.__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-item:last-child { border-bottom: 0; }
.__migrated-html #section-kbli .ro-suggest-item .ro-code {
  display: inline-block; min-width: 64px; text-align: center; font-weight: 800; margin-right: .5rem;
  background: #0ea5e9; color: #ffffff; padding: .125rem .5rem; border-radius: .5rem; font-size: .8125rem;
}
.__migrated-html #section-kbli .ro-suggest-item .ro-title { font-weight: 700; }
.__migrated-html #section-kbli .ro-suggest-item .ro-sec {
  margin-left: .5rem; display: inline-block; padding: .125rem .5rem; border-radius: 9999px;
  background: #f1f5f9; color: #0f172a; font-size: .75rem; font-weight: 700;
}
.__migrated-html #section-kbli .ro-suggest-item .ro-desc { margin-top: .25rem; color: #475569; font-size: .875rem; line-height: 1.5; }
.__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-actions { padding: .5rem; display: flex; justify-content: flex-end; }
.__migrated-html #section-kbli .ro-kbli-suggest .ro-view-all {
  display: inline-block; padding: .5rem .875rem; border-radius: .5rem; background: #eab308; color: #111827; font-weight: 800;
  text-decoration: none !important; box-shadow: 0 6px 14px rgba(234,179,8,.28);
}
.__migrated-html #section-kbli mark { background: #fef08a; color: inherit; padding: 0 .125rem; border-radius: .125rem; }

/* Title for popular keywords */
.__migrated-html #section-kbli .ro-kbli-popular-title { color: #64748b; font-weight: 700; margin-right: .25rem; display: inline-flex; align-items: center; }

@media (max-width: 767.98px) {
  .__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-item { padding: .625rem .75rem; }
  .__migrated-html #section-kbli .ro-suggest-item .ro-desc { font-size: .8125rem; }
}
</style>

<style>
/* KBLI home: CTA moved below search */
.__migrated-html #section-kbli .ro-kbli-cta {
  margin-top: .75rem;
  display: flex;
  justify-content: center;
}
.__migrated-html #section-kbli .ro-kbli-cta-btn {
  display: inline-block;
  padding: .625rem 1rem;
  border-radius: .75rem;
  background: linear-gradient(90deg, #f59e0b, #f97316);
  color: #111827;
  font-weight: 800;
  text-decoration: none !important;
  box-shadow: 0 8px 18px rgba(234,179,8,.28);
  border: 1px solid rgba(15,23,42,.08);
  transition: all .2s ease;
}
.__migrated-html #section-kbli .ro-kbli-cta-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}
@media (max-width: 767.98px) {
  .__migrated-html #section-kbli .ro-kbli-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>

<style>
/* KBLI home: responsive refinements */
.__migrated-html #section-kbli .input-group {
  display: flex;
  align-items: center;
  gap: .25rem;
}
@media (max-width: 767.98px) {
  .__migrated-html #section-kbli .input-group {
    flex-wrap: wrap;
    padding: 8px 10px;
    gap: .5rem;
  }
  .__migrated-html #section-kbli .input-group .form-control#kbli-home-search {
    flex: 1 1 100%;
    min-width: 0;
  }
  .__migrated-html #section-kbli .input-group .btn {
    width: 100%;
  }
}

/* Chips: horizontal scroll on small screens with snap */
@media (max-width: 767.98px) {
  .__migrated-html #section-kbli .ro-kbli-cat,
  .__migrated-html #section-kbli .ro-kbli-quick {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: .5rem;
    padding-bottom: .25rem;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
  }
  .__migrated-html #section-kbli .ro-chip {
    scroll-snap-align: start;
    white-space: nowrap;
  }
}

/* Suggest list: better max-height and word wrapping */
.__migrated-html #section-kbli .ro-kbli-suggest .ro-suggest-list {
  max-height: clamp(240px, 52vh, 420px);
}
.__migrated-html #section-kbli .ro-suggest-item .ro-title,
.__migrated-html #section-kbli .ro-suggest-item .ro-desc {
  word-break: break-word;
}
</style>

<style>
/* KBLI home: equal inner padding for the white box container */
.__migrated-html #section-kbli > .tw-bg-white {
  /* Sama kiri-kanan-atas-bawah */
  padding: 12px !important;
}

/* KBLI home: reduce empty right space by flexing columns on md+ */
@media (min-width: 768px) {
  .__migrated-html #section-kbli .row.align-items-stretch > .col-md-8 {
    /* Let search column grow and take remaining space */
    flex: 1 1 auto !important;
    width: auto !important;
    max-width: none !important;
    min-width: 0; /* allow input to shrink without overflow */
  }
  .__migrated-html #section-kbli .row.align-items-stretch > .col-md-4 {
    /* Right column shrinks to content width */
    flex: 0 0 auto !important;
    width: auto !important;
    margin-left: auto; /* stick to far right */
  }
}
</style>


<style>
/* What We Offer (Apa Yang Kami Tawarkan) – 6 boxes made tidy, professional, and cool (legacy injected homepage) */
.__migrated-html .ro-offer-card {
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(2,6,23,.08);
  overflow: hidden;
  background: #ffffff;
  transition: transform .2s ease, box-shadow .2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.__migrated-html .ro-offer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(2,6,23,.14);
}
.__migrated-html .ro-offer-img {
  width: 100%;
  height: clamp(140px, 22vw, 200px);
  object-fit: cover;
  display: block;
}
@media (min-width: 768px) {
  .__migrated-html .ro-offer-img { height: clamp(160px, 18vw, 220px); }
}
.__migrated-html .ro-offer-body {
  padding: 1rem 1rem 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  flex: 1 1 auto;
}
.__migrated-html .ro-offer-title {
  color: #111827;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: .25rem;
}
.__migrated-html .ro-offer-text {
  color: #6b7280;
  font-size: .95rem;
  line-height: 1.55;
  min-height: 2.6em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.__migrated-html .ro-offer-cta {
  display: inline-block;
  align-self: center;
  margin-top: auto;
  padding: .625rem 1rem;
  border-radius: .75rem;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  color: #ffffff !important;
  border: none;
  text-decoration: none !important;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(16,185,129,.28);
  transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
}
.__migrated-html .ro-offer-cta:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
  box-shadow: 0 12px 28px rgba(16,185,129,.35);
}
.__migrated-html .ro-offer-cta:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(16,185,129,.4), 0 10px 24px rgba(0,0,0,.12);
}
</style>
