<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '../types';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Django and Vue.js',
    technologies: ['Python', 'Django', 'Vue.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://demo-ecommerce.example.com',
    imageUrl: '/images/ecommerce.jpg'
  },
  {
    id: 2,
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for task management',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/username/task-manager',
    imageUrl: '/images/task-manager.jpg'
  }
]);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>