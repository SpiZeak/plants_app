import { h } from 'vue';
import HomeComponent from './pages/Home.vue';
import SignupComponent from './pages/Signup.vue';
import NotFoundComponent from './pages/404.vue';

export const routes = {
	'/': HomeComponent,
	'/ny-anvandare': SignupComponent,
	'404': NotFoundComponent
};

export const router = {
	data: () => ({
		currentRoute: window.location.pathname
	}),

	computed: {
		CurrentComponent() {
			return routes[this.currentRoute] || routes['404'];
		}
	},

	render() {
		return h(this.CurrentComponent);
	}
};
