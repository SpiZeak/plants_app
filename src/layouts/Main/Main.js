import firebase from 'firebase/app';
import Navbar from '../../components/Navbar/Navbar.vue';

export default {
	components: {
		Navbar
	},
	mounted() {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				this.user = user;
			} else {
				this.user = null;
			}
		});
	}
};
