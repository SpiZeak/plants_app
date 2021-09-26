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
			this.classes.shake = false;
			this.classes.red = false;
			this.classes.blue = false;
			this.message.first = '';

			if (percentage > 100) {
				percentage = 100;
				this.message.first = 'Too much water!';
				this.classes.shake = true;
				this.classes.blue = true;
			}
			else if (percentage <= 10) {
				this.message.first = 'Time to water!';
				this.classes.shake = true;
				this.classes.red = true;
			}
			else if (percentage <= 0) {
				percentage = 0;
			}

			this.meterStyles.transform = `rotate(${percentage / 200}turn)`;
			this.percentage = percentage;

			return percentage;
		}
	},
	props: ['plants', 'classes', 'message']
};
function map(x, in_min, in_max, out_min, out_max) {
	return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
