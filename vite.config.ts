import { resolve } from 'path'
import { ConfigEnv, loadEnv } from 'vite'
import setupPlugins from './vite/plugins'
import { parseEnv } from './vite/utils'

export default ({ mode, command }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root)) as ViteEnv

  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }
}
