const { getOrder } = require('./dist/mdn-groups')

module.exports = {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': [
			...getOrder(true)
		]
	}
}
