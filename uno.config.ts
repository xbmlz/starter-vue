import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetAttributify(),
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind3(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: () => `
      .el-button {
        background-color: var(--el-button-bg-color, var(--el-color-white))
      }
    `,
    },
  ],
})
