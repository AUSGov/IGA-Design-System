import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'bundle/index.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    uglify(),
    scss({
      processor: () => postcss([autoprefixer()]),
      outputStyle: 'compressed'
    })
  ]
}
