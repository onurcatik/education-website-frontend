import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import "@fortawesome/fontawesome-free/css/all.css";
import { MotionPlugin } from '@vueuse/motion'; // Motion Plugin'i import et

// Vue uygulamasını başlat
const app = createApp(App);

// MotionPlugin'i kullanarak globalde uygulamaya dahil et
app.use(MotionPlugin);

// Uygulamayı DOM'a bağla
app.mount('#app');
