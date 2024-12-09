<script setup lang="ts">
import { ref } from 'vue';
import type { Skill } from '../types';

const skills = ref<Skill[]>([
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'JavaScript', level: 88, category: 'frontend' },
  { name: 'Flutter', level: 80, category: 'mobile' }
]);

const categories = ['frontend', 'backend', 'mobile', 'other'] as const;
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div class="grid gap-8">
        <div v-for="category in categories" :key="category">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 capitalize">
            {{ category }}
          </h3>
          <div class="space-y-4">
            <div
              v-for="skill in skills.filter(s => s.category === category)"
              :key="skill.name"
              class="bg-white rounded-lg p-4 shadow"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium">{{ skill.name }}</span>
                <span class="text-gray-600">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>