<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from('.hero-text', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
  });
});
</script>

<template>
  <div class="relative h-full flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
    <div class="z-10 text-center px-4 flex flex-col items-center">
      <div class="mb-8 relative">
        <img src="/profile.jpg" alt="Gilles-Déreck GNANCADJA" class="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl">
        <div class="absolute -bottom-4 -right-4 text-4xl">👨‍💻</div>
      </div>
      <h1 class="hero-text text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Gilles-Déreck GNANCADJA
      </h1>
      <h2 class="hero-text text-3xl md:text-4xl font-bold mb-6 text-gray-300">
        Systems & Software Engineer
      </h2>
      <p class="hero-text text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl">
        Backend Developer with over 4 years of experience in application design and maintenance, 
        specializing in Python and Java. Expert in API development, database optimization, 
        and resolving complex problems.
      </p>
      <div class="hero-text flex gap-4 justify-center mb-8">
        <a href="#projects" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105">
          View Projects
        </a>
        <a href="#contact" class="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-all duration-300">
          Contact Me
        </a>
      </div>
      <div class="hero-text flex gap-6 text-gray-300">
        <a href="https://linkedin.com/in/Gilles-Déreck GNANCADJA" target="_blank" class="hover:text-white transition-colors">
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="https://twitter.com/@Gilles-Déreck GNANCADJA" target="_blank" class="hover:text-white transition-colors">
          <i class="fab fa-twitter text-2xl"></i>
        </a>
      </div>
    </div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
  </div>
</template>