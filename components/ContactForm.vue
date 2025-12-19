<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendMail = () => {
  const subject = `Anfrage von ${form.value.name}`
  const body = `Name: ${form.value.name}%0D%0AEmail: ${form.value.email}%0D%0ANachricht:%0D%0A${form.value.message}`
  window.location.href = `mailto:info@taxie.ch?subject=${encodeURIComponent(subject)}&body=${body}`
}
</script>

<template>
  <div class="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition border-gray-300">
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition border-gray-300">
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
        <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition border-gray-300"></textarea>
      </div>

      <button @click="sendMail" class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition flex items-center justify-center gap-2">
        Anfrage Senden (Mail)
      </button>
      <p class="text-xs text-center text-gray-400 mt-2">Öffnet Ihr E-Mail Programm</p>
    </div>
  </div>
</template>
