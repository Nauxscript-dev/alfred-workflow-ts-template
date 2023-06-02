import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig([
  {
    input: './src/index.ts',
    output: {
      file: 'dist/scripts/index.js',
      format: 'iife',
      name: 'run',
    },
    plugins: [
      typescript(),
    ],
  },
  // if you have more than one script, you need below config to build multiple entries 
  // {
  //   input: '...',
  //   output: {
  //     file: 'dist/scripts/....js',
  //     format: 'iife',
  //     name: 'run',
  //   },
  //   plugins: [
  //     typescript(),
  //   ],
  // },
])
