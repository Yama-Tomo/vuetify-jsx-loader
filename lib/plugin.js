class VuetifyJsxLoaderPlugin {
  constructor(options) {
    this.options = options
    this.isAppliedRule = false
  }

  apply(compiler) {
    this.updateRule(compiler.options.module.rules)

    if (!this.isAppliedRule) {
      throw new Error(
        `[VuetifyJsxLoaderPlugin Error] No matching rule for vue-loader found.\n` +
          `Make sure there is at least one root-level rule that uses vue-loader.`
      )
    }
  }

  updateRule(rules) {
    rules.forEach((rule) => {
      if (rule.use && Array.isArray(rule.use)) {
        this.updateRule(rule.use)
        return
      }

      if (rule.oneOf && Array.isArray(rule.oneOf)) {
        this.updateRule(rule.oneOf)
        return
      }

      const isVueLoader =
        rule.ident === 'vue-loader-options' ||
        rule.loader === 'vue-loader' ||
        rule.loader.includes('/vue-loader/')

      if (isVueLoader) {
        this.isAppliedRule = true

        rules.unshift({
          loader: require.resolve('./loader'),
          options: this.options,
        })
      }
    })
  }
}

module.exports = VuetifyJsxLoaderPlugin
