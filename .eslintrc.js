module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'import'
    ],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {}, // 让 eslint 能解析 ts 的路径别名
        },
    },
    rules: {
        'quotes': [1, 'single'], // 引号类型 `` "" ""
        'semi': ['error', 'always'],
        'no-console': 0,
        'no-debugger': 'warn',
        'global-require': 0,
        // "indent": [ "error", 4 ],
        'array-bracket-spacing': [2, 'never'],
        'block-scoped-var': 0,
        'camelcase': 2,
        'comma-spacing': [2, { 'before': false, 'after': true }],
        'comma-style': [2, 'last'],
        'complexity': [2, 40],
        'computed-property-spacing': [2, 'never'],
        'default-case': 2,
        'dot-location': [2, 'property'],
        'dot-notation': [2, { 'allowKeywords': true }],
        'eol-last': 2,
        'eqeqeq': [2, 'allow-null'],
        'import/extensions': [
            0,
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never',
                'vue': 'never'
            }
        ],
        'max-len': ['error', { 'code': 160 }],
        'arrow-parens': 'off',
        'no-param-reassign': ['error', { 'props': false }],
        'no-plusplus': 0,
        'linebreak-style': [0, 'error', 'windows'],
        'no-underscore-dangle': [0, { 'allow': ['_place'] }],
        'consistent-return': [0, { 'treatUndefinedAsUnspecified': true }],
        'no-unused-vars': 'off',
        'one-var': ['error', { 'var': 'always', 'let': 'always' }],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'no-prototype-builtins': 'off',
        'no-shadow': 'off',
        'prefer-destructuring': ['error', { 'object': true, 'array': false }],
        'radix': ['error', 'as-needed'],
        'no-case-declarations': 'off',
        'no-nested-ternary': 'off',
        'no-lonely-if': 'off',
        'operator-assignment': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-empty-function': 'off', // 允许空函数
        '@typescript-eslint/ban-ts-comment': 'off', // 允许使用ts-ignore注释代码块，忽略类型检测
        '@typescript-eslint/no-unused-vars': 'off', // 允许声明变量，不使用
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用any来解决类型问题（不推荐）
        '@typescript-eslint/ban-types': 'off', // 允许使用object来代替任何对象的类型（适用范围为变量，不推荐）
        '@typescript-eslint/no-inferrable-types': 'off', // 允许在明确的数据类型前继续添加类型
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许函数参数为any类型（不推荐）
        'vue/multi-word-component-names': 'off',
        'import/named': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-undef': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'import/no-unresolved': 'off',
        'vue/html-indent': ['error', 4],
        'no-return-assign': 'off',
        'prettier/prettier': 'error',
        'import/order': 'off',
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
        'import/no-cycle': 'off',
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        'import/no-relative-packages': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'react/display-name': 'off',
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
    }
};
