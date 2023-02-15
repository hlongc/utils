import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import ts from 'rollup-plugin-typescript2';
import { merge } from 'webpack-merge';

const config = {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'ronnieUtils',
  },
  plugins: [
    ts({
      // 指定解析范围，避免把dumi所需要的解析了
      include: ['src/**/*.ts'],
      exclude: /test.ts$/,
    }),
    babel({
      extensions: ['.ts'],
      exclude: ['node_modules/**', /test.ts$/],
      include: ['./src'],
      babelHelpers: 'bundled',
    }),
  ],
};

let [min, es, cjs] = [merge({}, config), merge({}, config), merge({}, config)];

min.output.file = 'dist/index.min.js';
min.plugins.unshift(terser());

es.output.file = 'es/index.js';
es.output.format = 'es';

cjs.output.file = 'lib/index.js';
cjs.output.format = 'cjs';

export default [config, min, es, cjs];
