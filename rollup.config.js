/* eslint-disable import/no-extraneous-dependencies */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'umd',
    name: 'Linter',
    compact: true,
    plugins: [terser()],
  },
  plugins: [nodeResolve(), commonjs(), json()],
};
