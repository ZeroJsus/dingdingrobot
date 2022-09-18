/*
 * @Description: rollup配置文件
 * @Author: yangrongxin
 * @Date: 2022-03-14 16:27:28
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-14 17:22:09
 */

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import {
  uglify
} from 'rollup-plugin-uglify'

export default {
  input: './index.ts',
  // external,
  // plugins,

  // // 额外选项
  // onwarn,

  // // danger zone
  // acorn,
  // context,
  // moduleContext,
  // legacy

  output: { // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: './dist/index.js', // 必须
    format: 'cjs', // 必须
    // name,
    // globals,

    // 额外选项
    // paths,
    // banner,
    // footer,
    // intro,
    // outro,
    sourcemap: true
    // sourcemapFile,
    // interop,

    // // 高危选项
    // exports,
    // amd,
    // indent
    // strict
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    typescript(),
    uglify()
  ]
}
