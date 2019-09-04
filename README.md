# vuetify-jsx-loader

## automatic imports for jsx and tsx

this library do tree-shaking to component of implemented jsx(tsx) with vuetify

what's about tree-shaking: [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader)

## usage

```bash
npm install --save-dev vuetify-jsx-loader
```

```js
// webpack.config.js

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const VuetifyLoaderJsxPlugin = require('vuetify-jsx-loader')

exports.plugins.push(
  new VuetifyLoaderPlugin(),
  new VuetifyLoaderJsxPlugin(),
)
```

NOTE: this plugin work to only written by jsx(tsx) file. add `VuetifyLoaderPlugin` into webpack plugin if required other files to do

## options

```js
// webpack.config.js

const VuetifyLoaderJsxPlugin = require('vuetify-jsx-loader')

exports.plugins.push(
  new VuetifyLoaderJsxPlugin({
    match() .....,
    attrsMatch() .....,
    parserOpts: {
      jsx: ......,
      tsx: ......,
    }
  })
)
```

- match, attrsMatch
  - same as vuetify-loader option

- parserOpts
  - pass @babel/parser options
    - see also [@babel/parser](https://babeljs.io/docs/en/babel-parser)
  - default:
  ```js
  {
    jsx: {
      sourceType: 'module',
      plugins: ['jsx']
    },
    tsx: {
      sourceType: 'module',
      plugins: ['jsx', 'typescript', 'decorators-legacy', 'classProperties']
    }
  }
  ```


## limitation

- If implemented by not SFC file (.jsx, .tsx)
  1. you need assign the object you want to export as the `component` variable and implement by `Vue.extend`
      - e.g.
      ```js
      // your_component.jsx

      const component = Vue.extend({
        render() {
          return <div>hello world</div>
        }
      })

      export default component
      ```
      see also `example/src/components`

  2. you need to edit webpack configuration to add this loader to jsx, tsx file loader configuration
      - e.g.
      ```js
      // webpack.config.js

      const jsxRule = config.module.rules.find(rule => rule.test.test('.jsx'));
      jsxRule.use.push({ loader: 'vuetify-jsx-loader/lib/loader' })

      const tsxRule = config.module.rules.find(rule => rule.test.test('.tsx'));
      tsxRule.use.push({ loader: 'vuetify-jsx-loader/lib/loader' })
      ```

## license
MIT


