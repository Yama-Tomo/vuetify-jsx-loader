const path = require('path')
const loader = require('../../lib/loader')
const helper = require('./helper')
const expectedContent = require('./fixture/content')

jest.mock('loader-utils')

afterEach(() => jest.resetAllMocks())

describe('writtern by tsx', () => {
  describe('SFC', () => {
    describe('simple', () => {
      test('should be insert import statements', async () => {
        const context = {
          ...helper.webpackContext(),
          resourcePath: `${path.resolve(__dirname)}/fixture/ts/tsx.vue`,
        }
        const content = 'dummy source-code'
        const sourceMap = 'dummy source-map'
        await loader.call(context, content, sourceMap)

        const expected = [null, expectedContent(content), sourceMap]
        expect(context.callback.mock.calls[0]).toEqual(expected)
      })
    })

    describe('use decorator', () => {
      test('should be insert import statements', async () => {
        const context = {
          ...helper.webpackContext(),
          resourcePath: `${path.resolve(
            __dirname
          )}/fixture/ts/tsx_with_decorator.vue`,
        }
        const content = 'dummy source-code'
        const sourceMap = 'dummy source-map'
        await loader.call(context, content, sourceMap)

        const expected = [null, expectedContent(content), sourceMap]
        expect(context.callback.mock.calls[0]).toEqual(expected)
      })
    })
  })

  describe('not SFC', () => {
    test('should be insert import statements', async () => {
      const context = {
        ...helper.webpackContext(),
        resourcePath: `${path.resolve(
          __dirname
        )}/fixture/ts/tsx_with_decorator.tsx`,
      }
      const content = 'dummy source-code'
      const sourceMap = 'dummy source-map'
      await loader.call(context, content, sourceMap)

      const expected = [null, expectedContent(content), sourceMap]
      expect(context.callback.mock.calls[0]).toEqual(expected)
    })
  })
})

describe('only logic file (no implements `template section`)', () => {
  test('should be no modify content', async () => {
    const context = {
      ...helper.webpackContext(),
      resourcePath: `${path.resolve(__dirname)}/fixture/ts/ts.vue`,
    }
    const content = 'dummy source-code'
    const sourceMap = 'dummy source-map'
    await loader.call(context, content, sourceMap)

    const expected = [null, content, sourceMap]
    expect(context.callback.mock.calls[0]).toEqual(expected)
  })

  describe('.ts file', () => {
    test('should be no modify content', async () => {
      const context = {
        ...helper.webpackContext(),
        resourcePath: `${path.resolve(__dirname)}/fixture/ts/general.js`,
      }
      const content = 'dummy source-code'
      const sourceMap = 'dummy source-map'
      await loader.call(context, content, sourceMap)

      const expected = [null, content, sourceMap]
      expect(context.callback.mock.calls[0]).toEqual(expected)
    })
  })
})
