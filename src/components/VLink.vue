<template>
	<a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go">
		<slot></slot>
	</a>
</template>

<script>
import { routes } from '../router'

export default {
	props: {
		href: {
			type: String,
			required: true
		}
	},
	computed: {
		isActive() {
			return this.href === this.$root.currentRoute
		}
	},
	methods: {
		go(event) {
			event.preventDefault()
			this.$root.currentRoute = this.href
			window.history.pushState(null, routes[this.href], this.href)
		}
	}
}
</script>

<style lang="scss" scoped>
a {
	transition: all 0.15s;
}

.active,
a:hover {
	position: relative;
	color: #7cd392;
}

.active::after {
	position: absolute;
	content: '';
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #7cd392;
}
</style>
