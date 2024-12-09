<script setup lang="ts">
import { ref } from 'vue';
import type { Experience } from '../types';

const experiences = ref<Experience[]>([
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    period: '2020 - Present',
    description: 'Leading development of enterprise web applications using Python, Django, and Vue.js.'
  },
  {
    company: 'Mobile Innovations Ltd.',
    position: 'Flutter Developer',
    period: '2018 - 2020',
    description: 'Developed cross-platform mobile applications using Flutter and Dart.'
  }
]);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div class="space-y-6">
        <div
          v-for="experience in experiences"
          :key="experience.company"
          class="bg-white rounded-lg shadow p-6"
        >
          <h3 class="text-xl font-semibold text-gray-900">{{ experience.position }}</h3>
          <p class="text-gray-600 mt-1">{{ experience.company }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ experience.period }}</p>
          <p class="mt-4 text-gray-700">{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>