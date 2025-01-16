<template>
  <div class="relative w-full text-center py-12 px-6 md:px-24">
    <h2 class="text-3xl md:text-4xl font-bold text-blue-500 mb-12">Kullanıcı Yorumları</h2>
    
    <!-- Slider Wrapper -->
    <div class="relative flex items-center justify-center overflow-hidden">
      <!-- Previous Arrow -->
      <button
        @click.prevent="prevSlide"
        class="absolute left-0 top-1/2 md:left-6 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-3 rounded-full focus:outline-none z-10"
      >
        &#8592;
      </button>
      
      <!-- Slider Content -->
      <div class="flex transition-transform duration-500 ease-in-out w-full" :style="slideTransform">
        <motion
          v-for="(review, index) in reviews"
          :key="index"
          class="w-full flex-shrink-0 md:max-w-[450px] bg-white shadow-lg p-6 rounded-lg"
          :initial="{ opacity: 0, x: 200 }"
          :enter="{ opacity: 1, x: 0 }"
          :leave="{ opacity: 0, x: -100 }"
        >
          <div class="flex flex-col items-center">
            <img :src="review.image" alt="Review Image" class="w-full h-auto object-cover mb-6 rounded-md">
            <p class="font-semibold">{{ review.name }}</p>
            <p class="text-sm text-gray-600">{{ review.role }}</p>
          </div>
        </motion>
      </div>

      <!-- Next Arrow -->
      <button
        @click.prevent="nextSlide"
        class="absolute right-0 top-1/2 md:right-6 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-3 rounded-full focus:outline-none z-10"
      >
        &#8594;
      </button>
    </div>
  </div>
</template>

<script>
import { motion } from '@vueuse/motion';

export default {
  components: {
    motion,
  },
  data() {
    return {
      currentIndex: 0,
      reviews: [
        {
          image: 'https://placehold.co/600x400',
          name: 'Kullanıcı',
          role: 'Öğrenci',
        },
        {
          image: 'https://placehold.co/600x400',
          name: 'Kullanıcı',
          role: 'Öğrenci',
        },
        {
          image: 'https://placehold.co/600x400',
          name: 'Kullanıcı',
          role: 'Öğretmen',
        },
        {
          image: 'https://placehold.co/600x400',
          name: 'Kullanıcı',
          role: 'Eğitimci',
        },
        {
          image: 'https://placehold.co/600x400',
          name: 'Kullanıcı',
          role: 'Öğrenci',
        },
      ],
    };
  },
  computed: {
    slideTransform() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .slider-wrapper {
    padding: 0 100px;
  }
}
</style>
