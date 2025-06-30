<template>
  <div class="min-h-screen bg-secondary text-primary transition-colors duration-300">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold">Flexperts</span>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" class="text-secondary hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" class="text-secondary hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" class="text-secondary hover:text-primary transition-colors">Pricing</a>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-4">
            <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-tertiary transition-colors">
              <svg class="w-5 h-5 text-secondary hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <svg class="w-5 h-5 text-secondary dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
            <router-link to="/login" class="text-secondary hover:text-primary transition-colors">Sign In</router-link>
            <router-link to="/signup" class="px-4 py-2 bg-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          Build <span class="text-gradient">Smarter</span>,<br>
          Ship <span class="text-gradient">Faster</span>
        </h1>
        <p class="text-xl sm:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
          AI-powered development platform that helps you build applications 10x faster with intelligent code generation, real-time collaboration, and expert guidance.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/signup" class="px-8 py-4 bg-gradient text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
            Start Building Free
          </router-link>
          <a href="#demo" class="px-8 py-4 bg-tertiary text-primary rounded-lg font-semibold text-lg hover:bg-quaternary transition-colors w-full sm:w-auto">
            Watch Demo
          </a>
        </div>
        <p class="mt-6 text-sm text-tertiary">
          No credit card required • Free forever for individuals
        </p>
      </div>
    </section>

    <!-- Build Modes Section -->
    <section id="features" class="py-20 px-4 bg-primary">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">Choose Your Build Mode</h2>
          <p class="text-xl text-secondary">Flexible development that adapts to your needs</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- You Build Mode -->
          <div class="bg-secondary rounded-2xl p-8 hover:scale-105 transition-transform">
            <div class="w-16 h-16 bg-gradient rounded-lg flex items-center justify-center mb-6">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">You Build</h3>
            <p class="text-secondary mb-6">
              Keep full control while AI assists. Get intelligent suggestions, bug fixes, and code improvements as you work.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time code suggestions
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Automatic bug detection
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Performance optimizations
              </li>
            </ul>
          </div>

          <!-- We Build Mode -->
          <div class="bg-secondary rounded-2xl p-8 hover:scale-105 transition-transform border-2 border-brand-primary">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div class="w-16 h-16 bg-gradient rounded-lg flex items-center justify-center mb-6">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">We Build</h3>
            <p class="text-secondary mb-6">
              Describe what you want, we'll build it. Perfect for non-developers or rapid prototyping.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Natural language to code
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Complete app generation
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Instant deployment
              </li>
            </ul>
          </div>

          <!-- Build Together Mode -->
          <div class="bg-secondary rounded-2xl p-8 hover:scale-105 transition-transform">
            <div class="w-16 h-16 bg-gradient rounded-lg flex items-center justify-center mb-6">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Build Together</h3>
            <p class="text-secondary mb-6">
              Collaborate with AI and human experts. Perfect for complex projects that need expertise.
            </p>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Expert code reviews
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Architecture guidance
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p class="text-xl text-secondary">From idea to deployment in minutes</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="relative">
              <div class="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-brand-primary">{{ index + 1 }}</span>
              </div>
              <div v-if="index < steps.length - 1" class="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-tertiary"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-secondary">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <span class="text-xl font-bold">Flexperts</span>
            </div>
            <p class="text-secondary">Build smarter, ship faster with AI-powered development.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-secondary">
              <li><a href="#" class="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-secondary">
              <li><a href="#" class="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Legal</h4>
            <ul class="space-y-2 text-secondary">
              <li><a href="#" class="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-primary pt-8 text-center text-secondary">
          <p>&copy; 2024 Flexperts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { toggleTheme } = useTheme()

const steps = [
  {
    title: 'Describe Your Idea',
    description: 'Tell us what you want to build in plain language'
  },
  {
    title: 'Choose Build Mode',
    description: 'Select how you want to work - code yourself, let AI build, or collaborate'
  },
  {
    title: 'Watch It Come to Life',
    description: 'AI generates code, designs, and infrastructure in real-time'
  },
  {
    title: 'Deploy Instantly',
    description: 'One-click deployment to production with automatic scaling'
  }
]
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
</style>