const MDNProperties = require('mdn-data/css/properties.json')

const MDNPropertyNames = Object.keys(MDNProperties)

function getGroups () {
	const propertyNames = []

	MDNPropertyNames.forEach(propName => {
		const { groups } = MDNProperties[propName]
		propertyNames.push(...groups)
	})

	const collection = new Set(propertyNames)
	return [...collection]
}

function getOrder () {
	const groups = getGroups()
	const groupsOrder = groups.filter(g => {
		return g !== 'CSS Variables' && g !== 'Mozilla Extensions' && g !== 'WebKit Extensions' && g !== 'Microsoft Extensions'
	})

	const order = groupsOrder.map(groupName => {
		const properties = []
		MDNPropertyNames.forEach(name => {
			if (MDNProperties[name].groups[0] === groupName) {
				properties.push(name)
			}
		})
		return {
			groupName,
			properties,
			emptyLineBefore: 'always',
			noEmptyLineBetween: true
		}
	})
	return order
}

module.exports = getOrder()
