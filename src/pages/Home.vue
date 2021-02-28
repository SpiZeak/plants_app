<template>
	<h1>Lillemans vattennivå</h1>
	<div class="plant-container">
		<div class="plant">
			<div class="plant__leaves"></div>
		</div>
		<figure>
			<div class="gauge percentage" :class="classes">
				<div class="meter" :style="meterStyles"></div>
				<div class="percentage-container">
					<div class="percentage-indicator">
						{{ calculatePercentage() + '%' }}
					</div>
				</div>
			</div>
		</figure>
	</div>
	<h3 class="overloaded" v-if="classes.overload">Övervattnad</h3>
</template>

<script>
import { db } from '../firebase'

export default {
	data() {
		return {
			percentage: 0,
			classes: {
				overload: false
			},
			plants: {
				plant_1: {
					sensor: 0,
					min: 0,
					max: 0
				}
			},
			meterStyles: {}
		}
	},
	methods: {
		calculatePercentage: function () {
			let percentage = map(
				this.plants.plant_1.sensor,
				this.plants.plant_1.min,
				this.plants.plant_1.max,
				0,
				100
			)

			percentage = percentage.toFixed(0)

			this.classes.overload = false

			if (percentage > 100) {
				percentage = 100
				this.classes.overload = true
			} else if (percentage <= 0) {
				percentage = 0
			}

			this.meterStyles.transform = `rotate(${percentage / 200}turn)`
			this.percentage = percentage

			return percentage
		}
	},
	firebase: {
		plants: db.ref('plants')
	}
}

function map(x, in_min, in_max, out_min, out_max) {
	return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
</script>

<style lang="scss">
@font-face {
	font-family: 'Gamja';
	src: url('../assets/fonts/GamjaFlower-Regular.ttf');
}

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Open+Sans+Condensed:wght@300&display=swap');

$blue: #36aeff;
$darkblue: #1f7fff;

html {
	font-size: 150%;
}

body {
	font-family: 'Amatic SC', cursive;
	text-align: center;
	color: #fff;
	margin-top: 60px;
	display: flex;
	justify-content: center;
}

#app {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	font-family: 'Amatic SC', cursive;
	letter-spacing: 3px;
	font-size: 64px;
	text-transform: uppercase;
}

.overloaded {
	font-family: 'Open Sans Condensed', sans-serif;
	margin-top: 60px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 3px;
}

.plant-container {
	display: flex;
	align-items: flex-end;
}

.gauge {
	display: inline-block;
	position: relative;
	width: 10rem;
	height: 5rem;
	overflow: hidden;
}

.gauge:before,
.gauge:after,
.meter {
	position: absolute;
	display: block;
	content: '';
}

.gauge:before,
.meter {
	width: 10rem;
	height: 5rem;
}
.gauge:before {
	border-radius: 5rem 5rem 0 0;
	background: #2a2a2a;
}

.gauge:after {
	position: absolute;
	bottom: 0;
	left: 2.5rem;
	width: 5rem;
	height: 2.5rem;
	background: #222;
	border-radius: 2.5rem 2.5rem 0 0;
}

.meter {
	top: 100%;
	transition: 1.5s;
	transform-origin: center top;
	border-radius: 0 0 6rem 6rem;
	background: deepskyblue;
}

/* Overload effect ==================== */
.overload {
	transform-origin: center center;
	animation: overload 0.15s 0.5s infinite;
}

/* Gauge with percentage indicator ============== */
.percentage .meter {
	background: $blue;
}
.percentage-container {
	position: absolute;
	bottom: -0.75rem;
	left: 2.5rem;
	z-index: 1000;
	width: 5rem;
	height: 2.5rem;
	overflow: hidden;
}

.percentage-indicator {
	font: bold 1.5rem/1.6 'Gamja';
	color: $blue;
	line-height: 2.5rem;
	white-space: pre;
	vertical-align: baseline;
	user-select: none;
}

.overload .meter {
	animation-delay: 0.4s;
	background: $darkblue;
}

.overload .percentage-indicator {
	color: $darkblue;
}

.percentage .meter {
	animation-delay: 0.8s;
}

html {
	position: relative;
	height: 100%;
}
html,
body {
	display: -webkit-flex;
	display: flex;
}
body {
	width: 100%;
	align-self: center;
	text-align: center;
	overflow: hidden;
	background: #222;
}

figure {
	display: flex;
	flex: 1;
	margin: 0 0 0 2.4rem;
}

@keyframes overload {
	25% {
		transform: translateX(2px);
	}
	50% {
		transform: rotate(-1deg);
	}
	75% {
		transform: translateX(1px);
	}
}

$green: #67b57d;
$green-light: #6fc688;
$green-lighter: #7cd392;

.plant {
	width: 2.5rem;
	height: 2rem;
	position: relative;
	margin-top: 4rem;

	@media (min-width: 482px) {
		width: 5rem;
		height: 4rem;
	}

	&::after,
	&::before {
		content: '';
		position: absolute;
	}

	&::after {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem 0.5rem 0.2rem 0.2rem;
		bottom: 0;
		left: 0;
		background-color: #e2725b;
	}

	&__leaves {
		width: 40%;
		padding-top: 100%;
		border-radius: 100%;
		background-color: $green;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 1rem;

		@media (min-width: 482px) {
			bottom: 2rem;
		}

		&::after,
		&::before {
			width: 100%;
			height: 100%;
			border-radius: 100%;
			content: '';
			position: absolute;
			top: 0;
		}

		&::before {
			background-color: $green-light;
			left: -40%;
			transform: rotate(-40deg);
			animation: plant-left 3s ease infinite;
		}

		&::after {
			background-color: $green-lighter;
			left: 40%;
			transform: rotate(40deg);
			animation: plant-right 3s ease infinite;
		}
	}
}

@keyframes plant-right {
	0% {
		transform: rotate(40deg);
	}
	50% {
		transform: rotate(50deg);
	}
	100% {
		transform: rotate(40deg);
	}
}

@keyframes plant-left {
	0% {
		transform: rotate(-40deg);
	}
	50% {
		transform: rotate(-50deg);
	}
	100% {
		transform: rotate(-40deg);
	}
}
</style>
