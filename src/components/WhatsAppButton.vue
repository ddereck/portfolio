<script setup lang="ts">
const phoneNumber = '+2290166934669'; // Your WhatsApp number
const message = 'Bonjour, je souhaite discuter de mes besoins en développement web.';

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <a 
    :href="whatsappUrl" 
    target="_blank"
    class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    aria-label="Contact sur WhatsApp"
  >
    <i class="fab fa-whatsapp text-2xl"></i>
  </a>
</template>