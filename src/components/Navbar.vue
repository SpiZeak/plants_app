<template>
	<ul>
		<li>
			<v-link href="/">Hem</v-link>
		</li>
		<li>
			<v-link href="/ny-anvandare">Registrera dig</v-link>
		</li>
		<li>
			<v-link href="/logga-in">Logga in</v-link>
		</li>
	</ul>

	<slot></slot>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
	components: {
		VLink
	}
}
</script>

<style lang="scss" scoped>
ul {
	margin: 10px;
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: flex-end;
}

li {
	margin-right: 10px;

	&:last-of-type {
		margin-right: 0;
	}
}

a {
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	font-size: 1.2rem;
}
</style>
