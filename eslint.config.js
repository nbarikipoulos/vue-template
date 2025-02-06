import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'
import vuePug from 'eslint-plugin-vue-pug'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compatPug = new FlatCompat({
  config: vuePug.configs['vue3-recommended'],
})

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...vuetify.configs['flat/recommended'],
  ...compatPug.extends('plugin:vue-pug/vue3-recommended'),
  {
    rules: {
      // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': ['error', { args: 'none' }],
      'vue/attribute-hyphenation': ['error', 'always', { ignore: [] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: false,
        ignores: []
      }]
    }
  }
]
