import { goto } from '../../router';

export default {
	props: {
		href: {
			type: String,
			required: true
		}
	},
	computed: {
		isActive() {
			return this.href === this.$root.currentRoute;
		}
	},
	methods: {
		go(event) {
			event.preventDefault();
			goto(this.href, this.$root);
		}
	}
};
