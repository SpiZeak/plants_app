export default {
	data() {
		return {
			percentage: 0,
			meterStyles: {}
		};
	},
	methods: {
		calculatePercentage: function () {
			let percentage = map(
				this.plants.plant_1.sensor,
				this.plants.plant_1.min,
				this.plants.plant_1.max,
				0,
				100
			);

			percentage = percentage.toFixed(0);

			this.classes.overload = false;

			if (percentage > 100) {
				percentage = 100;
				this.classes.overload = true;
			} else if (percentage <= 0) {
				percentage = 0;
			}

			this.meterStyles.transform = `rotate(${percentage / 200}turn)`;
			this.percentage = percentage;

			return percentage;
		}
	},
	props: ['plants', 'classes']
};
function map(x, in_min, in_max, out_min, out_max) {
	return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
