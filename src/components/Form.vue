<template>
	<form class="form" @submit="submit">
		<h1>Registrera dig</h1>

		<div class="form__wrapper">
			<div class="form__group">
				<label for="email">Mailadress</label>
				<input id="email" v-model="email" type="email" placeholder="exempel@mail.com" />
			</div>

			<div class="form__group">
				<label for="password">Lösenord</label>
				<input id="password" v-model="password" type="password" />
			</div>

			<div class="form__group">
				<label for="password_2">Bekräfta lösenord</label>
				<input id="password_2" v-model="password_2" type="password" />
			</div>

			<p v-if="errors.length">
				<b>Var vänlig kontrollera följande:</b>
				<ul>
					<li :key="index" v-for="(error, index) in errors">{{ error }}</li>
				</ul>
			</p>

			<input class="form__submit" type="submit" value="Skicka" />
		</div>
	</form>
</template>

<script>
import { auth } from '../firebase'

export default {
	data() {
		return {
			errors: [],
			username: '',
			email: '',
			password: '',
			password_2: ''
		}
	},
	methods: {
		submit: function (e) {
			e.preventDefault()

			this.errors = []

			if (!this.email) {
				this.errors.push('Email saknas.')
			}

			if (!this.password) {
				this.errors.push('Lösenord saknas.')
			}

			if (this.password !== this.password_2) {
				this.errors.push('Lösenorden matchar inte.')
			}

			if (this.errors.length === 0) {
				auth
					.createUserWithEmailAndPassword(this.email, this.password)
					.then(userCredential => {
						var user = userCredential.user
						console.log(user)
					})
					.catch(error => {
						var errorCode = error.code
						var errorMessage = error.message

						if (errorMessage) {
							this.errors.push(errorMessage)
						}
					})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.form {
	h1 {
		text-align: center;
	}

	&__wrapper {
		margin: auto;
		max-width: 300px;
	}

	&__group {
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;

		&:last-of-type {
			margin-bottom: 0;
		}

		label {
			font-size: 1rem;
			margin-bottom: 2px;
		}

		input {
			padding: 0.4rem 0.6rem;
			font-size: 0.9rem;
			border-radius: 3px;
			border: none;
		}
	}

	&__submit {
		position: relative;
		transition: all 0.15s;
		margin-top: 48px;
		display: block;
		width: 100%;
		background-color: transparent;
		border: none;
		border-radius: 3px;
		padding: 12px 0;
		font-size: 1rem;
		border: 2px solid #7cd392;
		color: #7cd392;

		&:after {
			content: '';
			border-radius: 3px;
			background-color: darken(#7cd392, 20%);
		}

		&:hover {
			cursor: pointer;
			background-color: #7cd392;
			color: #222;
		}
	}
}
</style>
