const RuleSet = require('webpack/lib/RuleSet')

class VuetifyJsxLoaderPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    const rawRules = compiler.options.module.rules
    const { rules } = new RuleSet(rawRules)

    const vueRuleIndex = rules.findIndex(
      rule => rule.use && rule.use.find(u => u.loader === 'vue-loader')
    )
    const vueRule = rules[vueRuleIndex]

    if (!vueRule) {
      throw new Error(
        `[VuetifyJsxLoaderPlugin Error] No matching rule for vue-loader found.\n` +
          `Make sure there is at least one root-level rule that uses vue-loader.`
      )
    }

    vueRule.use.unshift({
      loader: require.resolve('./loader'),
      options: this.options
    })

    compiler.options.module.rules = rules
  }
}

module.exports = VuetifyJsxLoaderPlugin
