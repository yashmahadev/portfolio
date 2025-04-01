<!-- src/components/ContactSection.vue -->
<template>
    <section id="contact" class="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>
            <div class="mt-8 space-y-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-3 text-lg text-gray-600 dark:text-gray-300">
                  <a href="mailto:your.email@example.com" class="hover:text-primary-light dark:hover:text-primary-dark">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-3 text-lg text-gray-600 dark:text-gray-300">
                  +1 (123) 456-7890
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-3 text-lg text-gray-600 dark:text-gray-300">
                  San Francisco, CA
                </div>
              </div>
              <div class="mt-8 flex space-x-6">
                <a href="#" class="text-gray-500 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <form class="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-200">
              <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-primary-light dark:focus:ring-primary-dark focus:border-primary-light dark:focus:border-primary-dark transition-colors duration-200">
              </div>
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-primary-light dark:focus:ring-primary-dark focus:border-primary-light dark:focus:border-primary-dark transition-colors duration-200">
              </div>
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-primary-light dark:focus:ring-primary-dark focus:border-primary-light dark:focus:border-primary-dark transition-colors duration-200"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-light dark:bg-primary-dark hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection'
  }
  </script>