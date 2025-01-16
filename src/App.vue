<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <HeroSection />
    <SectionCards />
    <CustomGrid />  <!-- Updated the component name here -->
    <MainContent/>
    <CustomSlider/>
    <CustomSection/>
    <UserReviewSlider/>
    <Footer/>
    
  </div>
</template>



<script>
import NavBar from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import SectionCards from './components/SectionCards.vue';
import CustomGrid from './components/Grid.vue';  // Changed from 'Grid' to 'CustomGrid'
import UserReviewSlider from './components/UserReviewSlider.vue';
import Footer from './components/Footer.vue';
import CustomSection from './components/Section.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    SectionCards,
    CustomGrid,  // Updated the name here too
    CustomSection,
    UserReviewSlider,
    Footer,
    
  }
};
</script>
