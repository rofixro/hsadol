import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/hsadol.js',
    format: 'iife',
    name: 'hsadol'
  },
  plugins: [typescript()]
}
