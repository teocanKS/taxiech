<script setup lang="ts">
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref<Record<string, string>>({})
const status = ref<'idle' | 'success' | 'error'>('idle')

const submitForm = async () => {
  try {
    status.value = 'idle'
    errors.value = {}
    
    // Validate
    schema.parse(form.value)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    status.value = 'success'
    form.value = { name: '', email: '', message: '' }
    
  } catch (e) {
    if (e instanceof z.ZodError) {
      e.errors.forEach(err => {
        if (err.path[0]) {
          errors.value[err.path[0].toString()] = err.message
        }
      })
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" :class="{'border-red-500': errors.name, 'border-gray-300': !errors.name}">
        <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" :class="{'border-red-500': errors.email, 'border-gray-300': !errors.email}">
        <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
        <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" :class="{'border-red-500': errors.message, 'border-gray-300': !errors.message}"></textarea>
        <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
      </div>

      <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">
        Nachricht Senden
      </button>

      <p v-if="status === 'success'" class="text-green-600 text-center font-medium">Vielen Dank! Ihre Nachricht wurde gesendet.</p>
    </div>
  </form>
</template>
