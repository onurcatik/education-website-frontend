<template>
  <section class="relative bg-gray-100 py-8 md:py-16 h-[500px] md:h-[650px] overflow-hidden">
    <div class="absolute inset-0 flex transition-transform duration-1000 ease-in-out" :style="`transform: translateX(-${currentSlide * 100}%);`">
      <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
        <img :src="slide.image" alt="Hero Background" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="relative container mx-auto h-full px-4 md:px-12 flex flex-col md:flex-row items-center justify-between pt-8 md:pt-12">
      <!-- Sol taraf: Dinamik Hero Yazısı -->
      <div class="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 px-4 md:pl-24 z-10">
        <h1 class="text-3xl md:text-5xl font-bold text-black leading-tight mb-4 md:mb-6">
          {{ slides[currentSlide].title }} <span class="text-red-500">{{ slides[currentSlide].highlight }}</span>
        </h1>
        <p class="text-black mb-4 md:mb-6">
          {{ slides[currentSlide].description }}
        </p>
        <a href="#"
          class="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          {{ slides[currentSlide].buttonText }}
        </a>
      </div>

      <!-- Sağ taraf: Butonlar (İleri/Geri) -->
      <div class="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-20">
        <button @click="prevSlide" class="bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300">←</button>
        <button @click="nextSlide" class="bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300">→</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
  return {
    currentSlide: 0,
    slides: [
      {
        title: "Bilgiye Açılan Kapı",
        highlight: "Eğitimde Mükemmellik",
        description: "Eğitimde sınırları aşarak, potansiyelinizi en üst seviyeye taşıyoruz. Siz de kendinizi geliştirmeye hazır mısınız?",
        buttonText: "Başlayın",
        image: "https://placehold.co/1200x800"
      },
      {
        title: "Geleceği İnşa Et",
        highlight: "Sınırsız İmkanlar",
        description: "Dijital eğitimle donatılmış bir gelecek için bilgiye yatırım yapın ve sınırları zorlayın.",
        buttonText: "Keşfet",
        image: "https://placehold.co/1200x800"
      },
      {
        title: "Kendinizi Geliştirin",
        highlight: "Başarıya Bir Adım Daha Yaklaşın",
        description: "Modern öğrenme araçlarımız ile profesyonel hayata adım atın ve geleceğe güvenle bakın.",
        buttonText: "Aramıza Katılın",
        image: "https://placehold.co/1200x800"
      }
    ],
    interval: null // setInterval için bir referans saklıyoruz
  };
},

  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startSlideShow() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 2000); // Her 2 saniyede bir geçiş yap
    },
    stopSlideShow() {
      clearInterval(this.interval); // Interval'i durdur
    }
  },
  mounted() {
    this.startSlideShow(); // Bileşen yüklendiğinde slayt gösterisini başlat
  },
  beforeUnmount() {
    this.stopSlideShow(); // Bileşen yok edilmeden önce interval'i temizle
  }
};
</script>

<style scoped>
/* Ek stiller gerektiğinde buraya eklenebilir */
</style>
