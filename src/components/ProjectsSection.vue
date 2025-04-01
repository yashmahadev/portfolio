<template>
    <section id="projects" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Featured Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105"
          >
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="techIndex"
                  class="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md text-xs"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-4">
                <a 
                  v-if="project.demoLink" 
                  :href="project.demoLink" 
                  target="_blank"
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo
                </a>
                <a 
                  v-if="project.sourceLink" 
                  :href="project.sourceLink" 
                  target="_blank"
                  class="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <a 
            href="#" 
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { usePortfolioData } from '@/composables/usePortfolioData';
  
  export default {
    name: 'ProjectsSection',
    setup() {
      const { getFeaturedProjects } = usePortfolioData();
      const projects = ref([]);
      
      onMounted(() => {
        projects.value = getFeaturedProjects();
      });
      
      return {
        projects
      };
    }
  };
  </script>