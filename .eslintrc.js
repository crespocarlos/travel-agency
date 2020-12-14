module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'react',
    'html',
    'prettier',
    'import',
    '@typescript-eslint',
    'react-hooks',
  ],
  settings: {
    'html/indent': '0',
    es6: true,
    react: {
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    google: true,
    shallow: true,
    mount: true,
    context: true,
    expect: true,
    jsdom: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
      },
    ],
    'no-restricted-modules': ['error', 'chai'],
    'no-debugger': 'warn',

    'one-var': ['error', { initialized: 'never' }],
    'no-mixed-operators': 0,
    'no-var': 'error',
    'require-await': 'error',

    'no-param-reassign': 'error',
    'no-unused-expressions': 'error',
    'react/boolean-prop-naming': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-set-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 0,
    'import/first': 'error',
    'import/order': [
      'error',
      {
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // done by the TS compiler
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
      },
    },
  ],
}
