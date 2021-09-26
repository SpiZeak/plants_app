import { db } from '../../firebase';
import MainLayout from '../../layouts/Main/Main.vue';
import Plant from '../../components/Plant/Plant.vue';
import Gauge from '../../components/Gauge/Gauge.vue';

export default {
	data() {
		return {
			classes: {
				shake: false,
				red: false,
				blue: false,
			},
			message: {
				first: '',
			},
			plants: {
				plant_1: {
					sensor: 0,
					min: 0,
					max: 0
				}
			}
		};
	},
	components: {
		MainLayout,
		Plant,
		Gauge
	},
	firebase: {
		plants: db.ref('plants')
	}
};
