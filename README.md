# MDN data grouping

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![npm dependencies][npm-deps]][npm-deps]
[![github issues][issues-img]][issues-url]
[![npm license][npm-license]][npm-url]

- [MDN data grouping](#mdn-data-grouping)
	- [Usage](#usage)
	- [Default order](#default-order)
	- [Customization](#customization)
	- [Contributing](#contributing)

A [Stylelint][] config that sorts CSS properties based on [MDN-data][].

## Usage

1. Add [Stylelint][] and this package to your project:

```bash
npm install --save-dev stylelint stylelint-config-mdn-group-order
```

2. Configure your stylelint configuration file to extend this package:

```js
{
  "extends": "stylelint-config-mdn-group-order",
  "rules": {
	// You can override rules here
  }
}
```

## Default order
```js
[
	'Composes',
	'Compositing and Blending',
	'CSS Animations',
	'CSS Backgrounds and Borders',
	'CSS Basic User Interface',
	'CSS Box Alignment',
	'CSS Box Model',
	'CSS Color',
	'CSS Columns',
	'CSS Containment',
	'CSS Counter Styles',
	'CSS Display',
	'CSS Flexible Box Layout',
	'CSS Fonts',
	'CSS Fragmentation',
	'CSS Generated Content',
	'CSS Grid Layout',
	'CSS Images',
	'CSS Inline',
	'CSS Lists and Counters',
	'CSS Logical Properties',
	'CSS Masking',
	'CSS Miscellaneous',
	'CSS Motion Path',
	'CSS Overflow',
	'CSS Pages',
	'CSS Positioning',
	'CSS Ruby',	
	'CSS Scroll Anchoring',
	'CSS Scroll Snap',
	'CSS Scrollbars',
	'CSS Shapes',
	'CSS Speech',
	'CSS Table',
	'CSS Text Decoration',
	'CSS Text',
	'CSS Transforms',
	'CSS Transitions',
	'CSS Variables',
	'CSS Will Change',
	'CSS Writing Modes',
	'CSSOM View',
	'Filter Effects',
	'MathML',
	'Microsoft Extensions',
	'Mozilla Extensions',
	'Pointer Events',
	'WebKit Extensions'
]
```

## Customization

If you want to customize order of groups, you can use function
```ts
getOrder(forCSSModules: boolean, sortOrder?: string[])
```

1. First of all install [stylelint-order][] plugin
```bash
npm install stylelint-order --save-dev
```
2. Import `getOrder()` from package
```js
const { getOrder } = require('stylelint-config-mdn-group-order/dist/mdn-groups')
```
3. Now you can use this function. 
   For example:

```js
"rules": {
	'order/properties-order': [
		getOrder(true, [
			'CSS Display',
			'CSS Columns',
			'CSS Containment',
			'CSS Color',
			'CSS Counter Styles',
			'CSS Flexible Box Layout'
			]),
		{
			'unspecified': 'bottom',
			'emptyLineBeforeUnspecified': 'always',
		},
	]
}
```
## Contributing

Please, create a [PR][] and describe what you want to add and why :)

[npm-url]: https://www.npmjs.com/package/stylelint-config-mdn-group-order

[npm-img]: https://img.shields.io/npm/v/stylelint-config-mdn-group-order

[npm-dls]: https://img.shields.io/npm/dt/stylelint-config-mdn-group-order

[npm-deps]: https://img.shields.io/david/playhardgopro/stylelint-config-mdn-group-order

[issues-url]: https://github.com/playhardgopro/stylelint-config-mdn-group-order/issues

[issues-img]: https://img.shields.io/github/issues/playhardgopro/stylelint-config-mdn-group-order

[npm-license]: https://img.shields.io/npm/l/stylelint-config-mdn-group-order

[stylelint]: https://github.com/stylelint/stylelint

[stylelint-order]: https://github.com/hudochenkov/stylelint-order

[mdn-data]: https://github.com/mdn/data

[pr]: https://github.com/playhardgopro/stylelint-config-mdn-group-order/pulls
