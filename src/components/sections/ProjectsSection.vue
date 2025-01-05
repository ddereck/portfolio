<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import type { Project } from '../../types';

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with Django REST framework backend and Vue.js frontend. Features include user authentication, product management, and payment integration.',
    technologies: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'Redis'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Enterprise task management application with real-time updates, team collaboration features, and detailed analytics dashboard.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'WebSocket', 'React'],
    imageUrl: 'https://picsum.photos/seed/taskmanager/800/600'
  },
  {
    id: 3,
    title: 'DevOps Automation Suite',
    description: 'Comprehensive DevOps toolkit for automated deployment, monitoring, and infrastructure management using modern cloud technologies.',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    imageUrl: 'https://picsum.photos/seed/devops/800/600'
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'Secure and scalable healthcare management platform with electronic health records, appointment scheduling, and billing integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'OAuth2'],
    imageUrl: 'https://picsum.photos/seed/healthcare/800/600'
  }
]);

onMounted(() => {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2
  });
});
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      Projets Réalisés
    </h2>
    <div class="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div v-for="project in projects" :key="project.id" 
        class="project-card group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden
        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        <div class="relative h-64 overflow-hidden">
          <img :src="project.imageUrl" :alt="project.title" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90"></div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900">
          <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-gray-300 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300 backdrop-blur-sm">
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-4">
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
              hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>