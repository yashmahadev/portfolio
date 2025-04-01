<!-- src/components/AboutSection.vue -->
<template>
    <section id="about" class="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div class="mt-8 mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-left">
            <p class="mb-4">
              I'm a dedicated software engineer with 5 years of experience building web applications. 
              I specialize in front-end development with Vue.js, React, and Angular, along with back-end 
              technologies like Node.js and Python.
            </p>
            <p class="mb-4">
              My journey in software development started with a passion for creating user-friendly interfaces 
              and has evolved into building complete, scalable applications. I enjoy solving complex problems 
              and continuously learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new 
              development tools. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection'
  }
  </script>