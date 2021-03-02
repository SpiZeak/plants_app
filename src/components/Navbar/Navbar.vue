<template>
	<ul>
		<li>
			<v-link href="/">Hem</v-link>
		</li>
		<li>
			<v-link href="/new-user">Registrera dig</v-link>
		</li>
		<li>
			<v-link href="/login">Logga in</v-link>
		</li>
		<li>
			<v-link :click="logout" href="#">Logga ut</v-link>
		</li>
	</ul>

	<slot></slot>
</template>

<script src="./Navbar.js"></script>
<style src="./Navbar.scss" lang="scss" scoped></style>
