# rc-phone-keyboard
---

React PhoneKeyboard

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-phone-keyboard.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-phone-keyboard
[travis-image]: https://img.shields.io/travis/pchange/rc-phone-keyboard.svg?style=flat-square
[travis-url]: https://travis-ci.org/pchange/rc-phone-keyboard
[coveralls-image]: https://img.shields.io/coveralls/pchange/rc-phone-keyboard.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/pchange/rc-phone-keyboard?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/pchange/rc-phone-keyboard.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/pchange/rc-phone-keyboard
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-phone-keyboard.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-phone-keyboard

## Screenshot

<img src="https://raw.githubusercontent.com/pchange/rc-phone-keyboard/master/screenshot/keyboard.gif" width="450"/>

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8 + IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


## Install

[![rc-phone-keyboard](https://nodei.co/npm/rc-phone-keyboard.png)](https://npmjs.org/package/rc-phone-keyboard)

## Usage

```js
var PhoneKeyboard = require('rc-phone-keyboard');
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<PhoneKeyboard />, container);
```

## Examples

`npm start` and then go to
[http://localhost:8000/examples](http://localhost:8000/examples)

Online examples: [http://pchange.github.io/rc-phone-keyboard/examples/](http://pchange.github.io/rc-phone-keyboard/examples/)

## API

### Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>''</td>
          <td>components value, if post like '13800138000', if will format to '138-0013-8000'</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function</td>
          <td></td>
          <td>callback when value changed initiative</td>
        </tr>
        <tr>
          <td>className</td>
          <td>string</td>
          <td>''</td>
          <td>additional className at container</td>
        </tr>
    </tbody>
</table>

## Development

```bash
npm install
npm start
```

## Test Case

```bash
npm test
npm run chrome-test
```

## Coverage

```bash
npm run coverage
```

## License

`rc-phone-keyboard` is released under the MIT license.
