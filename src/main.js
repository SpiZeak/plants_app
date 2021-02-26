import { createApp } from 'vue';
import { rtdbPlugin } from 'vuefire';
import App from './App.vue';

createApp(App).use(rtdbPlugin).mount('#app');
