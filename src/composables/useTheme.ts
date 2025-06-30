import { useThemeStore } from '@/stores/theme'

export function useTheme() {
  const themeStore = useThemeStore()
  
  return {
    theme: themeStore.theme,
    toggleTheme: themeStore.toggleTheme,
    setTheme: themeStore.setTheme
  }
}