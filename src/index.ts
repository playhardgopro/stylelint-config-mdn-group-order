import { getOrder } from './mdn-groups'

export default {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': [
			...getOrder(false)
		]
	}
}
