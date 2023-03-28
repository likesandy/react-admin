import { viteMockServe } from 'vite-plugin-mock'

const setupMockPlugin = (isBuild: boolean) =>
  viteMockServe({
    mockPath: 'mock',
    localEnabled: !isBuild,
  })

export default setupMockPlugin
