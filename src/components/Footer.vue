<template>
  <footer class="py-10 text-gray-700 bg-white">
    <div class="container mx-auto px-6 lg:px-12 text-center">
      <!-- Footer Grid -->
      <div class="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 lg:gap-12 max-w-screen-xl mx-auto">
        
        <!-- Diğer Bağlantılar Bölümü -->
        <div class="w-full lg:w-1/4">
          <h3 class="font-bold text-xl mb-4">Diğer</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-red-500">Video</a></li>
            <li><a href="#" class="hover:text-red-500">Çalışma Planı</a></li>
            <li><a href="#" class="hover:text-red-500">Ders</a></li>
          </ul>
        </div>

        <!-- Eğitim Şirketi Bölümü -->
        <div class="w-full lg:w-1/4">
          <h3 class="font-bold text-xl mb-4">Eğitim Şirketi</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-red-500">Hakkımızda</a></li>
            <li><a href="#" class="hover:text-red-500">Blog</a></li>
            <li><a href="#" class="hover:text-red-500">Yardım</a></li>
            <li><a href="#" class="hover:text-red-500">Bizden Haberler</a></li>
            <li><a href="#" class="hover:text-red-500">İletişim</a></li>
            <li><a href="#" class="hover:text-red-500">Teknik Destek</a></li>
          </ul>
        </div>

        <!-- Kaynaklar Bölümü -->
        <div class="w-full lg:w-1/4">
          <h3 class="font-bold text-xl mb-4">Kaynak</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-red-500">Sözleşme</a></li>
            <li><a href="#" class="hover:text-red-500">Kişisel Veriler</a></li>
            <li><a href="#" class="hover:text-red-500">Dizin</a></li>
            <li><a href="#" class="hover:text-red-500">Politika</a></li>
          </ul>
        </div>
      </div>

      <!-- Alt Footer -->
      <div class="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        <p>© 2024 Telif Hakkı</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CustomFooter",
};
</script>

<style scoped></style>
