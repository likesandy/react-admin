import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import setupMockPlugin from './mock'
const setupPlugins = (isBuild: boolean, env: ViteEnv): PluginOption[] => {
  const plugins: PluginOption[] = []
  plugins.push(react())
  plugins.push(setupMockPlugin(isBuild))
  return plugins
}

export default setupPlugins
