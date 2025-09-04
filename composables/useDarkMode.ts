export const useDarkMode = () => {
  const isDark = ref(false)
  const isNight = ref(false)

  // Initialize from localStorage or system preference
  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark') {
        isDark.value = true
        isNight.value = false
      } else if (savedTheme === 'night') {
        isDark.value = false
        isNight.value = true
      } else if (savedTheme === 'light') {
        isDark.value = false
        isNight.value = false
      } else {
        // Use system preference
        isDark.value = systemPrefersDark
        isNight.value = false
      }
      
      applyTheme()
    }
  }

  // Apply theme to document
  const applyTheme = () => {
    if (process.client) {
      const html = document.documentElement
      
      // Remove all theme classes
      html.classList.remove('dark', 'night')
      
      if (isDark.value) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else if (isNight.value) {
        html.classList.add('night')
        localStorage.setItem('theme', 'night')
      } else {
        localStorage.setItem('theme', 'light')
      }
    }
  }

  // Toggle between light, dark, and night modes
  const toggleTheme = () => {
    if (isDark.value) {
      // From dark to night
      isDark.value = false
      isNight.value = true
    } else if (isNight.value) {
      // From night to light
      isNight.value = false
      isDark.value = false
    } else {
      // From light to dark
      isDark.value = true
      isNight.value = false
    }
    
    applyTheme()
  }

  // Set specific theme
  const setTheme = (theme: 'light' | 'dark' | 'night') => {
    isDark.value = theme === 'dark'
    isNight.value = theme === 'night'
    applyTheme()
  }

  // Get current theme name
  const getCurrentTheme = computed(() => {
    if (isDark.value) return 'dark'
    if (isNight.value) return 'night'
    return 'light'
  })

  // Get theme icon
  const getThemeIcon = computed(() => {
    if (isDark.value) return '🌙' // Dark mode
    if (isNight.value) return '🌃' // Night mode
    return '☀️' // Light mode
  })

  // Get theme label
  const getThemeLabel = computed(() => {
    if (isDark.value) return 'Dark Mode'
    if (isNight.value) return 'Night Mode'
    return 'Light Mode'
  })

  // Initialize on mount
  onMounted(() => {
    initializeTheme()
  })

  return {
    isDark: readonly(isDark),
    isNight: readonly(isNight),
    toggleTheme,
    setTheme,
    getCurrentTheme,
    getThemeIcon,
    getThemeLabel
  }
}
