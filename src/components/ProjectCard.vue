<script setup lang="ts">
import type { Project } from '../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex space-x-4">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          class="text-blue-600 hover:text-blue-800"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>