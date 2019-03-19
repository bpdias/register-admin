module.exports = {
    'extends': 'airbnb',
    'rules': {
        'react/jsx-filename-extension': [1, {
            'extensions': ['.js', '.jsx']
        }],
        'react/prefer-stateless-function': 0,
        'react/destructuring-assignment': 0,
        'react/prop-types': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'no-nested-ternary': 0,
        'camelcase': 1,
        'no-underscore-dangle': 0,
        'arrow-body-style': 0,
        'prefer-default-export': 0,
        'global-require': 0,
        'newline-per-chained-call': [
            'error', {
                'ignoreChainWithDepth': 2
            },
        ],
        "jsx-a11y/label-has-associated-control": [2, {
            "required": {
                "some": ["nesting", "id"]
            },
        }],
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "some": ["nesting", "id"]
            },
        }],
    },
    'env': {
        'jest': true,
        'browser': true,
    },
    'parser': 'babel-eslint',
};