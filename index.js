const MDNGroups = require('./MDNGroups')

module.exports = {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': [
			{
				groupName: 'Composes',
				properties: ['composes'],
				emptyLineBefore: 'always'
			},
			...MDNGroups
		]
	}
}
