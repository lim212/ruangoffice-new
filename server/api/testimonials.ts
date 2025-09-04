import { defineEventHandler, getQuery } from 'h3'
import { useRuntimeConfig } from '#imports'

interface TestimonialItem {
  name: string
  review: string
  avatar?: string
  rating?: number
  company?: string
  date?: string
  source?: string
}

function normalizeItem(raw: any): TestimonialItem | null {
  if (!raw || typeof raw !== 'object') return null
  const name = raw.name || raw.nama || raw.author || raw.user || raw.title
  const review = raw.review || raw.comment || raw.ulasan || raw.message || raw.text || raw.desc || raw.description
  const avatar = raw.avatar || raw.photo || raw.foto || raw.image || raw.picture
  const rating = Number(raw.rating || raw.rate || raw.stars || 5)
  const company = raw.company || raw.perusahaan || raw.org || raw.role
  const date = raw.date || raw.tanggal || raw.created_at || raw.time
  if (!name || !review) return null
  const r = isFinite(rating) ? Math.max(1, Math.min(5, rating)) : 5
  return { name: String(name), review: String(review), avatar: avatar ? String(avatar) : undefined, rating: r, company: company ? String(company) : undefined, date: date ? String(date) : undefined }
}

function dedupe(items: TestimonialItem[]): TestimonialItem[] {
  const seen = new Set<string>()
  const out: TestimonialItem[] = []
  for (const it of items) {
    const key = `${it.name}|${it.review}`.toLowerCase()
    if (!seen.has(key)) { seen.add(key); out.push(it) }
  }
  return out
}

function padTo24(items: TestimonialItem[]): TestimonialItem[] {
  const out = items.slice(0, 24)
  if (out.length >= 24) return out
  let i = 0
  while (out.length < 24 && items.length > 0) {
    const base = items[i % items.length]
    out.push({ ...base, name: `${base.name} · ${Math.floor(out.length / items.length) + 2}` })
    i++
  }
  return out
}

function fallbackTestimonials(): TestimonialItem[] {
  return [
    { name: 'Andi Pratama', review: 'Proses cepat dan jelas, dokumen beres tanpa ribet. Mantap!', rating: 5 },
    { name: 'Siti Lestari', review: 'Timnya responsif dan sabar menjelaskan. Sangat membantu.', rating: 5 },
    { name: 'Budi Santoso', review: 'Harga transparan, layanan profesional. Recomended!', rating: 5 },
    { name: 'Dewi Kartika', review: 'Pengurusan NIB selesai tepat waktu. Good job!', rating: 5 },
    { name: 'Rangga Saputra', review: 'Pertama kali urus PT, dibimbing step by step. Puas.', rating: 5 },
    { name: 'Yuni Maharani', review: 'Virtual Office rapi dan representatif. Nilai plus!', rating: 4 },
    { name: 'Fajar Nugraha', review: 'Komunikasi lancar, update progress rutin. Profesional.', rating: 5 },
    { name: 'Maya Putri', review: 'Pelayanan ramah, hasil sesuai janji. Terima kasih!', rating: 5 },
    { name: 'Hendra Wijaya', review: 'Legalitas clear, dokumen lengkap. Recommended.', rating: 5 },
    { name: 'Nadia Safitri', review: 'Pengerjaan rapi, timeline on point. Keren.', rating: 5 },
    { name: 'Iqbal Maulana', review: 'Support after sales juga oke. Senang bekerjasama.', rating: 5 },
    { name: 'Citra Ayu', review: 'Semua proses dijelaskan detail, jadi tenang.', rating: 5 },
    { name: 'Teguh Prakoso', review: 'Fast response dan profesional.', rating: 5 },
    { name: 'Ririn Oktaviani', review: 'Berkas rapi, tinggal pakai. Sungguh membantu.', rating: 5 },
    { name: 'Dimas Alamsyah', review: 'On budget, on time. Luar biasa.', rating: 5 },
    { name: 'Anisa Rahma', review: 'Pelayanan ramah, hasil memuaskan.', rating: 5 },
    { name: 'Wahyu Hidayat', review: 'Sangat terbantu untuk urus perizinan.', rating: 5 },
    { name: 'Fitri Handayani', review: 'VO strategis, fasilitas lengkap.', rating: 4 },
    { name: 'Galih Kurnia', review: 'Dokumen valid dan resmi. Mantap.', rating: 5 },
    { name: 'Putri Amelia', review: 'Tim ahli dan komunikatif.', rating: 5 },
    { name: 'Rafi Akbar', review: 'Proses mudah, hasil jelas.', rating: 5 },
    { name: 'Nisa Fadhila', review: 'Cepat, amanah, terpercaya.', rating: 5 },
    { name: 'Reza Aditya', review: 'Sesuai kebutuhan bisnis saya.', rating: 5 },
    { name: 'Aulia Syifa', review: 'Pelayanan terbaik sejauh ini.', rating: 5 }
  ]
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const q = getQuery(event)
  const endpoint = (q.endpoint as string) || (config.public as any)?.testimonialsEndpoint

  try {
    let items: TestimonialItem[] = []
    if (endpoint) {
      const res: any = await $fetch(endpoint, { timeout: 7000 }).catch(() => null)
      const arr: any[] = Array.isArray(res) ? res : (Array.isArray(res?.data) ? res.data : [])
      const normalized = arr.map(normalizeItem).filter(Boolean) as TestimonialItem[]
      items = dedupe(normalized)
    }
    if (!items || items.length === 0) {
      items = fallbackTestimonials()
    }
    return padTo24(items)
  } catch (e) {
    return padTo24(fallbackTestimonials())
  }
})
