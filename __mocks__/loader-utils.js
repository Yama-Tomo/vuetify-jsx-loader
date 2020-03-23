const loaderUtils = jest.genMockFromModule('loader-utils')

let options = {}

loaderUtils._setOptions = (arg) => (options = arg)
loaderUtils.getOptions = () => options

module.exports = loaderUtils
