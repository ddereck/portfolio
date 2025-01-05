<script setup lang="ts">
import AboutSection from './components/sections/AboutSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <NavBar />
    <main>
      <section id="about" class="min-h-screen"><AboutSection /></section>
      <section id="services" class="min-h-screen"><ServicesSection /></section>
      <section id="projects" class="min-h-screen"><ProjectsSection /></section>
      <section id="skills" class="min-h-screen"><SkillsSection /></section>
      <section id="contact" class="min-h-screen"><ContactSection /></section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>