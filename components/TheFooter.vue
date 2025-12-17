<template>
  <footer class="bg-gray-50 border-t border-gray-200 py-12 pb-24 md:pb-12 text-gray-600 text-sm">
    <div class="container mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="font-bold text-gray-900 mb-4 text-lg">Kontakt</h3>
        <p class="font-bold text-primary">TaxiE Waltenschwil</p>
        <p>Büelisackerstrasse 34</p>
        <p>5622 Waltenschwil</p>
        <div class="mt-4 space-y-1">
          <p>Mobil: <a href="tel:+41798681000" class="hover:text-primary">079 868 10 00</a></p>
          <p>Büro: <a href="tel:+41565259113" class="hover:text-primary">056 525 91 13</a></p>
          <p>Email: <a href="mailto:info@taxie.ch" class="hover:text-primary">info@taxie.ch</a></p>
        </div>
      </div>
      
      <div>
        <h3 class="font-bold text-gray-900 mb-4 text-lg">Rechtliches</h3>
        <p>UID: CHE-254.284.360 MWST</p>
        <div class="mt-4 flex items-center gap-2">
            <span class="text-xs font-bold">Zahlung:</span>
            <NuxtImg src="/twint-bezahlung-logo.webp" alt="Twint" class="h-8 w-auto" />
            <span class="text-xs">Bargeld, Karte</span>
        </div>
        <p class="mt-4">© {{ new Date().getFullYear() }} TaxiE Waltenschwil.</p>
        <p>Alle Rechte vorbehalten.</p>
      </div>

      <div>
        <h3 class="font-bold text-gray-900 mb-4 text-lg">Service</h3>
        <p>Taxi {{ zone.locality }}</p>
        <p>Flughafentransfer</p>
        <p>Kurierdienst</p>
        <p>Schülertransporte</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { zone } = useZone()
</script>
