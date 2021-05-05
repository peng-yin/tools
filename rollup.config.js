import fs  from 'fs'
// import path  from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const srcFiles = fs.readdirSync('./src/');
// const projectDir = path.resolve(process.cwd(), 'src');

if (!srcFiles) {
    throw new Error('src目录为空');
}

/**
 * code-splitting
 */

// const inputFiles = srcFiles.map(dir => path.resolve(projectDir, dir));

// if (Array.isArray(srcFiles)) {
//   const isTsFile = srcFiles.every(dirName => /.+\.ts/.test(dirName));
//   if (!isTsFile) {
//     throw new Error('src目录文件必须为ts');
//   }
// }

const globals = {
  'lodash/chunk': 'lodash'
}

const extensions = ['.js','.jsx','.ts','.tsx']

const noDeclarationFiles = { compilerOptions: { declaration: false } }

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
)

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

const external = makeExternalPredicate([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
])

export default [
  // CommonJS
  {
    // inputFiles output: { file: dir: 'xx' }
    input: 'src/index.ts',
    output: { file: pkg.main, format: 'cjs', indent: false },
    external,
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions,
        plugins: [
          ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }],
        ],
        babelHelpers: 'runtime'
      }),
      filesize()
    ]
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'es', indent: false },
    external,
    plugins: [
      nodeResolve({
        extensions
      }),
      typescript({ tsconfigOverride: noDeclarationFiles }),
      babel({
        extensions,
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            { version: babelRuntimeVersion, useESModules: true }
          ],
        ],
        babelHelpers: 'runtime'
      }),
      filesize()
    ]
  },

  // UMD Development
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/main.js',
      format: 'umd',
      name: 'main',
      globals,
      indent: false
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions
      }),
      commonjs(),
      typescript({ tsconfigOverride: noDeclarationFiles }),
      babel({
        extensions,
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      filesize()
    ]
  },

  // UMD Production
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/main.min.js',
      format: 'umd',
      name: 'main',
      globals,
      indent: false
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions
      }),
      commonjs(),
      typescript({ tsconfigOverride: noDeclarationFiles }),
      babel({
        extensions,
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        skipPreflightCheck: true
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      }),
      filesize()
    ]
  }
]
