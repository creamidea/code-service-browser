/* eslint-disable import/no-extraneous-dependencies */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/code-service.worker.js',
    format: 'iife',
    compact: true,
    plugins: [terser()],
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    replace({
      window: 'undefined',
      delimiters: ['\\b', '\\b(?!\\.)'],
    }),
  ],
};
