<script setup lang="ts">
import { MessageCircle, X, Send, Phone } from 'lucide-vue-next'

const isOpen = ref(false)
const message = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const openWhatsApp = () => {
  const text = message.value ? encodeURIComponent(message.value) : 'Hallo, ich habe eine Frage zu Taxie.'
  window.open(`https://wa.me/41798681000?text=${text}`, '_blank')
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 print:hidden">
    
    <!-- Chat Window -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div v-if="isOpen" class="bg-[#E5DDD5] w-[320px] rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <!-- Header -->
        <div class="bg-[#0FA968] p-4 flex items-center justify-between text-white shadow-sm">
          <div class="flex items-center gap-3">
             <div class="bg-white/20 p-1.5 rounded-full">
               <MessageCircle class="w-6 h-6" />
             </div>
             <div>
               <h3 class="font-bold text-base leading-tight">Taxie Support</h3>
               <p class="text-xs opacity-90">Antwortet in der Regel sofort</p>
             </div>
          </div>
          <button @click="toggleChat" class="hover:bg-white/20 p-1 rounded-full transition">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Chat Body -->
        <div class="p-6 h-[250px] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover overflow-y-auto flex flex-col gap-4">
           <!-- Agent Message -->
           <div class="self-start bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[85%] text-gray-800 text-sm relative">
             <span class="absolute top-0 left-0 -ml-2 text-white drop-shadow-sm">
                 <svg width="10" height="10" viewBox="0 0 10 10"><path d="M10 0 L0 0 L10 10 Z" fill="currentColor"/></svg>
             </span>
             Hallo! 👋 <br>
             Wie können wir Ihnen helfen?
             <span class="block text-[10px] text-gray-400 text-right mt-1">12:00</span>
           </div>
        </div>

        <!-- Footer / Input -->
        <div class="bg-white p-3 flex items-center gap-2 border-t border-gray-100">
          <input 
            v-model="message" 
            @keyup.enter="openWhatsApp"
            type="text" 
            placeholder="Nachricht schreiben..." 
            class="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0FA968] transition"
          >
          <button @click="openWhatsApp" class="bg-[#0FA968] text-white p-2 rounded-full hover:bg-[#0C8F58] transition shadow-sm transform active:scale-95">
            <Send class="w-5 h-5 pl-0.5" />
          </button>
        </div>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <button 
      @click="toggleChat" 
      class="group relative flex items-center gap-3 bg-[#0FA968] hover:bg-[#0C8F58] px-6 py-4 rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
    >
        <span v-if="isOpen" class="flex items-center gap-3">
             <X class="w-6 h-6 text-white" />
             <span class="font-bold text-white whitespace-nowrap text-lg">Schliessen</span>
        </span>
        <span v-else class="flex items-center gap-3">
             <MessageCircle class="w-6 h-6 text-white" />
             <span class="font-bold text-white whitespace-nowrap text-lg">WhatsApp Contact</span>
        </span>
      
      <!-- Notification Badge -->
      <span v-if="!isOpen" class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </button>
  </div>
</template>
