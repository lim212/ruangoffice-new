<template>
  <div>
    <div class="sticky-top">
      <!-- Mobile header bar (visible on mobile only) -->
      <div class="d-lg-none bg-dark px-3 py-2 d-flex align-items-center justify-content-between">
        <a href="/" class="d-inline-flex align-items-center">
          <img src="/assets/ruangoffice/logo-ro.ico" alt="RuangOffice" style="height:28px;width:auto" />
        </a>
        <button class="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideDrawer" aria-controls="sideDrawer" aria-label="Open Menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <!-- Mobile offcanvas menu -->
      <div class="offcanvas offcanvas-end bg-secondary d-md-none" tabindex="-1" id="sideDrawer" aria-labelledby="sideDrawerLabel">
        <div class="p-3 mb-3 bg-black border rounded offcanvas-header">
          <a class="text-center w-100" href="https://www.ruangoffice.com">
            <img loading="lazy" class="w-100" src="/assets/ruangoffice/favicon.png" alt="RuangOffice">
          </a>
          <button type="button" class="tw-p-1 tw-border tw-rounded tw-border-primary tw-flex tw-absolute tw-top-2 tw-right-2 tw-text-primary hover:tw-border-white hover:tw-text-white tw-transition-all tw-duration-1000" data-bs-dismiss="offcanvas" aria-label="Close">
            <svg class="tw-size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="py-0 text-center offcanvas-body nav-mobile">
          <div class="mb-3 position-relative d-inline-block" style="width: 100%">
            <div class="gap-3 d-flex">
              <button type="button" class="d-flex justify-content-between align-items-center btn btn-outline-light w-100" data-bs-toggle="modal" data-bs-target="#searchingModal">
                <span>Pencarian</span>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>

          <a href="/" class="border-bottom border-top border-dark position-relative d-block bg-warning text-black py-2 ">
            HOME
          </a>

          <a class="border-bottom border-dark position-relative d-block bg-warning text-black py-2 " data-bs-toggle="collapse" href="#collapseSERVICES" role="button" aria-expanded="false" aria-controls="collapseSERVICES">
            MENU'S
            <i class="fa-solid fa-angle-down position-absolute top-50 translate-middle" style="right: .5rem; color: #23d366;"></i>
          </a>
          <div class="collapse" id="collapseSERVICES">
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://ruangoffice.com/virtualoffice">Virtual Office</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/apa-itu-private-office">Private Office</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/membangun-landasan-yang-kuat-untuk-sukses-pendirian-pt-sebagai-langkah-strategis">Pendirian PT</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/lima-alasan-mengapa-pendirian-pt-pma-adalah-pilihan-yang-tepat-bagi-investasi-asing">Pendirian PT PMA</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/syarat-dan-tutorial-cara-membuat-pt-perorangan">PT Perorangan</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/pendirian-cv-strategi-efektif-untuk-menyongsong-masa-depan-bisnis">Pendirian CV</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/memahami-langkah-langkah-penting-dalam-pendirian-yayasan-panduan-lengkap-untuk-para-calon-pendiri/">Pendirian Yayasan</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/mendirikan-firma-panduan-lengkap-untuk-memulai-bisnis-yang-sukses">Pendirian Firma</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/panduan-lengkap-dalam-pembuatan-nib-nomor-induk-berusaha-untuk-meningkatkan-efisiensi-bisnis-anda">Pengurusan NIB</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/jasa-pengurusan-izin-usaha-apotek">Apotek / Alkes</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/jenis-jenis-pajak-yang-harus-dibayar-pengusaha-umkm">Konsultan Pajak</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/syarat-pengajuan-pkp-pengusaha-kena-pajak-dan-kewajiban-saat-terdaftar">Pengurusan PKP</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://blog.ruangoffice.com/memahami-proses-dan-persyaratan-pengurusan-bpom-untuk-obat-obatan-bermutu-tinggi">Pengurusan BPOM</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://ruangoffice.com/kbli">KBLI</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://ruangoffice.com/regulasi">Regulasi</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://ruangoffice.com/blog">Blog</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://ruangoffice.com/testimonial">Testimonial</a>
            <a class="py-2 text-white text-uppercase border-bottom border-dark position-relative d-block bg-dark" href="https://wa.me/62811113666">Pengurusan BUJP</a>
          </div>

          <a class="border-bottom border-dark position-relative d-block bg-warning text-black py-2 " data-bs-toggle="collapse" href="#collapseLOCATION" role="button" aria-expanded="false" aria-controls="collapseLOCATION">
            LOCATION
            <i class="fa-solid fa-angle-down position-absolute top-50 translate-middle" style="right: .5rem; color: #23d366;"></i>
          </a>
          <div class="collapse" id="collapseLOCATION">
            <a class="py-2 text-white border-bottom border-dark position-relative d-block bg-dark menuLocation" data-map="green-garden" href="https://www.ruangoffice.com/contact-us">JAKARTA</a>
            <a class="py-2 text-white border-bottom border-dark position-relative d-block bg-dark menuLocation" data-map="head-office" href="https://www.ruangoffice.com/contact-us">TANGERANG</a>
          </div>
        </div>
      </div>

      <!-- Top running text above the header -->
      <div class="top-icon-marquee d-none d-lg-block bg-warning">
        <div class="px-3 py-1">
          <div class="track" aria-live="polite" role="status">
            <span class="marquee-chunk">Kami melayani jasa pendirian PT, pendirian PT PMA, pembuatan NIB, pengurusan PKP, perizinan BPOM, Virtual Office, Private Office, serta layanan perizinan dan legalitas bisnis lainnya. Konsultasi gratis • Proses cepat • Harga transparan • Hubungi kami: 0811-111-3666</span>
            <span class="marquee-chunk">Kami melayani jasa pendirian PT, pendirian PT PMA, pembuatan NIB, pengurusan PKP, perizinan BPOM, Virtual Office, Private Office, serta layanan perizinan dan legalitas bisnis lainnya. Konsultasi gratis • Proses cepat • Harga transparan • Hubungi kami: 0811-111-3666</span>
          </div>
        </div>
      </div>

      <!-- Desktop navigation -->
      <nav style="font-size: 1rem; letter-spacing: 1px;" class="mx-auto text-center custom-navigation d-none d-lg-block position-relative bg-dark" role="navigation">
        <ul class="bg-secondary">
          <li class="p-0 brand-logo"><a class="p-3 d-block" href="/"><img src="/assets/ruangoffice/logo-ro.ico" alt="RuangOffice" /></a></li>
          <li class="line">&nbsp;</li>
          <li class="p-0 "><a class="p-3 d-block" href="/">HOME</a></li>
          <li class="line">&nbsp;</li>
          <li class="tw-group ">
            <a class="!tw-flex tw-justify-between tw-w-full tw-items-center" href="#" aria-haspopup="true">
              <div class="mr-2">MENU'S</div>
              <i class="fa-solid fa-angle-down tw-ml-1"></i>
            </a>
            <ul class="custom-navigation-dropdown group-hover:tw-overflow-y-auto" style="margin-left: 6rem; max-height: 600px;" aria-label="submenu">
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://ruangoffice.com/virtualoffice">Virtual Office</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/apa-itu-private-office">Private Office</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/membangun-landasan-yang-kuat-untuk-sukses-pendirian-pt-sebagai-langkah-strategis">Pendirian PT</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/lima-alasan-mengapa-pendirian-pt-pma-adalah-pilihan-yang-tepat-bagi-investasi-asing">Pendirian PT PMA</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/syarat-dan-tutorial-cara-membuat-pt-perorangan">PT Perorangan</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/pendirian-cv-strategi-efektif-untuk-menyongsong-masa-depan-bisnis">Pendirian CV</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/memahami-langkah-langkah-penting-dalam-pendirian-yayasan-panduan-lengkap-untuk-para-calon-pendiri/">Pendirian Yayasan</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/mendirikan-firma-panduan-lengkap-untuk-memulai-bisnis-yang-sukses">Pendirian Firma</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/panduan-lengkap-dalam-pembuatan-nib-nomor-induk-berusaha-untuk-meningkatkan-efisiensi-bisnis-anda">Pengurusan NIB</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/jasa-pengurusan-izin-usaha-apotek">Apotek / Alkes</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/jenis-jenis-pajak-yang-harus-dibayar-pengusaha-umkm">Konsultan Pajak</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/syarat-pengajuan-pkp-pengusaha-kena-pajak-dan-kewajiban-saat-terdaftar">Pengurusan PKP</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://blog.ruangoffice.com/memahami-proses-dan-persyaratan-pengurusan-bpom-untuk-obat-obatan-bermutu-tinggi">Pengurusan BPOM</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://ruangoffice.com/kbli">KBLI</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://ruangoffice.com/regulasi">Regulasi</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://ruangoffice.com/blog">Blog</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://ruangoffice.com/testimonial">Testimonial</a></li>
              <li class="p-0 tw-w-full "><a class="p-3 d-block text-uppercase " href="https://wa.me/62811113666">Pengurusan BUJP</a></li>
            </ul>
          </li>
          <li class="line">&nbsp;</li>
          <li>
            <a href="#" class="d-flex" aria-haspopup="true">
              <div class="mr-2">LOCATION</div>
              <i class="fa-solid fa-angle-down" style="margin-top: 2.5px; margin-left: 5px;"></i>
            </a>
            <ul class="custom-navigation-dropdown" aria-label="submenu">
              <li class="p-0 w-100"><a class="p-3 d-block menuLocation" data-map="green-garden" href="https://www.ruangoffice.com/contact-us">JAKARTA</a></li>
              <li class="p-0 w-100"><a class="p-3 d-block menuLocation" data-map="head-office" href="https://www.ruangoffice.com/contact-us">TANGERANG</a></li>
            </ul>
          </li>
          <li class="line">&nbsp;</li>
          <li class="p-0 "><a class="p-3" href="https://ruangoffice.com/kbli">KBLI</a></li>
          <li class="line">&nbsp;</li>
          <li class="p-0 "><a class="p-3" href="https://www.ruangoffice.com/price">PRICING</a></li>
          <li class="line">&nbsp;</li>
          <li class="p-0 "><a class="p-3" href="https://ruangoffice.co.id/login">LOGIN</a></li>
          <li class="line">&nbsp;</li>
          <li class="p-0 "><a class="p-3 d-block" href="https://www.ruangoffice.com/contact-us#contact-form" aria-haspopup="true">HUBUNGI KAMI</a></li>

          <div class="nav-right d-inline-flex align-items-center">
            <a class="btn-tracking" href="https://ruangoffice.co.id/tracking" aria-haspopup="true">TRACK PERIZINAN</a>
          </div>

          <div class="nav-search d-inline-block ms-4">
            <div class="gap-3 d-flex">
              <button type="button" class="d-flex justify-content-between align-items-center btn btn-outline-light w-100" data-bs-toggle="modal" data-bs-target="#searchingModal">
                <span>Pencarian</span>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
// Header layout derived from public/original.html to mirror ruangoffice.com
</script>

<style>
/* Desktop nav layout */
nav.custom-navigation > ul {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: .25rem;
  padding: .5rem 1rem;
}
nav.custom-navigation > ul > li { list-style: none; }
nav.custom-navigation > ul > li.line { width: 1px; height: 24px; background-color: rgba(255,255,255,.25); }
nav.custom-navigation > ul .nav-right { margin-left: auto; display: flex; align-items: center; gap: .75rem; }
nav.custom-navigation > ul .nav-search { min-width: 220px; max-width: 320px; width: clamp(220px, 22vw, 320px) !important; }
/* Brand logo sizing */
nav.custom-navigation > ul > li.brand-logo img { height: 28px; width: auto; display: block; }
/* Dropdown base styles */
nav.custom-navigation ul.custom-navigation-dropdown { display: none; position: absolute; background-color: #212529; border: 1px solid rgba(255,255,255,.1); padding: 0; margin-top: .25rem; list-style: none; text-align: left; min-width: 280px; z-index: 1040; }
nav.custom-navigation li.tw-group:hover > ul.custom-navigation-dropdown { display: block; }
@media (min-width: 992px) and (max-width: 1200px) { nav.custom-navigation > ul > li.line { display: none; } }

/* Top icon marquee (banner) */
.top-icon-marquee { overflow: hidden; font-size: .875rem; }
.top-icon-marquee .track { display: flex; gap: 3rem; white-space: nowrap; will-change: transform; animation: top-marquee 40s linear infinite; }
.top-icon-marquee:hover .track { animation-play-state: paused; }
.top-icon-marquee .marquee-chunk { display: inline-block; color: #1b1b1b; opacity: .95; font-weight: 600; letter-spacing: .2px; }
.top-icon-marquee .item { display: inline-flex; align-items: center; gap: .5rem; color: #1b1b1b; opacity: .95; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: .5px; }
.top-icon-marquee .item i { color: #0e8349; font-size: .95rem; }
@keyframes top-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
</style>
