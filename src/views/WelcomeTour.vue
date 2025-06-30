<template>
  <div class="min-h-screen bg-secondary text-primary transition-colors duration-300">
    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-tertiary z-50">
      <div class="h-full bg-gradient progress-bar transition-all duration-500" :style="{ width: progressWidth }"></div>
    </div>

    <!-- Main Container -->
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header class="px-4 py-6 flex items-center justify-between">
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <span class="text-xl font-bold">Flexperts</span>
        </router-link>

        <button @click="skipTour" class="text-tertiary hover:text-primary transition-colors">
          Skip tour
        </button>
      </header>

      <!-- Content Container -->
      <div class="flex-1 flex items-center justify-center px-4">
        <transition name="slide" mode="out-in">
          <!-- Step 1: Welcome -->
          <div v-if="currentStep === 1" key="step1" class="w-full max-w-lg">
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-bold mb-4">
                Welcome to <span class="text-gradient">Flexperts</span>
              </h1>
              <p class="text-lg text-secondary">
                Let's get you set up in just a few steps
              </p>
            </div>

            <div class="bg-primary rounded-2xl p-8 shadow-xl border border-primary mb-8">
              <div class="flex justify-center mb-6">
                <div class="w-32 h-32 bg-gradient rounded-full flex items-center justify-center animate-pulse">
                  <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
              </div>
              <h2 class="text-2xl font-bold text-center mb-4">Hi there! 👋</h2>
              <p class="text-center text-secondary">
                I'm Flexi, your AI development assistant. I'll help you build amazing applications with ease.
              </p>
            </div>

            <button @click="nextStep" class="w-full bg-gradient text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          <!-- Step 2: Choose Your Role -->
          <div v-else-if="currentStep === 2" key="step2" class="w-full max-w-lg">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-4">What best describes you?</h2>
              <p class="text-secondary">This helps us personalize your experience</p>
            </div>

            <div class="space-y-4 mb-8">
              <label v-for="role in roles" :key="role.value" class="block">
                <input 
                  type="radio" 
                  name="role" 
                  :value="role.value"
                  v-model="userRole"
                  class="sr-only peer"
                >
                <div class="bg-primary border-2 border-primary rounded-xl p-6 cursor-pointer hover:border-brand-primary transition-all peer-checked:border-brand-primary peer-checked:bg-brand-primary-light">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center">
                        <component :is="role.icon" class="w-6 h-6 text-brand-primary" />
                      </div>
                      <div class="text-left">
                        <h3 class="font-semibold">{{ role.label }}</h3>
                        <p class="text-sm text-secondary">{{ role.description }}</p>
                      </div>
                    </div>
                    <div class="w-5 h-5 rounded-full border-2 border-secondary peer-checked:border-brand-primary peer-checked:bg-brand-primary"></div>
                  </div>
                </div>
              </label>
            </div>

            <div class="flex gap-4">
              <button @click="previousStep" class="flex-1 bg-tertiary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-quaternary transition-colors">
                Back
              </button>
              <button @click="nextStep" class="flex-1 bg-gradient text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Continue
              </button>
            </div>
          </div>

          <!-- Step 3: Choose Build Mode -->
          <div v-else-if="currentStep === 3" key="step3" class="w-full max-w-lg">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-4">How do you want to build?</h2>
              <p class="text-secondary">You can change this anytime</p>
            </div>

            <div class="space-y-4 mb-8">
              <label v-for="mode in buildModes" :key="mode.value" class="block">
                <input 
                  type="radio" 
                  name="mode" 
                  :value="mode.value"
                  v-model="buildMode"
                  class="sr-only peer"
                >
                <div class="bg-primary border-2 border-primary rounded-xl p-6 cursor-pointer hover:border-brand-primary transition-all peer-checked:border-brand-primary peer-checked:bg-brand-primary-light">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <component :is="mode.icon" class="w-6 h-6 text-white" />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-semibold mb-2">{{ mode.label }}</h3>
                      <p class="text-sm text-secondary">{{ mode.description }}</p>
                      <div class="mt-3 flex flex-wrap gap-2">
                        <span v-for="tag in mode.tags" :key="tag" class="text-xs bg-tertiary px-2 py-1 rounded">{{ tag }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <div class="flex gap-4">
              <button @click="previousStep" class="flex-1 bg-tertiary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-quaternary transition-colors">
                Back
              </button>
              <button @click="nextStep" class="flex-1 bg-gradient text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Continue
              </button>
            </div>
          </div>

          <!-- Step 4: First Project -->
          <div v-else-if="currentStep === 4" key="step4" class="w-full max-w-lg">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-4">Let's create your first project</h2>
              <p class="text-secondary">What would you like to build?</p>
            </div>

            <div class="bg-primary rounded-2xl p-8 shadow-xl border border-primary mb-8">
              <div class="space-y-6">
                <div>
                  <label for="projectName" class="block text-sm font-medium mb-2">Project Name</label>
                  <input 
                    v-model="project.name"
                    type="text" 
                    id="projectName" 
                    class="w-full px-4 py-3 bg-secondary border border-primary rounded-lg text-primary placeholder-muted transition-colors focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    placeholder="My Awesome App"
                  >
                </div>

                <div>
                  <label for="projectType" class="block text-sm font-medium mb-2">Project Type</label>
                  <select 
                    v-model="project.type"
                    id="projectType" 
                    class="w-full px-4 py-3 bg-secondary border border-primary rounded-lg text-primary transition-colors focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  >
                    <option value="">Choose a type...</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="api">API / Backend</option>
                    <option value="landing">Landing Page</option>
                    <option value="ecommerce">E-commerce Site</option>
                    <option value="dashboard">Admin Dashboard</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label for="description" class="block text-sm font-medium mb-2">Describe your project</label>
                  <textarea 
                    v-model="project.description"
                    id="description" 
                    rows="3"
                    class="w-full px-4 py-3 bg-secondary border border-primary rounded-lg text-primary placeholder-muted transition-colors resize-none focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    placeholder="Tell me about your project idea..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <button @click="previousStep" class="flex-1 bg-tertiary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-quaternary transition-colors">
                Back
              </button>
              <button @click="completeTour" class="flex-1 bg-gradient text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Building
              </button>
            </div>
          </div>
        </transition>
      </div>

      <!-- Step Indicators -->
      <div class="px-4 pb-8">
        <div class="flex justify-center space-x-2">
          <div 
            v-for="i in totalSteps" 
            :key="i"
            class="w-2 h-2 rounded-full transition-colors"
            :class="i <= currentStep ? 'bg-gradient' : 'bg-tertiary'"
          ></div>
        </div>
      </div>
    </div>

    <!-- Theme Toggle -->
    <button @click="toggleTheme" class="fixed bottom-4 right-4 p-3 rounded-lg bg-primary border border-primary hover:bg-tertiary transition-colors">
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
import { ref, computed, h } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const router = useRouter()
const { toggleTheme } = useTheme()

const currentStep = ref(1)
const totalSteps = 4

const userRole = ref('developer')
const buildMode = ref('you-build')
const project = ref({
  name: '',
  type: '',
  description: ''
})

const progressWidth = computed(() => `${(currentStep.value / totalSteps) * 100}%`)

// Icon components (simplified SVG icons)
const CodeIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
  )
}

const RocketIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
  )
}

const BrushIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
  )
}

const MonitorIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
  )
}

const TeamIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
  )
}

const roles = [
  {
    value: 'developer',
    label: 'Developer',
    description: 'I write code and build applications',
    icon: CodeIcon
  },
  {
    value: 'founder',
    label: 'Founder / Entrepreneur',
    description: 'I have ideas and want to build products',
    icon: RocketIcon
  },
  {
    value: 'designer',
    label: 'Designer / Product Manager',
    description: 'I design experiences and products',
    icon: BrushIcon
  }
]

const buildModes = [
  {
    value: 'you-build',
    label: 'You Build',
    description: 'I\'ll assist while you code. Get suggestions, bug fixes, and guidance.',
    tags: ['For developers', 'Full control'],
    icon: CodeIcon
  },
  {
    value: 'we-build',
    label: 'We Build',
    description: 'Describe what you want, I\'ll build it for you end-to-end.',
    tags: ['No coding required', 'Fast delivery'],
    icon: MonitorIcon
  },
  {
    value: 'build-together',
    label: 'Build Together',
    description: 'Collaborate with AI and human experts for complex projects.',
    tags: ['Expert guidance', 'Best of both'],
    icon: TeamIcon
  }
]

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const skipTour = () => {
  if (confirm('Are you sure you want to skip the tour? You can always access it later from settings.')) {
    router.push('/app')
  }
}

const completeTour = async () => {
  // Save user preferences
  const userPreferences = {
    role: userRole.value,
    buildMode: buildMode.value,
    firstProject: project.value
  }
  
  // TODO: Save preferences to user profile in Supabase
  console.log('User preferences:', userPreferences)
  
  // Navigate to dashboard
  router.push('/app')
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, var(--brand-primary), var(--brand-primary-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%);
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Pulse animation */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>