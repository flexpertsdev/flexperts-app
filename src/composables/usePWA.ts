import { ref } from 'vue'
import { registerSW } from 'virtual:pwa-register'

export function usePWA() {
  const offlineReady = ref(false)
  const needRefresh = ref(false)
  const updateServiceWorker = ref<(() => Promise<void>) | undefined>()

  const updateSW = registerSW({
    immediate: true,
    onOfflineReady() {
      offlineReady.value = true
    },
    onNeedRefresh() {
      needRefresh.value = true
    },
    onRegisteredSW(swUrl, r) {
      if (r) {
        updateServiceWorker.value = async () => {
          r.update()
          await updateSW()
        }
      }
    }
  })

  const close = () => {
    offlineReady.value = false
    needRefresh.value = false
  }

  return {
    offlineReady,
    needRefresh,
    updateServiceWorker,
    close
  }
}