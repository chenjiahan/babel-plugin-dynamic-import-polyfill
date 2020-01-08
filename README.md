# babel-plugin-dynamic-import-polyfill

Add `array.iterator` polyfill for webpack dynamic import

Fix the following issue:

> Dynamic imports are not working in IE10. The following error is shown in the console: "Unhandled promise rejectionTypeError: Target is not iterable". @babel/preset-env is used with core-js@3.

## Example

#### In

```js
import('./foo');
```

#### Out

```js
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator"; // <- Added by plugin

import('./foo');
```

## Installation

```bash
npm install --save-dev babel-plugin-dynamic-import-polyfill
```

## Usage

.babelrc

```json
{
  "plugins": ["babel-plugin-dynamic-import-polyfill"]
}
```

## References

- https://github.com/babel/babel/issues/9872
- https://github.com/babel/babel/issues/9873
- https://github.com/babel/babel/issues/10140
