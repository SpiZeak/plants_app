import { auth } from '../../firebase';
import VLink from '../../components/VLink/VLink.vue';

export default {
	components: {
		VLink
	},
	methods: {
		logout: function () {
			auth
				.signOut()
				.then(() => {
					// Signed out
				})
				.catch(error => {
					// An error happened.
				});
		}
	}
};
