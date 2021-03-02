import { h } from 'vue';
import Home from './pages/Home/Home.vue';
import Signup from './pages/Signup/Signup.vue';
import NotFound from './pages/404/404.vue';
import Login from './pages/Login/Login.vue';


export const routes = {
	'/': Home,
	'/new-user': Signup,
	'/login': Login,
	'404': NotFound,
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
