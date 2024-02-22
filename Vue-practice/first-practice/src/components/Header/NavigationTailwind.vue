<template>
  <div>
    <nav class="navbar flex justify-between items-center bg-gray-900 text-white py-4 px-6 fixed top-0 left-0 w-full z-10 transition-all duration-1000 ease">
      <div class="navbar-logo">
        <i class="fi fi-rr-heart text-red-500"></i>
        mili
      </div>
      <div class="navbar-toggle transform -rotate-45 transition-all duration-500 ease cursor-pointer block md:hidden" @click="toggleNavbar">
        <i class="fi fi-rr-caret-square-left"></i>
      </div>
      <ul class="navbar-links hidden md:flex flex-wrap list-none gap-x-8">
        <li><i class="fi fi-rr-apps-add"></i><a href="#" class="hover:text-red-500">main</a></li>
        <li><i class="fi fi-rr-diploma"></i><a href="#" class="hover:text-red-500">about us</a></li>
        <li><i class="fi fi-rr-id-badge"></i><a href="#" class="hover:text-red-500">services</a></li>
        <li><i class="fi fi-rr-mobile-button"></i><a href="#" class="hover:text-red-500">contact</a></li>
      </ul>
    </nav>
    <div class="main-content mt-20 transition-all duration-300 ease" :class="{ 'opacity-30': isExpanded }">
      <!-- Contenido principal de la página -->
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
      <h1 class="mb-4">Content</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
</style>
