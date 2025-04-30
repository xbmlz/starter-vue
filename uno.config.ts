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
})
