// src/composables/usePortfolioData.js
import { ref, readonly } from 'vue';
import portfolioData from '@/data/portfolio-data.json';

export function usePortfolioData() {
  const data = ref(portfolioData);
  
  // Function to get sections of data
  const getPersonalInfo = () => readonly(data.value.personal);
  const getSkills = () => readonly(data.value.skills);
  const getExperience = () => readonly(data.value.experience);
  const getProjects = () => readonly(data.value.projects);
  const getEducation = () => readonly(data.value.education);
  const getTestimonials = () => readonly(data.value.testimonials);
  const getContact = () => readonly(data.value.contact);
  
  // Function to get a specific featured project
  const getFeaturedProjects = () => {
    return readonly(data.value.projects.filter(project => project.featured));
  };
  
  return {
    getPersonalInfo,
    getSkills,
    getExperience,
    getProjects,
    getFeaturedProjects,
    getEducation,
    getTestimonials,
    getContact
  };
}