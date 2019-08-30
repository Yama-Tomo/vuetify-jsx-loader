const isDev = process.env.NODE_ENV !== 'production';
const path = require('path');
const filename = isDev ? 'index' : 'index-[hash]';
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const VuetifyJsxLoaderPlugin = require('vuetify-jsx-loader');

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.entry = './src/index.ts';
    config.output.filename = `${filename}.js`;
    config.output.path = path.resolve(__dirname, './dist');

    config.plugins.push(new VuetifyLoaderPlugin());
    config.plugins.push(new VuetifyJsxLoaderPlugin());

    const jsxRule = config.module.rules.find(rule => rule.test.test('.jsx'));
    jsxRule.use.push({ loader: '../lib/loader' }) // <-- push to array is important. should called vuetify-jsx-loader before babel-loader

    const tsxRule = config.module.rules.find(rule => rule.test.test('.tsx'));
    tsxRule.use.push({ loader: '../lib/loader' }) // <-- push to array is important. should called vuetify-jsx-loader before babel-loader
  },
};
