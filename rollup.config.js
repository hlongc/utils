import babel from '@rollup/plugin-babel';
import path from 'path';

export default {
  input: './src/index.ts',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    babel({
      extensions: ['.ts'],
      exclude: ['node_modules/**', /test.ts$/],
      include: ['./src'],
      babelHelpers: 'bundled',
    }),
  ],
};
