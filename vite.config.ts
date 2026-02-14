import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueTablerModals',
      fileName: (format) => `vue-tabler-modals.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'pinia', '@tabler/icons-vue'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
          '@tabler/icons-vue': 'TablerIconsVue',
        },
      },
    },
  },
})
