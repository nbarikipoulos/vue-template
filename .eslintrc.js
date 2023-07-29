module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/recommended',
    'plugin:vuetify/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'vue/attribute-hyphenation': ['error', 'always', { ignore: [] }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false, ignores: []
    }]
  }
}
