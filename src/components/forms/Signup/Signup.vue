<template>
	<form class="form" @submit="submit">
		<h1>Register</h1>

		<div class="form__wrapper">
			<div class="form__group">
				<label for="email">Email</label>
				<input id="email" v-model="email" type="email" placeholder="example@email.com" />
			</div>

			<div class="form__group">
				<label for="password">Password</label>
				<input id="password" v-model="password" type="password" />
			</div>

			<div class="form__group">
				<label for="password_2">Confirm password</label>
				<input id="password_2" v-model="password_2" type="password" />
			</div>

			<p v-if="errors.length">
				<b>Please correct the following:</b>
				<ul>
					<li :key="index" v-for="(error, index) in errors">{{ error }}</li>
				</ul>
			</p>

			<input class="form__submit" type="submit" value="Skicka" />
		</div>
	</form>
</template>

<script src="./Signup.js"></script>
<style src="./Signup.scss" lang="scss" scoped></style>
