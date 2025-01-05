<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import type { Skill } from '../../types';

const skills = ref<Skill[]>([
  // Web
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'JavaScript', level: 88, category: 'frontend' },
  { name: 'Vue.js', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 82, category: 'backend' },
  { name: 'React', level: 80, category: 'frontend' },
  
  // DevOps & Tools
  { name: 'Git', level: 85, category: 'devops' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'Jenkins', level: 75, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  
  // Databases
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'MySQL', level: 82, category: 'database' }
]);

const categories = ['frontend', 'backend', 'devops', 'database'];

onMounted(() => {
  gsap.from('.skill-bar', {
    scrollTrigger: {
      trigger: '.skills-container',
      start: 'top 80%',
    },
    width: 0,
    duration: 1.5,
    ease: 'power4.out',
    stagger: 0.2
  });
});
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      Skills & Expertise
    </h2>
    <div class="skills-container max-w-4xl mx-auto grid gap-12">
      <div v-for="category in categories" :key="category" 
        class="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <h3 class="text-2xl font-bold mb-6 capitalize text-white">{{ category }}</h3>
        <div class="space-y-6">
          <div v-for="skill in skills.filter(s => s.category === category)" :key="skill.name">
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300 font-medium">{{ skill.name }}</span>
              <span class="text-gray-400">{{ skill.level }}%</span>
            </div>
            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>