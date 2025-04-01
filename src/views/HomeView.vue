<template>
  <div class="bg-white dark:bg-gray-900 transition-colors duration-200">
    <NavBar />
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HeroSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    FooterSection
  }
};
</script>
