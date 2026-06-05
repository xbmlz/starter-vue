import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue', '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: 'types/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),

    // https://devtools.vuejs.org/
    VueDevTools(),
  ],
})
