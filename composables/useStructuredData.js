export const useStructuredData = () => {
  const generateKbliStructuredData = (kbliData) => {
    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Database KBLI 2020 - Klasifikasi Baku Lapangan Usaha Indonesia",
      "description": "Database lengkap KBLI 2020 dengan 1888 kode klasifikasi. Cari dan temukan kode KBLI yang sesuai dengan usaha Anda.",
      "url": "https://ruangoffice.com/kbli",
      "keywords": "KBLI 2020, Klasifikasi Baku Lapangan Usaha, Database KBLI, OSS RBA, Kode KBLI, Usaha Indonesia",
      "provider": {
        "@type": "Organization",
        "name": "RuangOffice",
        "url": "https://ruangoffice.com"
      },
      "dateModified": new Date().toISOString(),
      "license": "https://ruangoffice.com/kbli",
      "distribution": {
        "@type": "DataDownload",
        "contentUrl": "https://ruangoffice.com/kbli",
        "encodingFormat": "application/json"
      },
      "variableMeasured": kbliData.slice(0, 10).map(item => ({
        "@type": "PropertyValue",
        "name": item.title,
        "description": item.description,
        "value": item.code
      }))
    }
  }

  const generatePeraturanStructuredData = (peraturanData) => {
    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Database Peraturan Indonesia",
      "description": "Database lengkap peraturan Indonesia termasuk UU, PP, Perpres, dan peraturan lainnya.",
      "url": "https://ruangoffice.com/peraturan",
      "keywords": "Peraturan Indonesia, UU, PP, Perpres, Database Peraturan, Peraturan Terbaru, Download Peraturan, Hukum Indonesia",
      "provider": {
        "@type": "Organization",
        "name": "RuangOffice",
        "url": "https://ruangoffice.com"
      },
      "dateModified": new Date().toISOString(),
      "license": "https://ruangoffice.com/peraturan",
      "distribution": {
        "@type": "DataDownload",
        "contentUrl": "https://ruangoffice.com/peraturan",
        "encodingFormat": "application/json"
      },
      "variableMeasured": peraturanData.slice(0, 10).map(item => ({
        "@type": "PropertyValue",
        "name": `${item.jenis} No. ${item.nomor}/${item.tahun}`,
        "description": item.tentang,
        "value": item.jenis
      }))
    }
  }

  const generateWebsiteStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "RuangOffice",
      "url": "https://ruangoffice.com",
      "description": "Platform lengkap untuk pendirian PT, CV, dan layanan bisnis lainnya dengan database KBLI dan Peraturan terlengkap.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ruangoffice.com/kbli?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "RuangOffice",
        "url": "https://ruangoffice.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ruangoffice.com/assets/img/Logo_Ruang Office R.png"
        }
      }
    }
  }

  return {
    generateKbliStructuredData,
    generatePeraturanStructuredData,
    generateWebsiteStructuredData
  }
}
