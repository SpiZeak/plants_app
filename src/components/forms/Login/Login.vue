<template>
	<form class="form" @submit="submit">
		<h1>Login</h1>

		<div class="form__wrapper">
			<div class="form__group">
				<label for="email">Email</label>
				<input id="email" v-model="email" type="email" placeholder="exempel@mail.com" />
			</div>

			<div class="form__group">
				<label for="password">Password</label>
				<input id="password" v-model="password" type="password" />
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

<script src="./Login.js"></script>
<style src="./Login.scss" lang="scss" scoped></style>
