<template>
	<a :href="href" :class="{ active: isActive }" @click="go">
		<slot></slot>
	</a>
</template>

<script src="./VLink.js"></script>
<style src="./VLink.scss" lang="scss" scoped></style>
