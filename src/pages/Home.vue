<template>
	<main-layout>
		<div class="wrapper">
			<h1>Lillemans vattennivå</h1>
			<div class="plant-container">
				<plant />
				<gauge :classes="this.classes" :plants="this.plants" />
			</div>
			<h3 class="overloaded" v-if="classes.overload">Övervattnad</h3>
		</div>
	</main-layout>
</template>

<script>
import { db } from '../firebase'
import MainLayout from '../layouts/Main.vue'
import Plant from '../components/Plant.vue'
import Gauge from '../components/Gauge.vue'

export default {
	data() {
		return {
			classes: {
				overload: false
			},
			plants: {
				plant_1: {
					sensor: 0,
					min: 0,
					max: 0
				}
			}
		}
	},
	components: {
		MainLayout,
		Plant,
		Gauge
	},
	firebase: {
		plants: db.ref('plants')
	}
}
</script>

<style lang="scss">
h1 {
	font-family: 'Amatic SC', cursive;
	letter-spacing: 3px;
	font-size: 64px;
	text-transform: uppercase;
}

.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 200px;
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
</style>
