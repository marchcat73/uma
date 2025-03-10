module.exports = [
  {
    root: true,
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    extends: [
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@next/next/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
    },
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2018,
      // Allows for the use of imports
      sourceType: 'module',
    },
    rules: {
      indent: 'off',
      '@next/next/no-document-import-in-page': 'off',
      // Disable prop-types as we use TypeScript for type checking
      'react/prop-types': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      // "prettier/prettier": ["error"],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        2,
        {
          allow: ['warn', 'error', 'info'],
        },
      ],

      // needed for NextJS's jsx without react import
      'react/react-in-jsx-scope': 'off',
    },
    globals: { React: 'writable' },
  },
];
