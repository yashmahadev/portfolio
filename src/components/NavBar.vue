<!-- src/components/NavBar.vue -->
<template>
    <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-800 dark:text-white"> {{ personalInfo.name }} </span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-center space-x-4">
                <!-- <a href="#home" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Home</a> -->
                <a href="#about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">About</a>
                <a href="#skills" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Skills</a>
                <a href="#projects" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Projects</a>
                <a href="#experience" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Experience</a>
                <a href="#contact" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Contact</a>
              </div>
            </div>
            <ThemeToggle class="ml-4" />
            <div class="md:hidden ml-4">
              <button @click="toggleMobileMenu" class="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- <a href="#home" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Home</a> -->
          <a href="#about" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">About</a>
          <a href="#skills" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Skills</a>
          <a href="#projects" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Projects</a>
          <a href="#experience" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Experience</a>
          <a href="#contact" @click="toggleMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">Contact</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import ThemeToggle from './ThemeToggle.vue'
  import { usePortfolioData } from '@/composables/usePortfolioData';
  
  export default {
    name: 'NavBar',
    components: {
      ThemeToggle
    },
    setup() {
      const mobileMenuOpen = ref(false)
      
      const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value
      }

      const { getPersonalInfo } = usePortfolioData();
      const personalInfo = ref({});
      
      onMounted(() => {
        personalInfo.value = getPersonalInfo();
      });
      
      return { mobileMenuOpen, toggleMobileMenu, personalInfo }
    }
  }
  </script>