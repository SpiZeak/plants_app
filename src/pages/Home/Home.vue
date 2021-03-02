<template>
	<main-layout>
		<div class="wrapper">
			<h1>Lillemans water level</h1>
			<div class="plant-container">
				<plant />
				<gauge :classes="this.classes" :plants="this.plants" />
			</div>
			<h3 class="overloaded" v-if="classes.overload">Too much water!</h3>
		</div>
	</main-layout>
</template>

<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss"></style>
