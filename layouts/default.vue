<script setup lang="ts">
import { Phone, MessageCircle } from 'lucide-vue-next'

const { zone } = useZone()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="container mx-auto px-4 h-32 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.webp" alt="Taxie Logo" class="h-28 w-auto" />
        </NuxtLink>
        
        <nav class="hidden md:flex gap-6 font-medium text-gray-600">
          <NuxtLink to="/" class="hover:text-primary transition">Home</NuxtLink>
          <NuxtLink to="#tarife" class="hover:text-primary transition">Tarife</NuxtLink>
          <NuxtLink to="#kontakt" class="hover:text-primary transition">Kontakt</NuxtLink>
        </nav>

        <a href="tel:+41798681000" class="hidden md:flex bg-action hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-bold transition items-center gap-2">
          <Phone class="w-4 h-4" />
          079 868 10 00
        </a>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <TheFooter />

    <!-- Sticky Mobile Footer -->
    <div class="fixed bottom-0 left-0 right-0 z-50 flex h-16 md:hidden text-lg font-bold shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a href="tel:+41798681000" class="w-1/2 bg-[#F7C948] text-black flex items-center justify-center gap-2 active:bg-yellow-500">
        <Phone class="w-5 h-5" />
        ANRUFEN
      </a>
      <a href="https://wa.me/41798681000" target="_blank" class="w-1/2 bg-[#25D366] text-white flex items-center justify-center gap-2 active:bg-green-600">
        <MessageCircle class="w-5 h-5" />
        WHATSAPP
      </a>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
