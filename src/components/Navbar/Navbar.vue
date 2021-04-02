<template>
	<ul>
		<li>
			<v-link href="/">Home</v-link>
		</li>
		<li v-if="!user">
			<v-link href="/new-user">Register</v-link>
		</li>
		<li v-if="!user">
			<v-link href="/login">Login</v-link>
		</li>
		<li v-if="user">
			<v-link @click="logout" href="/logout">Log out</v-link>
		</li>
	</ul>

	<slot></slot>
</template>

<script src="./Navbar.js"></script>
<style src="./Navbar.scss" lang="scss" scoped></style>
