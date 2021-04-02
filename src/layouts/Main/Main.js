import { auth } from '../../firebase';
import Navbar from '../../components/Navbar/Navbar.vue';

export default {
	data() {
		return {
			user: null
		};
	},
	components: {
		Navbar
	},
	mounted() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.user = user;
			} else {
				this.user = null;
			}
		});
	}
};
