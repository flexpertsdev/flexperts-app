<template>
  <div class="flex-1 flex">
    <!-- Chat Area -->
    <div class="flex-1 flex flex-col">
      <!-- Chat Header -->
      <header class="bg-primary border-b border-primary px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <h1 class="text-xl font-semibold flex items-center space-x-2">
            <span>👋</span>
            <span>Welcome to Flexperts</span>
          </h1>
        </div>
        <div class="flex items-center space-x-2">
          <button class="p-2 hover:bg-tertiary rounded-lg transition-colors">
            <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
          <button @click="toggleTheme" class="p-2 hover:bg-tertiary rounded-lg transition-colors">
            <svg class="w-5 h-5 text-secondary hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg class="w-5 h-5 text-secondary dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
        </div>
      </header>

      <!-- Messages Area -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <div class="max-w-3xl mx-auto space-y-6">
          <!-- Welcome Message -->
          <div class="flex justify-start">
            <div class="flex space-x-3 max-w-[70%]">
              <div class="w-10 h-10 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <div class="bg-tertiary rounded-2xl rounded-tl-none px-4 py-3">
                  <p class="font-semibold mb-2">Welcome back! I'm Flexi, your AI development assistant. 🎉</p>
                  <p class="text-secondary">I'm here to help you build amazing applications. You can:</p>
                  <ul class="mt-2 space-y-1 text-secondary">
                    <li class="flex items-start">
                      <span class="text-brand-primary mr-2">•</span>
                      <span>Ask me to build features or entire applications</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-brand-primary mr-2">•</span>
                      <span>Get help debugging code or fixing issues</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-brand-primary mr-2">•</span>
                      <span>Learn new technologies and best practices</span>
                    </li>
                  </ul>
                </div>
                <div class="mt-3 flex flex-wrap gap-2">
                  <button 
                    v-for="suggestion in suggestions" 
                    :key="suggestion"
                    @click="sendMessage(suggestion)"
                    class="bg-primary border border-primary hover:bg-tertiary px-3 py-1.5 rounded-lg text-sm transition-colors"
                  >
                    {{ suggestion }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div v-for="(message, index) in messages" :key="index" class="flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div class="flex space-x-3 max-w-[70%]" :class="{ 'flex-row-reverse space-x-reverse': message.isUser }">
              <div v-if="!message.isUser" class="w-10 h-10 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div v-else class="w-10 h-10 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold">JD</span>
              </div>
              <div 
                class="px-4 py-3 rounded-2xl"
                :class="message.isUser 
                  ? 'bg-gradient text-white rounded-tr-none' 
                  : 'bg-tertiary rounded-tl-none'"
              >
                <p class="whitespace-pre-wrap">{{ message.text }}</p>
              </div>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="flex space-x-3 max-w-[70%]">
              <div class="w-10 h-10 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div class="bg-tertiary rounded-2xl rounded-tl-none px-4 py-3">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-secondary rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                  <div class="w-2 h-2 bg-secondary rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                  <div class="w-2 h-2 bg-secondary rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t border-primary p-4">
        <div class="max-w-3xl mx-auto">
          <form @submit.prevent="handleSendMessage" class="flex items-end space-x-4">
            <div class="flex-1">
              <textarea 
                v-model="newMessage"
                @keydown.enter.prevent="handleEnterKey"
                placeholder="Type your message..."
                rows="1"
                class="w-full px-4 py-3 bg-tertiary border border-primary rounded-lg text-primary placeholder-muted resize-none focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                :style="{ height: textareaHeight }"
              ></textarea>
            </div>
            <button 
              type="submit"
              :disabled="!newMessage.trim() || isTyping"
              class="p-3 bg-gradient text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </form>
          <p class="mt-2 text-xs text-tertiary text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (Optional) -->
    <aside class="w-80 bg-primary border-l border-primary p-4 hidden xl:block">
      <h2 class="font-semibold mb-4">Quick Actions</h2>
      <div class="space-y-3">
        <button class="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-quaternary transition-colors">
          <h3 class="font-medium mb-1">Create New Project</h3>
          <p class="text-sm text-secondary">Start building something amazing</p>
        </button>
        <button class="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-quaternary transition-colors">
          <h3 class="font-medium mb-1">View Documentation</h3>
          <p class="text-sm text-secondary">Learn about Flexperts features</p>
        </button>
        <button class="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-quaternary transition-colors">
          <h3 class="font-medium mb-1">Explore Templates</h3>
          <p class="text-sm text-secondary">Browse pre-built templates</p>
        </button>
      </div>

      <h2 class="font-semibold mt-8 mb-4">Recent Projects</h2>
      <div class="space-y-2">
        <div class="p-3 bg-tertiary rounded-lg">
          <h3 class="font-medium text-sm">E-commerce Platform</h3>
          <p class="text-xs text-secondary mt-1">Last edited 2 hours ago</p>
        </div>
        <div class="p-3 bg-tertiary rounded-lg">
          <h3 class="font-medium text-sm">Analytics Dashboard</h3>
          <p class="text-xs text-secondary mt-1">Last edited yesterday</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { toggleTheme } = useTheme()

const messages = ref<Array<{ text: string; isUser: boolean }>>([])
const newMessage = ref('')
const isTyping = ref(false)
const textareaHeight = ref('auto')

const suggestions = [
  'Build a todo app',
  'Create a landing page',
  'Help me with debugging',
  'Explain React hooks'
]

const handleSendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  const userMessage = newMessage.value
  messages.value.push({ text: userMessage, isUser: true })
  newMessage.value = ''
  textareaHeight.value = 'auto'

  // Simulate AI response
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
  
  messages.value.push({
    text: `I'll help you with "${userMessage}". Let me analyze what you need and provide the best solution...`,
    isUser: false
  })
  isTyping.value = false

  // Scroll to bottom
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const sendMessage = (text: string) => {
  newMessage.value = text
  handleSendMessage()
}

const handleEnterKey = (event: KeyboardEvent) => {
  if (!event.shiftKey) {
    handleSendMessage()
  } else {
    // Allow new line with Shift+Enter
    const target = event.target as HTMLTextAreaElement
    const start = target.selectionStart
    const end = target.selectionEnd
    newMessage.value = newMessage.value.substring(0, start) + '\n' + newMessage.value.substring(end)
    
    // Adjust textarea height
    nextTick(() => {
      target.style.height = 'auto'
      target.style.height = target.scrollHeight + 'px'
      textareaHeight.value = target.style.height
    })
  }
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>