<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const isMenuOpen = ref(false);

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.from('.mobile-nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.1
    });
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  gsap.from('.nav-item', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1
  });
});
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#about" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          <span class="text-3xl">🚀</span> GD
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <a v-for="item in navItems" 
              :key="item.name" 
              :href="item.href"
              @click="closeMenu"
              class="nav-item text-gray-300 hover:text-white transition-colors duration-300">
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          @click="toggleMenu"
        >
          <svg 
            class="h-6 w-6" 
            :class="{ 'hidden': isMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg 
            class="h-6 w-6" 
            :class="{ 'hidden': !isMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div 
      v-show="isMenuOpen" 
      class="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click="closeMenu"
          class="mobile-nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>