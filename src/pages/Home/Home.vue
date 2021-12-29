<template>
	<main-layout>
		<div class="wrapper">
			<h1>Lilleman</h1>
			<div class="plant-container">
				<plant />
				<gauge
					v-if="Object.keys(this.plants).length"
					:classes="this.classes"
					:plants="this.plants"
					:message="this.message"
				/>
			</div>
			<Bar v-if="Object.keys(this.plants).length" :plants="this.plants" />
			<h3 class="overloaded">{{ message.first }}</h3>
		</div>
	</main-layout>
</template>

<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss"></style>
