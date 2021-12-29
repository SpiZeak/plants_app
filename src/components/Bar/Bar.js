import { computed } from 'vue'

export default {
	setup(props) {
		const styles = computed(() => {
			const percentage = map(
				props.plants.plant_1.light.sensor,
				props.plants.plant_1.light.max,
				props.plants.plant_1.light.min,
				0,
				100
			)

			return {
				width: `${percentage}%`
			}
		})

		return {
			styles
		}
	},
	props: ['plants']
}
function map(x, in_min, in_max, out_min, out_max) {
	return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
