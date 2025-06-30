<template>
  <div class="min-h-screen bg-secondary text-primary transition-colors duration-300 flex items-center justify-center p-4">
    <!-- Background decoration -->
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient rounded-full opacity-20 blur-3xl animate-float-1"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient rounded-full opacity-20 blur-3xl animate-float-2"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient rounded-full opacity-10 blur-3xl animate-float-3"></div>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <router-link to="/" class="inline-flex items-center space-x-2 mb-2">
          <div class="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <span class="text-2xl font-bold">Flexperts</span>
        </router-link>
        <p class="text-secondary">Build smarter, ship faster</p>
      </div>

      <!-- Auth Card -->
      <div class="bg-primary rounded-2xl shadow-xl p-8 border border-primary">
        <!-- Tab Switcher -->
        <div class="flex bg-tertiary rounded-lg p-1 mb-8">
          <button class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 bg-primary text-primary shadow-sm">
            Login
          </button>
          <router-link to="/signup" class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 text-tertiary text-center">
            Sign Up
          </router-link>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              id="email" 
              class="w-full px-4 py-3 bg-secondary border border-primary rounded-lg text-primary placeholder-muted transition-colors focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              placeholder="you@example.com"
              required
            >
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="password" class="block text-sm font-medium">Password</label>
              <a href="#" class="text-sm brand-primary-text hover:opacity-80">Forgot password?</a>
            </div>
            <input 
              v-model="form.password"
              type="password" 
              id="password" 
              class="w-full px-4 py-3 bg-secondary border border-primary rounded-lg text-primary placeholder-muted transition-colors focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
              placeholder="••••••••"
              required
            >
          </div>

          <div class="flex items-center">
            <input 
              v-model="form.remember"
              type="checkbox" 
              id="remember" 
              class="w-4 h-4 brand-primary rounded border-secondary focus:ring-2 focus:ring-offset-0 focus:ring-green-500"
            >
            <label for="remember" class="ml-2 text-sm text-secondary">Remember me for 30 days</label>
          </div>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full bg-gradient text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>

          <!-- Social Login -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-primary"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-primary text-tertiary">Or continue with</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button type="button" @click="handleGoogleLogin" class="flex items-center justify-center px-4 py-2.5 border border-primary rounded-lg hover:bg-tertiary transition-colors">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button type="button" @click="handleGithubLogin" class="flex items-center justify-center px-4 py-2.5 border border-primary rounded-lg hover:bg-tertiary transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>
        </form>
      </div>

      <!-- Alternative action -->
      <p class="text-center mt-8 text-sm text-secondary">
        Don't have an account?
        <router-link to="/signup" class="brand-primary-text hover:opacity-80 font-medium ml-1">
          Sign up
        </router-link>
      </p>
    </div>

    <!-- Theme Toggle -->
    <button @click="toggleTheme" class="fixed top-4 right-4 p-3 rounded-lg bg-primary border border-primary hover:bg-tertiary transition-colors">
      <svg class="w-5 h-5 text-secondary hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
      <svg class="w-5 h-5 text-secondary dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTheme } from '@/composables/useTheme'

const router = useRouter()
const authStore = useAuthStore()
const { toggleTheme } = useTheme()

const loading = ref(false)
const form = ref({
  email: '',
  password: '',
  remember: false
})

const handleLogin = async () => {
  loading.value = true
  try {
    await authStore.signIn(form.value.email, form.value.password)
    router.push('/app')
  } catch (error) {
    console.error('Login error:', error)
    // TODO: Show error message
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  try {
    await authStore.signInWithProvider('google')
  } catch (error) {
    console.error('Google login error:', error)
  }
}

const handleGithubLogin = async () => {
  try {
    await authStore.signInWithProvider('github')
  } catch (error) {
    console.error('GitHub login error:', error)
  }
}
</script>

<style scoped>
@keyframes float-1 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float-2 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 30px) scale(1.1); }
  66% { transform: translate(20px, -20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float-3 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, 20px) scale(1.05); }
  66% { transform: translate(-10px, -10px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

.animate-float-1 { animation: float-1 20s ease-in-out infinite; }
.animate-float-2 { animation: float-2 25s ease-in-out infinite; }
.animate-float-3 { animation: float-3 30s ease-in-out infinite; }

.bg-gradient {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%);
}

.brand-primary-text {
  color: var(--brand-primary);
}
</style>