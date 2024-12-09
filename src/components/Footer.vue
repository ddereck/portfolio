<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900/80 backdrop-blur-lg border-t border-white/10 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 mb-4 md:mb-0">
          <p>© {{ currentYear }} Gilles-Déreck GNANCADJA. All rights reserved.</p>
        </div>
        <div class="flex space-x-6">
          <a href="mailto:itgillo60@gmail.com" class="text-gray-400 hover:text-white transition-colors">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="tel:+22966934669" class="text-gray-400 hover:text-white transition-colors">
            <i class="fas fa-phone"></i>
          </a>
          <a href="https://linkedin.com/in/Gilles-Déreck GNANCADJA" target="_blank" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/@Gilles-Déreck GNANCADJA" target="_blank" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>