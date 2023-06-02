import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig([
  {
    input: './src/dict.ts',
    output: {
      file: 'dist/scripts/dict.js',
      format: 'iife',
      name: 'run',
    },
    plugins: [
      typescript(),
    ],
  },
  {
    input: './src/localTranslate.ts',
    output: {
      file: 'dist/scripts/localTranslate.js',
      format: 'iife',
      name: 'run',
    },
    plugins: [
      typescript(),
    ],
  },
])
