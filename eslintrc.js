module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'it': true,
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            'tab'
        ],
        'quotes': [
            'error',
            'single'
        ],

            'react/prop-types': 0,

        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
    }
};