import { auth } from '../../../firebase';

export default {
	data() {
		return {
			errors: [],
			username: '',
			email: '',
			password: '',
			password_2: ''
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

			if (this.password !== this.password_2) {
				this.errors.push("The two passwords don't match");
			}

			if (this.errors.length === 0) {
				auth
					.createUserWithEmailAndPassword(this.email, this.password)
					.then(userCredential => {
						var user = userCredential.user;
						console.log(user);
					})
					.catch(error => {
						if (error.message) {
							this.errors.push(error.message);
						}
					});
			}
		}
	}
};
