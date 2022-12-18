const path = require('path');

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'import'],
  rules: {
    //
    // eslint 규칙
    //
    'no-use-before-define': 'off',
    //
    // import resolver 규착
    //
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.@(spec|test).@(js|ts)?(x)',
          '**/testUtils.tsx',
          '**/jest.setup.ts',
          '**/webpack.*.js',
          '**/script/*.js',
          '**/mocks/**/*.@(js|ts)?(x)',
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    //
    // Typescript 파일들에 규칙 적용
    //
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
      },
      parserOptions: {
        project: ['./packages/**/tsconfig.json'],
      },
    },
    //
    // 테스트 파일들에 규칙 적용
    //
    {
      files: ['**/*.@(spec|test).@(js|ts)?(x)'],
      plugins: ['jest', 'jest-dom'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      env: {
        'jest/globals': true,
        node: true,
      },
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    //
    // 각 Package에서 tsconfig 규칙 적용
    //
    {
      files: ['packages/common-domains/**/*.ts?(x)', 'packages/common-domains/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-domains/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/extension/**/*.ts?(x)', 'packages/extension/**/*.js?(x)'],
      env: {
        webextensions: true,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/extension/tsconfig.json`),
          },
        },
      },
    },
  ],
};
