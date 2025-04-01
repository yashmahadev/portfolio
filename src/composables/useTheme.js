// src/composables/useTheme.js
import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  // Create a ref to hold the current theme
  const theme = ref('light');
  
  // Function to toggle the theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    // Save to localStorage for persistence
    localStorage.setItem('theme', theme.value);
    // Apply theme to document
    applyTheme(theme.value);
  };
  
  // Function to apply theme to document
  const applyTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Initialize theme on component mount
  onMounted(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme.value = prefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', theme.value);
    }
    
    // Apply the theme
    applyTheme(theme.value);
  });
  
  // Watch for theme changes
  watch(theme, (newTheme) => {
    applyTheme(newTheme);
  });
  
  // Return theme ref and toggle function
  return {
    theme,
    toggleTheme
  };
}