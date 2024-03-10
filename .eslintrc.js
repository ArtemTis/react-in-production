// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended",
//         "plugin:react/jsx-runtime",

//         "plugin:@typescript-eslint/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint"
//     ],
//     "rules": {
//         "react/jsx-indent": [2, 4],
//         "react/jsx-indent-props": [2, 4],
//         // indent: [2, 4],
//         "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
//         "import/no-unresolved": "off",
//         "import/prefer-default-export": "off",
//         "no-unusual-vars": "warn",
//         "react/require-default-props": "off",
//         "react/react-in-jsx-scope": "off",
//         "react/jsx-props-no-spreading": "warn",
//         "react/function-component-definition": "off",
//         "no-shadow": "off",
//         "import/extensions": "off",
//         "import/no-extraneous-dependencies": "off",
//         "no-underscore-dangle": "off",

//         // "@typescript-eslint/strict-boolean-expressions": "off",
//         // "@typescript-eslint/prefer-nullish-coalescing": "off",
//         // "react/prop-types": "off",
//         // "@typescript-eslint/no-floating-promises":"off",

//         // "no-floating-promises": true

//         "@typescript-eslint/explicit-function-return-type": "off",
//         "@typescript-eslint/no-var-requires": "off",

//         "@typescript-eslint/strict-boolean-expressions": "off"
//     },
//     globals: {
//         "__IS_DEV__": true
//     }
// }

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        //
        'no-undef': 'off',
        'react/prop-types': 'off',
        'no-return-await': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
