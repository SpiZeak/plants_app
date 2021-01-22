<template>
	<figure>
		<div class="gauge overload">
			<div class="meter"></div>
		</div>
		<figcaption>Overload</figcaption>
	</figure>

	<figure>
		<div class="gauge percentage">
			<div class="meter"></div>
			<div class="percentage-container">
				<div class="percentage-indicator">
					0%<br />
					5%<br />
					10%<br />
					15%<br />
					20%<br />
					25%<br />
					30%<br />
					35%<br />
					40%<br />
					45%<br />
					50%<br />
					55%<br />
					60%<br />
					65%<br />
					70%<br />
					75%<br />
					80%<br />
					85%<br />
					90%<br />
					95%<br />
					100%
				</div>
			</div>
		</div>
		<figcaption>w/ Percentage</figcaption>
	</figure>
</template>

<style lang="scss">
body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

/* Using rems to easily scale these gauges */
html {
	font-size: 150%;
}

.gauge {
	display: inline-block;
	position: relative;
	width: 10rem;
	height: 5rem;
	overflow: hidden;
	margin: 2rem;
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

.gauge:hover .meter {
	transform: rotate(0.5turn);
}

/* Overload effect ==================== */
.overload {
	transform-origin: center center;
}
.overload:hover {
	animation: overload 0.15s 0.5s infinite;
}
.overload .meter {
	background: gold;
}
.overload:hover .meter {
	background: orangered;
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

/* Gauge with percentage indicator ============== */
.percentage .meter {
	background: limegreen;
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
	font: bold 1.25rem/1.6 sans-serif;
	color: #333;
	line-height: 2.5rem;
	white-space: pre;
	transition: 1.5s;
	vertical-align: baseline;
	user-select: none;
}

.gauge:hover .percentage-indicator {
	transform: translateY(-50rem);
	color: limegreen;
}

/* Demo code ==================== */

.meter {
	animation: empty 1.5s linear both;
}
@keyframes empty {
	0% {
		transform: rotate(180deg);
	}
}
.overload .meter {
	animation-delay: 0.4s;
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
	flex: 1;
}
figcaption {
	display: block;
	font: 10pt monospace;
	color: #444;
	user-select: none;
}
</style>
