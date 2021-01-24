# MDN data grouping

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![npm dependencies][npm-deps]][npm-deps]
[![github issues][issues-img]][issues-url]
[![npm license][npm-license]][npm-url]

- [MDN data grouping](#mdn-data-grouping)
	- [Usage](#usage)
	- [Contributing](#contributing)

A [Stylelint][] config that sorts CSS properties based on [MDN-data][]. Also adds a `composes` property to the top of the list.

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

[mdn-data]: https://github.com/mdn/data

[pr]: https://github.com/playhardgopro/stylelint-config-mdn-group-order/pulls
