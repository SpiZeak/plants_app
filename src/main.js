import { createApp, h } from 'vue';
import { rtdbPlugin } from 'vuefire';
import HomeComponent from './pages/Home.vue';
import SignupComponent from './pages/Signup.vue';
import NotFoundComponent from './pages/404.vue';

const routes = {
	'/': HomeComponent,
	'/ny-anvandare': SignupComponent
};

const router = {
	data: () => ({
		currentRoute: window.location.pathname
	}),

	computed: {
		CurrentComponent() {
			return routes[this.currentRoute] || NotFoundComponent;
		}
	},

	render() {
		return h(this.CurrentComponent);
	}
};

createApp(router).use(rtdbPlugin).mount('#app');
