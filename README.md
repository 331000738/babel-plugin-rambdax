babel-plugin-rambdax [![Build Status](https://travis-ci.org/megawac/babel-plugin-rambdax.svg?branch=master)](https://travis-ci.org/megawac/babel-plugin-rambdax)
==============

This plugin is a transform to remove unused rambdax dependencies, without forcing the user to cherry pick methods manually. This lets you use rambdax naturally (aka as documented) without worrying about bundling parts you're not using.

See also [`babel-plugin-lodash`](https://github.com/megawac/babel-plugin-lodash).

#### Example

Converts

```js
import R, {map} from 'rambdax';

map(R.add(1), [1, 2, 3]);
```

Roughly to 

```js
import add from 'rambdax/src/add';
import map from 'rambdax/src/map';

map(add(1), [1, 2, 3]);
```


#### Limitations

- You must be using ES6 imports (both specifiers and default work) to load rambdax.

#### FAQ

> I receive `TypeError: The plugin "rambdax" didn’t export a Plugin instance`<br>
> or, can I use this plugin with Babel v5?

Babel v5 is no longer supported. Use [v0.1.2](https://github.com/megawac/babel-plugin-rambdax/releases/tag/v0.1.2) for support.

#### Usage

###### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["rambdax"]
}
```

or
```json
{
  "plugins": "rambdax"
}
```

###### Via CLI

```sh
$ babel --plugins rambdax script.js
```

###### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["rambdax"]
});
```
