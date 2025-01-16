<template>
  <header class="bg-gray-200 p-4 md:p-8 flex justify-between items-center w-full">
    <div class="text-2xl md:text-3xl font-bold">Home</div>
    <nav>
      <button @click="isMenuOpen = !isMenuOpen" class="block md:hidden text-2xl">
        &#9776; <!-- Hamburger Menu Icon -->
      </button>
      <ul :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="flex-col md:flex md:flex-row md:space-x-4 md:items-center space-y-4 md:space-y-0 mt-4 md:mt-0">
        <li>
          <a href="#" class="hover:text-blue-500 block md:inline font-semibold">Anasayfa</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500 block md:inline font-semibold">Hakkında</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500 block md:inline font-semibold ">İletişim</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500 block md:inline font-semibold">Blog</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500 block md:inline font-semibold ">Destek</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader', // The multi-word name resolves the ESLint error.
  data() {
    return {
      isMenuOpen: false, // Toggle state for responsive menu
    };
  },
};
</script>

<style scoped>
/* Padding for the top content to ensure the header doesn't overlap */
main {
  padding-top: 64px; /* Adjust based on the height of your header */
}
</style>
