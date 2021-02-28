<template>
	<!-- <navbar /> -->
	<slot />
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
	components: {
		Navbar
	}
}
</script>
<style lang="scss">
@font-face {
	font-family: 'Gamja';
	src: url('../assets/fonts/GamjaFlower-Regular.eot');
	src: url('../assets/fonts/GamjaFlower-Regular.eot?#iefix')
			format('embedded-opentype'),
		url('../assets/fonts/GamjaFlower-Regular.woff2') format('woff2'),
		url('../assets/fonts/GamjaFlower-Regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Gamja';
	src: url('../assets/fonts/GamjaFlower-Regular.eot');
	src: url('../assets/fonts/GamjaFlower-Regular.eot?#iefix')
			format('embedded-opentype'),
		url('../assets/fonts/GamjaFlower-Regular.woff2') format('woff2'),
		url('../assets/fonts/GamjaFlower-Regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Open+Sans+Condensed:wght@300&display=swap');

$font-gamja: 'Gamja';
$font-amatic: 'Amatic SC', cursive;
$font-open: 'Open Sans Condensed', sans-serif;

html {
	font-size: 150%;
	position: relative;
	height: 100%;
}

body {
	margin: 0;
	font-family: $font-amatic;
	color: #fff;
	width: 100%;
	overflow: hidden;
	background: #222;
}
</style>
