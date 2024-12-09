<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from('.about-content', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out'
  });

  gsap.from('.profile-image', {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    rotate: -10,
    ease: 'elastic.out(1, 0.5)'
  });

  gsap.from('.tech-tag', {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  });
});

const techStack = [
  'Python', 'Django', 'JavaScript', 'Vue.js', 'Node.js', 'Java'
];
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center py-20 px-4">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
    </div>
    
    <div class="container mx-auto">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Profile Image Section -->
        <div class="order-1 lg:order-2 flex justify-center">
          <div class="profile-image relative w-72 h-72">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-75 blur-lg"></div>
            <img 
              src="/profile.jpg" 
              alt="Gilles-Déreck GNANCADJA"
              class="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
            >
            <div class="absolute -bottom-4 -right-4 text-4xl animate-bounce">👨‍💻</div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="order-2 lg:order-1 text-center lg:text-left space-y-8">
          <div class="about-content space-y-4">
            <h1 class="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Gilles-Déreck GNANCADJA
            </h1>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-200">
              Systems & Software Engineer
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Backend Developer with over 4 years of experience in application design and maintenance. 
              Expert in Python and Java development, specializing in API design and database optimization.
            </p>
          </div>
          
          <div class="about-content flex flex-wrap gap-3 justify-center lg:justify-start">
            <span 
              v-for="tech in techStack"
              :key="tech"
              class="tech-tag px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-gray-200 backdrop-blur-sm
              border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
          
          <div class="about-content flex gap-6 justify-center lg:justify-start">
            <a href="#projects" 
              class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
              hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" 
              class="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 
              transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>