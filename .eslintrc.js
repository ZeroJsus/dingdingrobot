/*
 * @Author: yangrongxin
 * @Date: 2022-03-11 15:00:13
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-12 22:09:49
 */
/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
