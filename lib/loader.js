const fs = require('fs')
const path = require('path')
const loaderUtils = require('loader-utils')
const vuetifyMatcher = require('vuetify-loader/lib/matcher/tag')
const vuetifyAttrsMatcher = require('vuetify-loader/lib/matcher/attr')

const rewire = require('rewire')
const vuetifyLoader = rewire(require.resolve('vuetify-loader/lib/loader.js'))
const getMatches = vuetifyLoader.__get__('getMatches')
const install = vuetifyLoader.__get__('install')

const parseComponent = require('./parse_component')

async function readFile(path) {
  return new Promise((resolve, reject) => {
    ;(this.fs || fs).readFile(path, function(err, data) {
      err ? reject(err) : resolve(data)
    })
  })
}

function fillPropertyForBehindThreadLoader(self) {
  const result = Object.assign({}, self)

  if (!result.rootContext) {
    result.rootContext = path.resolve('./')
  }

  return result
}

module.exports = async function(content, sourceMap) {
  this.async()
  this.cacheable()

  const options = {
    match: [],
    attrsMatch: [],
    parserOpts: {
      jsx: {
        sourceType: 'module',
        plugins: ['jsx']
      },
      tsx: {
        sourceType: 'module',
        plugins: ['jsx', 'typescript', 'decorators-legacy', 'classProperties']
      }
    },
    ...loaderUtils.getOptions(this)
  }

  if (!Array.isArray(options.match)) options.match = [options.match]
  if (!Array.isArray(options.attrsMatch))
    options.attrsMatch = [options.attrsMatch]

  options.match.push(vuetifyMatcher)
  options.attrsMatch.push(vuetifyAttrsMatcher)

  if (!this.resourceQuery) {
    this.addDependency(this.resourcePath)

    const [component, tags, attrs] = await parseComponent(
      this.resourcePath,
      readFile.bind(this),
      options.parserOpts
    )

    const context = fillPropertyForBehindThreadLoader(this)

    if (tags.size) {
      content = install.call(
        context,
        'installComponents',
        content,
        getMatches.call(context, 'Tag', tags, options.match, component)
      )
    }

    if (attrs.size) {
      content = install.call(
        context,
        'installDirectives',
        content,
        getMatches.call(context, 'Attr', attrs, options.attrsMatch, component)
      )
    }
  }

  this.callback(null, content, sourceMap)
}
