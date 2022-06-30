import { defineConfig } from 'rollup'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  input: 'bundle/index.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    scss({
      processor: () => postcss([autoprefixer()]),
      includePaths: ['../node_modules/']
    })
  ]
})
