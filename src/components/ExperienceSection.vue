<template>
    <section id="experience" class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Work Experience</h2>
        
        <div class="max-w-3xl mx-auto">
          <div 
            v-for="(job, index) in jobs" 
            :key="index"
            class="mb-12 relative"
          >
            <!-- Timeline dot -->
            <div class="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-600"></div>
            
            <!-- Timeline line -->
            <div 
              v-if="index < jobs.length - 1"
              class="absolute left-2 top-6 w-0.5 h-full bg-gray-300 dark:bg-gray-700 -ml-0.5"
            ></div>
            
            <!-- Content -->
            <div class="ml-8">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ job.title }}</h3>
              <div class="flex flex-wrap items-center mb-2">
                <span class="text-blue-600 dark:text-blue-400 font-medium">{{ job.company }}</span>
                <span class="mx-2 text-gray-400">•</span>
                <span class="text-gray-600 dark:text-gray-400">{{ job.location }}</span>
              </div>
              <div class="text-gray-600 dark:text-gray-400 mb-3 italic">
                {{ job.startDate }} - {{ job.endDate }}
              </div>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                {{ job.description }}
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li 
                  v-for="(highlight, hIndex) in job.highlights" 
                  :key="hIndex"
                  class="text-gray-700 dark:text-gray-300"
                >
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { usePortfolioData } from '@/composables/usePortfolioData';
  
  export default {
    name: 'ExperienceSection',
    setup() {
      const { getExperience } = usePortfolioData();
      const jobs = ref([]);
      
      onMounted(() => {
        jobs.value = getExperience();
      });
      
      return {
        jobs
      };
    }
  };
  </script>