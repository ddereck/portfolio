<script setup lang="ts">
interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: '🌐',
    title: 'Création de site sur mesure',
    description: 'Développez votre présence en ligne avec un site web professionnel conçu pour refléter l\'image de votre entreprise.',
    color: 'text-yellow-400'
  },
  {
    icon: '🖥️',
    title: 'Refonte de site',
    description: 'Je modernise et optimise votre site web pour offrir une meilleure expérience utilisateur et améliorer vos performances',
    color: 'text-emerald-400'
  },
  {
    icon: '⚙️',
    title: 'Maintenance de site',
    description: 'Je m\'occupe des mises à jour, de la sécurité et des sauvegardes régulières pour que votre site soit sans bug',
    color: 'text-pink-400'
  },
  {
    icon: '🛒',
    title: 'Création de e-boutique',
    description: 'Je conçois des sites e-commerce sur mesure, pour vous permettre de vendre vos produits efficacement.',
    color: 'text-orange-400'
  },
  {
    icon: '🚀',
    title: 'Référencement SEO',
    description: 'J\'optimise votre site web pour un meilleur classement, en attirant du trafic qualifié qui se transforme en clients.',
    color: 'text-purple-400'
  }
];
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <h3 class="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Ce En Quoi, Je Peux Vous Aider !
    </h3>
    <h3 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white"></h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title"
        class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
        <div :class="[service.color, 'text-4xl mb-4']">{{ service.icon }}</div>
        <h4 class="text-xl font-bold text-white mb-3">{{ service.title }}</h4>
        <p class="text-gray-400">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>