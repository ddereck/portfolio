<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import type { Experience } from '../../types';

const experiences = ref<Experience[]>([
  {
    company: 'ASITECH',
    position: 'Django Developer',
    period: '2024 - Present',
    description: 'Backend development with Django, focusing on API development and database optimization.',
    location: 'Parakou, BO, Benin'
  },
  {
    company: 'ITServices & Solution',
    position: 'Web Developer Fullstack',
    period: '2022 - 2024',
    description: 'Full-stack development using Python, Django, Node.js, Vue.js, and Java/JEE.',
    location: 'Cotonou, LI, Benin'
  },
  {
    company: 'DTECH',
    position: 'Frontend Developer & DevOps',
    period: '2020 - 2022',
    description: 'Led frontend development and DevOps processes, including technical documentation and project management.',
    location: 'Cotonou'
  },
  {
    company: 'DGTCP (Ministère de l\'Economie et des Finances)',
    position: 'Stage Technician',
    period: '2021 - 2022',
    description: 'Network administration, facilities management, and system administration for Windows and Linux environments.',
    location: 'Cotonou, LI, Benin'
  }
]);

onMounted(() => {
  gsap.from('.experience-card', {
    scrollTrigger: {
      trigger: '.experience-timeline',
      start: 'top 80%',
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.3
  });
});
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      Work Experience
    </h2>
    <div class="experience-timeline max-w-4xl mx-auto space-y-8">
      <div v-for="(exp, index) in experiences" :key="index"
        class="experience-card bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 relative">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 class="text-xl font-bold text-white">{{ exp.position }}</h3>
            <p class="text-gray-300">{{ exp.company }}</p>
          </div>
          <div class="text-right">
            <p class="text-purple-400 font-medium">{{ exp.period }}</p>
            <p class="text-gray-400">{{ exp.location }}</p>
          </div>
        </div>
        <p class="text-gray-300">{{ exp.description }}</p>
      </div>
    </div>
  </div>
</template>