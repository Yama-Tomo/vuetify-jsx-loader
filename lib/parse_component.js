const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const compiler = require('vue-template-compiler')

function extractContentAndLanguage(extName, rawContent) {
  const component = compiler.parseComponent(rawContent)

  if (extName == '.vue') {
    return {
      component,
      content:
        (!component.template && component.script && component.script.content) ||
        '',
      lang: (component.script && component.script.lang) || 'jsx'
    }
  }

  return {
    component,
    content: rawContent,
    lang: extName.replace('.', '')
  }
}

module.exports = async function(resourcePath, readFile, parserOpts) {
  const rawContent = (await readFile(resourcePath)).toString('utf8')
  const { component, content, lang } = extractContentAndLanguage(
    extName,
    rawContent
  )
  const tags = new Set()
  const attrs = new Set()
  const parserOpt = parserOpts[lang]

  const canParse = content && parserOpt
  if (!canParse) {
    return [component, tags, attrs]
  }

  try {
    const parseResult = parser.parse(content, parserOpt)

    traverse(parseResult, {
      JSXOpeningElement: path => {
        const node = path.get('name').node
        if ('name' in node) {
          tags.add(node.name)
        }

        path.get('attributes').forEach(attr => {
          if ('name' in attr.node && !('namespace' in attr.node.name)) {
            attrs.add(attr.node.name.name)
          }
        })
      }
    })
  } catch (err) {
    /* Ignore compilation errors, they'll be picked up by other loaders */
  }

  return [component, tags, attrs]
}
