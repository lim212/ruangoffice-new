# Data Protection System

## Overview
Sistem proteksi data yang komprehensif untuk melindungi database KBLI dan Peraturan dari bot, scraping, dan akses tidak sah.

## Features

### 1. Visitor ID System
- Setiap visitor mendapat ID unik yang di-generate secara otomatis
- ID disimpan di sessionStorage untuk tracking
- Format: `visitor_timestamp_random`

### 2. Rate Limiting
- Maksimal 100 request per session (30 menit)
- Session timeout otomatis setelah 30 menit
- Counter reset otomatis saat session expired

### 3. Bot Detection
- Deteksi User-Agent yang mencurigakan
- Block pattern: bot, crawler, spider, scraper, curl, wget, python, requests, scrapy, selenium, phantom
- Automatic blocking untuk bot yang terdeteksi

### 4. Protected API Endpoints
- `/api/kbli-protected` - KBLI data dengan proteksi
- `/api/peraturan-protected` - Peraturan data dengan proteksi
- Header validation untuk setiap request
- Response dengan metadata proteksi

### 5. Data Obfuscation
- Setiap data item diberi metadata proteksi
- Timestamp dan visitor ID tracking
- Index obfuscation untuk mencegah pattern recognition

## Implementation

### Files Created:
1. `middleware/data-protection.ts` - Middleware untuk proteksi route
2. `composables/useDataProtection.js` - Composable untuk proteksi data
3. `server/api/kbli-protected.get.ts` - Protected KBLI API
4. `server/api/peraturan-protected.get.ts` - Protected Peraturan API

### Files Modified:
1. `components/KbliSection.vue` - Menggunakan protected API
2. `pages/kbli.vue` - Menggunakan protected API
3. `pages/peraturan.vue` - Menggunakan protected API

## Security Features

### Request Validation:
- Visitor ID validation
- Rate limit checking
- Session timeout validation
- User-Agent bot detection

### Response Headers:
- `X-RateLimit-Remaining` - Sisa request yang diizinkan
- `X-RateLimit-Reset` - Waktu reset rate limit
- `X-Protection-Status` - Status proteksi aktif

### Error Handling:
- 403: Access denied (missing visitor ID)
- 429: Rate limit exceeded
- 401: Session expired
- 500: Server error

## Copy Feature

### Added Copy Buttons:
- Tombol "Copy Info" di semua popup detail
- Format text yang rapi dan informatif
- Visual feedback saat berhasil copy
- Fallback untuk browser lama

### Copy Content Format:
```
KBLI 72109 - KONSULTASI KOMPUTER

URAIAN:
KONSULTASI KOMPUTER

RUANG LINGKUP:
Kelompok ini mencakup usaha konsultasi di bidang teknologi informasi dan komputer...

INFORMASI PENTING:
- Kode KBLI: 72109
- Kategori: Jasa Profesional, Ilmiah dan Teknis
- Risiko: Rendah
- Status: Aktif (KBLI 2020)

Sumber: Database KBLI RuangOffice
Generated: 20/01/2025 15:30:45
```

## Usage

### For Developers:
1. Data protection otomatis aktif
2. Tidak perlu konfigurasi tambahan
3. Monitoring via console logs
4. Error handling otomatis

### For Users:
1. Akses normal tanpa perubahan
2. Copy button untuk kemudahan
3. Visual feedback yang jelas
4. Fallback untuk browser lama

## Monitoring

### Console Logs:
- Visitor ID generation
- Request counting
- Bot detection alerts
- Protection status updates

### Error Tracking:
- Failed requests
- Rate limit violations
- Bot access attempts
- Session timeouts

## Future Enhancements

1. **IP-based Rate Limiting**
2. **CAPTCHA Integration**
3. **Advanced Bot Detection**
4. **Analytics Dashboard**
5. **Real-time Monitoring**

## Notes

- Proteksi aktif di semua environment
- Tidak mempengaruhi user experience normal
- Compatible dengan semua browser modern
- Fallback untuk browser lama
- Zero configuration required
