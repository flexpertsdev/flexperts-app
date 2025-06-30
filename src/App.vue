<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import { usePWA } from '@/composables/usePWA'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const { updateSWStatus } = usePWA()

onMounted(async () => {
  // Initialize stores
  await authStore.initialize()
  themeStore.initialize()
  
  // Initialize PWA
  updateSWStatus()
})
</script>