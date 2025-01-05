<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  subject: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
};
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      Discutons de votre projet
    </h2>
    <p class="font-bold mb-12 text-center bg-clip-text">
      Si vous souhaitez discuter en profondeur de votre projet ou faire une demande spécifique, 
      veuillez remplir et envoyer le formulaire en indiquant vos besoins. Merci !</p>
    <div class="max-w-2xl mx-auto">
      <div class="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
        <form action="https://formsubmit.co/itgillo60@gmail.com" method="POST"  class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300">Nom et Prenom</label>
            <input type="text" id="name" v-model="form.name"
              class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
              required />
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300">Sujet</label>
            <input type="text" id="subject" v-model="form.subject"
              class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
              required />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" v-model="form.email"
              class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
              required />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" v-model="form.message" rows="4"
              class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
              required></textarea>
          </div>
          <input type="hidden" name="_autoresponse" value="Merci de nous avoir contactés.
                   Nous avons bien reçu votre requête et la traiterons dans les plus brefs délais. 
                  Cordialement.">
          <button type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
            Envoyer le Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>