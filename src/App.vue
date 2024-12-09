<script setup lang="ts">
import AboutSection from './components/sections/AboutSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
    <NavBar />
    <main>
      <section id="about" class="min-h-screen"><AboutSection /></section>
      <section id="projects" class="min-h-screen"><ProjectsSection /></section>
      <section id="skills" class="min-h-screen"><SkillsSection /></section>
      <section id="experience" class="min-h-screen"><ExperienceSection /></section>
      <section id="contact" class="min-h-screen"><ContactSection /></section>
    </main>
    <Footer />
  </div>
</template>