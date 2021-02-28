<template>
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
</template>

<script>
export default {
	data() {
		return {
			percentage: 0,
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
	props: ['plants', 'classes']
}
function map(x, in_min, in_max, out_min, out_max) {
	return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
</script>

<style lang="scss" scoped>
$blue: #36aeff;
$darkblue: #1f7fff;

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
	text-align: center;
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

figure {
	display: flex;
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
</style>
