<template>
	<figure>
		<p>Water:</p>
		<div class="gauge percentage" :class="classes">
			<div class="meter" :style="meterStyles"></div>
			<div class="percentage-container">
				<div class="percentage-indicator">{{ calculatePercentage() + '%' }}</div>
			</div>
		</div>
	</figure>
</template>

<script src="./Gauge.js"></script>
<style src="./Gauge.scss" lang="scss" scoped></style>
