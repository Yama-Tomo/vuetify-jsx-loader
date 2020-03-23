const fs = require('fs')
const path = require('path')

const webpackContext = () => ({
  async: () => {},
  cacheable: () => {},
  callback: jest.fn(),
  addDependency: () => {},
  fs: {
    readFile: (filePath, cb) => {
      cb(null, fs.readFileSync(path.resolve(filePath)))
    },
  },
  rootContext: path.resolve(__dirname),
})

module.exports = {
  webpackContext,
}
