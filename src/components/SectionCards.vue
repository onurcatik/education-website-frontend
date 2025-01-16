<template>
  <section class="bg-gray-500 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-white">Eğitim</h1>
        <p class="text-lg text-white mt-4">Bu eğitim sürecinde, belirlediğiniz hızla ilerleyerek tamamlamanızın kaç gün süreceğini kolayca hesaplayabilirsiniz.</p>
<p class="text-xl font-bold text-yellow-500 mt-6">Hangi uzmanlık alanında sınava katılmayı planlıyorsunuz?</p>

      </div>
      <!-- Kaydırılabilir Grid Başlangıç -->
      <div
        ref="slider"
        class="flex space-x-8 overflow-x-auto py-4 slider-hidden"
        style="scrollbar-width: auto; -ms-overflow-style: auto;"
      >
        <!-- Card 1 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-school-flag text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Sınav Hazırlığı</h2>
          <p class="text-lg opacity-90">Kapsamlı sınav hazırlık programı</p>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-school text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Okul Desteği</h2>
          <p class="text-lg opacity-90">Okul sınavlarına yönelik destek programı</p>
        </div>

        <!-- Card 3 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-person-chalkboard text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Öğretmen Eğitimi</h2>
          <p class="text-lg opacity-90">Öğretmenler için eğitim programı</p>
        </div>

        <!-- Card 4 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-user-graduate text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Mezuniyet Kursu</h2>
          <p class="text-lg opacity-90">Üniversite hazırlık kursları</p>
        </div>

        <!-- Card 5 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-graduation-cap text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Diploma Programları</h2>
          <p class="text-lg opacity-90">Çeşitli diploma kursları</p>
        </div>

        <!-- Card 6 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-atom text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Bilimsel Eğitim</h2>
          <p class="text-lg opacity-90">Bilim dallarında özel eğitimler</p>
        </div>

        <!-- Card 7 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-language text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Dil Kursları</h2>
          <p class="text-lg opacity-90">Farklı dillerde eğitim programları</p>
        </div>

        <!-- Card 8 -->
        <div class="min-w-[300px] bg-blue-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="mb-6">
            <div class="bg-white bg-opacity-20 rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-laptop-code text-white text-4xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-extrabold mb-4">Yazılım Eğitimi</h2>
          <p class="text-lg opacity-90">Yazılım geliştirme eğitimleri</p>
        </div>

      </div>
      <!-- Kaydırılabilir Grid Bitiş -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCards',
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      const slider = this.$refs.slider;
      let scrollAmount = 0;
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      
      setInterval(() => {
        if (scrollAmount < maxScroll) {
          scrollAmount += 300; // 300px kaydır
        } else {
          scrollAmount = 0; // Baştan başla
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }, 3000); // Her 3 saniyede bir kaydır
    },
  },
};
</script>

<style scoped>
/* Kaydırma Çubuğunu göstermek için scrollbar-hide sınıfı kaldırıldı. */

.slider-hidden {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.slider-hidden::-webkit-scrollbar {
  display: none; /* Safari ve Chrome */
}

</style>
