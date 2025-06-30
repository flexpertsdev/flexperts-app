import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('system')
  const resolvedTheme = ref<'light' | 'dark'>('light')

  function initialize() {
    // Load saved theme preference
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      theme.value = saved
    }
    
    updateResolvedTheme()
    applyTheme()
  }

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    updateResolvedTheme()
    applyTheme()
  }

  function updateResolvedTheme() {
    if (theme.value === 'system') {
      resolvedTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      resolvedTheme.value = theme.value
    }
  }

  function applyTheme() {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(resolvedTheme.value)
    document.documentElement.setAttribute('data-theme', resolvedTheme.value)
  }

  // Watch for system theme changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (theme.value === 'system') {
        resolvedTheme.value = e.matches ? 'dark' : 'light'
        applyTheme()
      }
    })
  }

  // Watch theme changes
  watch(theme, () => {
    updateResolvedTheme()
    applyTheme()
  })

  return {
    theme,
    resolvedTheme,
    initialize,
    setTheme
  }
})