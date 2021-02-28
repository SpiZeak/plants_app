<template>
	<form class="form">
		<h1>Registrera dig</h1>

		<div class="form__wrapper">
			<div class="form__group">
				<label for="username">Användarnamn</label>
				<input id="username" type="text" />
			</div>

			<div class="form__group">
				<label for="email">Mailadress</label>
				<input id="email" type="email" />
			</div>

			<div class="form__group">
				<label for="password">Lösenord</label>
				<input id="password" type="password" />
			</div>

			<div class="form__group">
				<label for="password_2">Bekräfta lösenord</label>
				<input id="password_2" type="password" />
			</div>

			<input class="form__submit" type="submit" value="Skicka" />
		</div>
	</form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form {
	// font-family: $font-open;

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
			// font-family: $font-open;
			padding: 0.3rem;
			font-size: 0.9rem;
			border-radius: 3px;
			border: none;
		}
	}

	&__submit {
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

		&:hover {
			cursor: pointer;
			background-color: #7cd392;
			color: #222;
		}
	}
}
</style>
