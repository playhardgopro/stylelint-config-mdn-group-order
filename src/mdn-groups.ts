import MDNCSSProperties from 'mdn-data/css/properties.json'
import { defaultGroupsOrder, defaultGroupsOrderCSSModules } from './default-order'
import { MDNGroup, MDNProperty, Configuration, MDNProperties, MDNGroupCSSModules } from './types'

type CSSPropertyName = keyof typeof MDNCSSProperties | 'composes'

const MDNProperties = MDNCSSProperties as unknown as { [key in CSSPropertyName]: MDNProperty }
const MDNPropertyNames = Object.keys(MDNProperties) as CSSPropertyName[]

export function getOrder(forCSSModules: false, groupsOrder?: MDNGroup[]): Configuration[];
export function getOrder(forCSSModules: true, groupsOrder?: MDNGroupCSSModules[]): Configuration[];
export function getOrder(forCSSModules: boolean, groupsOrder?: string[]): Configuration[] {
	if (groupsOrder === undefined || !groupsOrder.length) {
		groupsOrder = forCSSModules ? defaultGroupsOrderCSSModules : defaultGroupsOrder
	}

	const order: Configuration[] = groupsOrder.map((groupName) => {

		const properties: CSSPropertyName[] = []

		for (const name of MDNPropertyNames) {

			if (forCSSModules && groupName === 'Composes') {
				properties.push('composes')
			}
			if (MDNProperties[name].groups[0] === groupName) {
				properties.push(name)
			}

		}

		return {
			groupName,
			properties,
			emptyLineBefore: 'always',
			noEmptyLineBetween: true
		}
	})
	return order
}
