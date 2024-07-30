import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

const root = process.cwd()

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      root,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
    },
  }),
)
