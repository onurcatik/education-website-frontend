<template>
  <div class="container mx-auto px-4">
    <!-- Başlık ve Açıklama -->
    <div class="text-center mb-8">
      <h1 class="text-2xl md:text-3xl font-bold text-blue-600 mt-12">
        En Çok Tercih Edilenler
      </h1>
      <h2 class="text-3xl md:text-4xl font-extrabold text-blue-900 mt-6">
        Eğitim Paketlerimiz
      </h2>
    </div>

    <!-- Kart Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <m-motion
        v-for="(item, index) in menuItems"
        :key="index"
        class="card bg-white rounded-lg shadow-xl w-full p-6 relative"
        :initial="{ opacity: 0, scale: 0.8 }"
        animate="{ opacity: 1, scale: 1 }"
        transition="{ duration: 0.5 }"
        :hover="{ scale: 1.05 }"
      >
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>

        <!-- Simge Bölümü -->
        <m-motion
          class="flex justify-center -mt-6 p-6"
          :initial="{ rotate: 0 }"
          animate="{ rotate: 360 }"
          transition="{ duration: 1 }"
        >
          <div class="w-48 h-48 bg-gray-200 rounded-sm flex items-center justify-center shadow-lg">
            <img :src="item.icon" alt="İkon" class="w-48 h-48 object-cover" />
          </div>
        </m-motion>

        <!-- Kart İçeriği -->
        <div class="text-center mt-4">
          <h2 class="text-xl font-bold text-gray-800">{{ item.title }}</h2>
          <p class="mt-4 text-gray-600">
            Bu program, öğrencilerin başarısını artırmak için özel olarak tasarlanmıştır. Temel bilgilerden ileri düzeye kadar kapsamlı içerikler sunar.
          </p>
          <div class="flex justify-between items-center mt-6">
            <span class="text-sm text-green-500 font-semibold">Başarı Oranı: %95</span>
            <button class="text-sm bg-blue-500 text-white px-4 py-2 rounded-md">Programa Katıl</button>
          </div>
        </div>
      </m-motion>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomGrid',
  data() {
    return {
      menuItems: [
        {
          title: 'Matematik Dersi 2025',
          icon: 'https://placehold.co/600x400',
        },
        {
          title: 'Fizik Dersi 2025',
          icon: 'https://placehold.co/600x400',
        },
        {
          title: 'Dil Dersi 2025',
          icon: 'https://placehold.co/600x400',
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #4f46e5, #ec4899);
  top: 0;
  left: 0;
}

.card:hover::before {
  height: 8px;
  transition: height 0.3s ease-in-out;
}
</style>
