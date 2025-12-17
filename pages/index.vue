<script setup lang="ts">
import { Check, Phone, MessageCircle } from 'lucide-vue-next'

const { zone } = useZone()

useSeoMeta({
  title: () => `${zone.value.name} - Pünktlich, Sicher, Zuverlässig`,
  description: () => `Ihr zuverlässiges Taxi in ${zone.value.locality} und Umgebung. Rufen Sie uns an: 079 868 10 00.`,
}) // Dynamic SEO title based on zone

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": zone.value.name,
        "image": "https://taxie.ch/taxi-honda-kombi-weiss.webp", // Placeholder
        "telephone": "+41798681000",
        "email": "info@taxie.ch",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": zone.value.schemaAddress.split(',')[0],
          "addressLocality": zone.value.locality,
          "addressCountry": "CH"
        },
        "url": "https://taxie.ch",
        "priceRange": "$$"
      }))
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
          <NuxtImg src="/swiss.webp" alt="Swiss Landscape" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-xl text-balance">
          TaxiE
        </h1>
        <p class="text-xl md:text-3xl mb-10 font-light max-w-2xl mx-auto text-balance">
          Pünktlich, Sicher, Zuverlässig
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <a href="tel:+41798681000" class="bg-action text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 duration-200">
            <Phone class="w-5 h-5" />
            TAXI BESTELLEN
          </a>
          <a href="#tarife" class="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2">
            PREISE ANSEHEN
          </a>
        </div>
      </div>
    </section>

    <!-- Vision & About Us Section -->
    <section class="py-20 bg-white overflow-hidden">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-12 gap-12 items-start">
                
                <!-- Vision Column (Wider - 60%) -->
                <div class="lg:col-span-7 relative flex flex-col gap-8">
                    <!-- Background Accent -->
                    <div class="absolute -top-10 -left-10 w-40 h-40 bg-action/20 rounded-full blur-3xl"></div>
                    
                    <!-- Vision Box -->
                    <div class="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-action transition-transform transform translate-x-12 -translate-y-12 group-hover:scale-110"></div>
                        <h2 class="text-4xl font-bold mb-6 text-gray-900 relative z-10">Unsere Vision</h2>
                        <p class="text-gray-700 text-lg leading-relaxed relative z-10">
                            Wir streben danach, führend im Taximarkt zu werden und unseren Kunden erstklassigen Service sowie ein unvergessliches Fahrerlebnis zu bieten.
                            Unser Ziel ist es, dass sich jeder Fahrgast bei jeder Fahrt mit uns sicher und wohl fühlt. 
                            Vielen Dank, dass Sie sich für TaxiE entscheiden. Wir freuen uns darauf, Sie überall hin zu bringen!
                        </p>
                    </div>

                    <!-- Image (Enlarged) -->
                    <div class="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition duration-500">
                            <NuxtImg src="/taksischweiz.webp" alt="Taxi Schweiz" class="w-full h-[500px] object-cover object-center" />
                    </div>
                </div>

                <!-- About Us Column (Narrower - 40% & Smaller Image) -->
                <div class="lg:col-span-5 relative mt-8 lg:mt-0">
                     <!-- Yellow Background Box -->
                     <div class="absolute inset-0 bg-action rounded-3xl transform rotate-1 translate-x-3 translate-y-3 opacity-50 h-full"></div>
                     
                     <div class="bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 border border-gray-100">
                        <!-- Portrait Focus -->
                        <div class="h-[500px] relative overflow-hidden">
                            <NuxtImg src="/uberuns.webp" alt="Unser Team" class="w-full h-full object-cover object-top" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                <h2 class="text-2xl font-bold text-white mb-1">Über uns</h2>
                                <div class="w-12 h-1 bg-action rounded-full"></div>
                            </div>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 text-base leading-relaxed mb-4">
                                Als junges und dynamisches Unternehmen mit Sitz in Wohlen AG haben wir es uns zur Aufgabe gemacht, unseren Kunden jederzeit und überall einen schnellen, sicheren und komfortablen Taxi-Service zu bieten.
                            </p>
                            <p class="text-gray-600 text-base leading-relaxed">
                                Mit 4 Jahren Erfahrung im Taxigewerbe kennen wir die Bedürfnisse unserer Fahrgäste genau und setzen alles daran, diese zu erfüllen.
                            </p>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Fleet Showcase (Our Services) -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Unsere Flotte</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">Komfortable Fahrzeuge für jeden Anlass. Ob Einzelperson oder Gruppe, wir haben das passende Taxi für Sie.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- Card 1: Standard -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div class="aspect-video relative overflow-hidden">
                    <NuxtImg src="/taxi-honda-kombi-weiss.webp" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Standard Taxi" />
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-2 text-gray-900">Standard Taxi</h3>
                    <p class="text-gray-600 mb-4">Honda Kombi - Perfekt für den Alltag und Flughafentransfers.</p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Bis zu 4 Personen</li>
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Viel Gepäckraum</li>
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Klimatisiert</li>
                    </ul>
                </div>
            </div>

             <!-- Card 2: Business/Group -->
             <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div class="aspect-video relative overflow-hidden">
                    <NuxtImg src="/mercedes-v-klasse-grossraumtaxi.webp" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Grossraum Taxi" />
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-2 text-gray-900">Grossraumtaxi</h3>
                    <p class="text-gray-600 mb-4">Mercedes V-Klasse - Für Gruppen und Business-Clients.</p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Bis zu 7 Personen</li>
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Business-Komfort</li>
                        <li class="flex items-center gap-2 text-gray-700"><Check class="w-4 h-4 text-primary" /> Ideal für Events</li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="tarife" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">Unsere Tarife</h2>
        
        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            
            <!-- Standard Tariffs -->
            <div class="space-y-8">
                 <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <div class="w-2 h-8 bg-primary rounded-full"></div>
                    Standard Tarife
                 </h3>
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div class="p-8">
                    <div class="flex justify-between items-center py-4 border-b border-gray-100">
                      <span class="text-lg font-medium text-gray-700">Grundtaxe</span>
                      <span class="text-2xl font-bold text-primary">CHF 6.00</span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-b border-gray-100">
                      <span class="text-lg font-medium text-gray-700">Tagtarif <span class="text-sm font-normal text-gray-400">(06:00 - 19:00)</span></span>
                      <span class="text-2xl font-bold text-primary">CHF 4.20 <span class="text-sm font-normal text-gray-500">/ km</span></span>
                    </div>
                    <div class="flex justify-between items-center py-4 border-b border-gray-100">
                      <span class="text-lg font-medium text-gray-700">Nachttarif <span class="text-sm font-normal text-gray-400">(19:00 - 06:00)</span></span>
                      <span class="text-2xl font-bold text-primary">CHF 4.90 <span class="text-sm font-normal text-gray-500">/ km</span></span>
                    </div>
                    <div class="flex justify-between items-center py-4">
                      <span class="text-lg font-medium text-gray-700">Wartezeit</span>
                      <span class="text-2xl font-bold text-primary">CHF 1.00 <span class="text-sm font-normal text-gray-500">/ min</span></span>
                    </div>
                  </div>
                   <div class="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
                    Alle Preise inkl. MwSt. • Kartenzahlung & TWINT akzeptiert.
                  </div>
                </div>

                <!-- Airport Teaser -->
                <div class="relative rounded-2xl overflow-hidden shadow-lg h-64 group">
                    <NuxtImg src="/zurich-bild.webp" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Zürich Flughafen" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                        <h4 class="text-2xl font-bold mb-1">Flughafentransfer</h4>
                        <p class="text-white/90">Stressfrei nach Zürich Kloten ab CHF 90.00</p>
                    </div>
                </div>
            </div>

            <!-- Fixed Prices Table -->
            <div>
                 <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <div class="w-2 h-8 bg-action rounded-full"></div>
                    Beliebte Pauschalpreise
                 </h3>
                 <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-50 border-b border-gray-100">
                                <th class="p-4 py-5 font-bold text-gray-600 pl-6">Strecke</th>
                                <th class="p-4 py-5 font-bold text-gray-600 text-right pr-6">Preis</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr class="hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen - Zürich Flughafen</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 90.00</td>
                            </tr>
                            <tr class="bg-gray-50/50 hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Muri - Aarau Bahnhof</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 115.00</td>
                            </tr>
                             <tr class="hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen Bahnhof - Bremgarten Bahnhof</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 45.00</td>
                            </tr>
                            <tr class="bg-gray-50/50 hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen - Waltenschwil</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 20.00</td>
                            </tr>
                             <tr class="hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen Waltenschwil - Muri</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 50.00</td>
                            </tr>
                            <tr class="bg-gray-50/50 hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen Waltenschwil - Zug</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 140.00</td>
                            </tr>
                            <tr class="hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen Waltenschwil - Baden Bhf</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 100.00</td>
                            </tr>
                            <tr class="bg-gray-50/50 hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Wohlen Waltenschwil - Sins</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 90.00</td>
                            </tr>
                            <tr class="hover:bg-green-50/30 transition">
                                <td class="p-4 pl-6 font-medium text-gray-800">Dottikon - Bremgarten Bhf</td>
                                <td class="p-4 pr-6 text-right font-bold text-primary">CHF 35.00</td>
                            </tr>
                        </tbody>
                    </table>
                     <div class="px-6 py-4 bg-yellow-50/50 text-xs text-center text-yellow-700 italic">
                        * Preise können je nach Verkehrslage und Wartezeiten variieren.
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section id="kontakt" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-900">Kontaktieren Sie uns</h2>
            <p class="text-xl mb-8 text-gray-600">
              Haben Sie Fragen oder möchten Sie eine Fahrt vorbestellen? Wir sind 24/7 für Sie da.
            </p>
            
            <div class="space-y-4 mb-8">
               <a href="tel:+41798681000" class="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-primary transition">
                 <div class="w-10 h-10 bg-action rounded-full flex items-center justify-center text-black">
                   <Phone class="w-5 h-5" />
                 </div>
                 079 868 10 00
               </a>
               <a href="mailto:info@taxie.ch" class="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-primary transition">
                 <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-primary">
                   <MessageCircle class="w-5 h-5" />
                 </div>
                 info@taxie.ch
               </a>
            </div>

            <p class="text-sm text-gray-500">
              TaxiE Waltenschwil<br>
              Büelisackerstrasse 34, 5622 Waltenschwil
            </p>
          </div>
          
          <div class="bg-gray-50 p-1 rounded-2xl shadow-lg border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

