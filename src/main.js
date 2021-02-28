import { createApp } from 'vue';
import { rtdbPlugin } from 'vuefire';
import { router } from './router';

const app = createApp(router).use(rtdbPlugin).mount('#app');

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});
