import { auth } from '../../../firebase';

export default {
	data() {
		return {
			errors: [],
			username: '',
			email: '',
			password: ''
		};
	},
	methods: {
		submit: function (e) {
			e.preventDefault();

			this.errors = [];

			if (!this.email) {
				this.errors.push('Please enter an email adress.');
			}

			if (!this.password) {
				this.errors.push('Please enter a password.');
			}

			if (this.errors.length === 0) {
				auth
					.signInWithEmailAndPassword(this.email, this.password)
					.then(userCredential => {
						var user = userCredential.user;
						console.log(user);
					})
					.catch(error => {
						this.errors.push(error.message);
					});
			}
		}
	}
};
