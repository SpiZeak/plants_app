import { db } from '../../firebase'
import MainLayout from '../../layouts/Main/Main.vue'
import Plant from '../../components/Plant/Plant.vue'
import Gauge from '../../components/Gauge/Gauge.vue'
import Bar from '../../components/Bar/Bar.vue'

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
			plants: {}
		}
	},
	components: {
		MainLayout,
		Plant,
		Gauge,
		Bar
	},
	firebase: {
		plants: db.ref('plants')
	}
}
