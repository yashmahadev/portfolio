// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/tailwind.css' // If you're using Tailwind

// Apply theme from localStorage on page load
const theme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const app = createApp(App)
app.use(router)
app.mount('#app')