export default defineNuxtPlugin(() => {
  if (process.server) return
  const revealClass = 'reveal-animate'
  const revealedClass = 'is-revealed'

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add(revealedClass)
          observer.unobserve(el)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  )

  const scan = () => {
    document.querySelectorAll<HTMLElement>(`.${revealClass}:not(.${revealedClass})`).forEach(el => {
      observer.observe(el)
    })
  }

  // initial scan & on route change
  scan()
  window.addEventListener('load', scan)
  document.addEventListener('nuxt:page:finish', scan as any)
})


