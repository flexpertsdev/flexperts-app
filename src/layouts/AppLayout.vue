<template>
  <div class="flex h-screen bg-secondary">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary border-r border-primary flex flex-col">
      <!-- Logo -->
      <div class="p-4 border-b border-primary">
        <router-link to="/app" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <span class="text-xl font-bold">Flexperts</span>
        </router-link>
      </div>

      <!-- Tab Switcher -->
      <div class="flex bg-tertiary m-4 rounded-lg p-1">
        <button 
          @click="activeTab = 'spaces'"
          class="flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200"
          :class="activeTab === 'spaces' ? 'bg-primary shadow-sm' : 'text-tertiary hover:text-primary'"
        >
          Spaces
        </button>
        <button 
          @click="activeTab = 'tools'"
          class="flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200"
          :class="activeTab === 'tools' ? 'bg-primary shadow-sm' : 'text-tertiary hover:text-primary'"
        >
          Tools
        </button>
      </div>

      <!-- Spaces List -->
      <div v-if="activeTab === 'spaces'" class="flex-1 overflow-y-auto">
        <div class="px-4 mb-4">
          <button class="w-full bg-gradient text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span>New Space</span>
          </button>
        </div>

        <!-- Space Categories -->
        <div class="px-4 space-y-6">
          <div v-for="category in spaceCategories" :key="category.name">
            <h3 class="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">{{ category.name }}</h3>
            <div class="space-y-1">
              <button 
                v-for="space in category.spaces" 
                :key="space.id"
                class="w-full text-left px-3 py-2 rounded-lg hover:bg-tertiary transition-colors flex items-center space-x-3"
                :class="{ 'bg-tertiary': selectedSpace === space.id }"
                @click="selectedSpace = space.id"
              >
                <span class="text-2xl">{{ space.emoji }}</span>
                <span class="flex-1 truncate">{{ space.name }}</span>
                <span v-if="space.unread" class="bg-brand-primary text-white text-xs px-2 py-0.5 rounded-full">{{ space.unread }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Grid -->
      <div v-else class="flex-1 overflow-y-auto p-4">
        <div class="grid grid-cols-3 gap-3">
          <button 
            v-for="tool in tools" 
            :key="tool.id"
            class="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-tertiary transition-colors aspect-square"
          >
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-2" :class="tool.bgColor">
              <component :is="tool.icon" class="w-6 h-6" :class="tool.iconColor" />
            </div>
            <span class="text-xs text-center">{{ tool.name }}</span>
          </button>
        </div>
      </div>

      <!-- User Menu -->
      <div class="p-4 border-t border-primary">
        <button class="w-full flex items-center space-x-3 hover:bg-tertiary rounded-lg p-2 transition-colors">
          <div class="w-10 h-10 bg-gradient rounded-full flex items-center justify-center">
            <span class="text-white font-semibold">JD</span>
          </div>
          <div class="flex-1 text-left">
            <p class="font-medium">John Doe</p>
            <p class="text-xs text-tertiary">john@example.com</p>
          </div>
          <svg class="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const activeTab = ref<'spaces' | 'tools'>('spaces')
const selectedSpace = ref('welcome')

// Icon components
const PageBuilderIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' })
  )
}

const JourneyBuilderIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' })
  )
}

const DesignSystemIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
  )
}

const ContentIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
  )
}

const APIIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
  )
}

const DatabaseIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
  )
}

const spaceCategories = ref([
  {
    name: 'Recent',
    spaces: [
      { id: 'welcome', name: 'Welcome to Flexperts', emoji: '👋', unread: 2 },
      { id: 'my-project', name: 'My First Project', emoji: '🚀' }
    ]
  },
  {
    name: 'Projects',
    spaces: [
      { id: 'ecommerce', name: 'E-commerce Platform', emoji: '🛍️' },
      { id: 'dashboard', name: 'Analytics Dashboard', emoji: '📊' },
      { id: 'mobile-app', name: 'Mobile App', emoji: '📱' }
    ]
  }
])

const tools = ref([
  { id: 'page-builder', name: 'Page Builder', icon: PageBuilderIcon, bgColor: 'bg-blue-100 dark:bg-blue-900', iconColor: 'text-blue-600 dark:text-blue-400' },
  { id: 'journey-builder', name: 'Journey Builder', icon: JourneyBuilderIcon, bgColor: 'bg-purple-100 dark:bg-purple-900', iconColor: 'text-purple-600 dark:text-purple-400' },
  { id: 'design-system', name: 'Design System', icon: DesignSystemIcon, bgColor: 'bg-pink-100 dark:bg-pink-900', iconColor: 'text-pink-600 dark:text-pink-400' },
  { id: 'content', name: 'Content', icon: ContentIcon, bgColor: 'bg-green-100 dark:bg-green-900', iconColor: 'text-green-600 dark:text-green-400' },
  { id: 'api-builder', name: 'API Builder', icon: APIIcon, bgColor: 'bg-orange-100 dark:bg-orange-900', iconColor: 'text-orange-600 dark:text-orange-400' },
  { id: 'database', name: 'Database', icon: DatabaseIcon, bgColor: 'bg-indigo-100 dark:bg-indigo-900', iconColor: 'text-indigo-600 dark:text-indigo-400' }
])
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%);
}
</style>