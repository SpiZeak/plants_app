import { auth } from '../../firebase';
import { goto } from '../../router';

export default {
	mounted() {
		this.logout();
	},
	methods: {
		logout() {
			auth
				.signOut()
				.then(() => {
					console.log('logged out');
					goto('/', this.$root);
				})
				.catch((error) => {
					console.log('error logging out');
					console.log(error);
				});
		}
	}
};
