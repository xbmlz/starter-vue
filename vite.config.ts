import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue(),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue', '@vueuse/core'],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: 'types/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://devtools.vuejs.org/
    VueDevTools(),
  ],
})
