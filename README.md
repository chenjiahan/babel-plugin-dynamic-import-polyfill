# babel-plugin-dynamic-import-polyfill

Add `array.iterator` polyfill for webpack dynamic import

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
