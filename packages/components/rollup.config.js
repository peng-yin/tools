import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json'

const input = 'src/index.ts'
const name = 'main'

const globals = {
  react: 'React',
}

const deps = Object.keys(pkg.peerDependencies);
const external = (id) => deps.includes(id) || id.includes('@babel/runtime/');

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  extensions: ['.ts', '.tsx'],
  runtimeHelpers: true,
  presets: [
    ['@babel/preset-env', { loose: true }],
    ['@babel/preset-react', { useBuiltIns: true }],
    ["@babel/preset-typescript"],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    ['@babel/plugin-transform-runtime', { useESModules }],
    ['import', { libraryName: 'antd', libraryDirectory: useESModules ? 'es' : 'lib', style: true }],
  ],
})

export default [
  // umd
  {
    input,
    output: {
      file: `dist/main.js`,
      format: 'umd',
      name,
      globals,
      exports: 'named',
      sourcemap: false,
    },
    external,
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      nodeResolve(),
      commonjs(),
      ts({ useTsconfigDeclarationDir: true }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  // min
  {
    input,
    output: {
      file: 'dist/main.min.js',
      format: 'umd',
      name,
      globals,
      exports: 'named',
      sourcemap: false,
    },
    external,
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      nodeResolve(),
      commonjs(),
      ts({ useTsconfigDeclarationDir: true }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  },
  // cjs
  {
    input,
    output: { file: pkg.main, format: 'cjs', exports: 'named' },
    external,
    plugins: [
      babel(getBabelOptions({ useESModules: false })),
      ts({ useTsconfigDeclarationDir: true }),
      filesize()
    ],
  },
  // esm
  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      ts({ useTsconfigDeclarationDir: true }),
      filesize()
    ],
  },
]
