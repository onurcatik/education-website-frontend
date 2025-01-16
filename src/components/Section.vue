<template>
  <div class="bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 md:px-8 lg:px-16 mt-12">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center tracking-wide">
      Eğitim Platformu
      <span class="text-purple-600 underline">Ne Kadar Faydalı?</span>
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <!-- Kartları döngü ile oluştur ve animasyon ekle -->
      <motion-div 
        v-for="(item, index) in items.slice(0, 12)" 
        :key="index" 
        class="flex items-center bg-white rounded-lg shadow-lg p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
        v-motion="{ 
          initial: { opacity: 0, y: 50 }, 
          enter: { opacity: 1, y: 0 },
          whileHover: { scale: 1.05, rotate: [0, 3, -3, 0] },
          transition: { delay: 0.1 * index, type: 'spring', stiffness: 300 }
        }"
      >
        <!-- İkon ve Başlık Bölümü -->
        <div class="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-lg mr-4">
          <i :class="item.icon" class="text-2xl"></i>
        </div>
        <div>
          <h3 class="font-bold text-base lg:text-lg text-gray-800">{{ item.title }}</h3>
        </div>
      </motion-div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDifference",
  data() {
    return {
      items: [
        { title: 'Akıllı Yapay Zeka Çözümleri', icon: 'fa-solid fa-microchip' },
        { title: 'Animasyonlu Ders Videoları', icon: 'fa-solid fa-film' },
        { title: 'Video Destekli Soru Bankası', icon: 'fa-solid fa-video' },
        { title: 'Özelleştirilmiş Çalışma Planı', icon: 'fa-solid fa-calendar-check' },
        { title: 'Veli Portalı (İlerleme Takip Sistemi)', icon: 'fa-solid fa-users' },
        { title: 'Anında Özel Ders (Hızlı Öğretmen Uygulaması)', icon: 'fa-solid fa-lightbulb' },
        { title: 'Dijital Rehber Uygulaması (Yanınızda Mentor)', icon: 'fa-solid fa-user-graduate' },
        { title: 'Soru Çözüm Uygulaması (Her Soruyu Çöz)', icon: 'fa-solid fa-circle-check' },
        { title: 'Videolu Çözümlü Deneme Sınavları', icon: 'fa-solid fa-chalkboard-teacher' },
        { title: 'Kesin Soru Tahminleri', icon: 'fa-solid fa-bullseye' },
        { title: 'Çoklu Platform Erişimi (PC ve Mobil)', icon: 'fa-solid fa-tablet-alt' },
        { title: 'Sınırsız İzleme Hakkı', icon: 'fa-solid fa-infinity' }
      ],
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
}
</style>
