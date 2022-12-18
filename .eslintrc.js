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
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'import', 'jest', 'jest-dom'],
  rules: {
    // eslint 규칙
    'no-use-before-define': 'off',
    // import resolver typescript 규착
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
    jest: {
      version: 'latest',
    },
  },
  overrides: [
    // Typescript 파일들에 규칙 적용
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'no-shadow': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
      },
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
    // 테스트 파일들에 규칙 적용
    {
      files: ['**/*.{spec,test}.ts?(x)'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    // 각 Package에서 tsconfig 규칙 적용
    {
      files: ['packages/app/**/*.ts?(x)', 'packages/app/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/app/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/domains/**/*.ts?(x)', 'packages/domains/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/domains/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/extension/**/*.ts?(x)', 'packages/extension/**/*.js?(x)'],
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
