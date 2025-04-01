<template>
    <section id="skills" class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Skills & Expertise</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(category, index) in skillCategories" 
            :key="index" 
            class="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6"
          >
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, skillIndex) in category.skills" 
                :key="skillIndex"
                :class="getSkillBadgeClass(skill)"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useTheme } from '@/composables/useTheme';
  import { usePortfolioData } from '@/composables/usePortfolioData';
  
  export default {
    name: 'SkillsSection',
    setup() {
      const { theme } = useTheme();
      const { getSkills } = usePortfolioData();
      
      const skillCategories = ref([]);
      
      onMounted(() => {
        skillCategories.value = getSkills();
      });
  
      const getSkillBadgeClass = (skill) => {
        const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
        
        // Make sure theme is defined, with a fallback
        const currentTheme = theme?.value || 'light';
        
        if (skill.level === 'advanced') {
          return `${baseClasses} ${currentTheme === 'dark' ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`;
        } else if (skill.level === 'intermediate') {
          return `${baseClasses} ${currentTheme === 'dark' ? 'bg-blue-800 text-blue-100' : 'bg-blue-100 text-blue-800'}`;
        } else {
          return `${baseClasses} ${currentTheme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}`;
        }
      };
  
      return {
        skillCategories,
        getSkillBadgeClass,
        theme
      };
    }
  };
  </script>