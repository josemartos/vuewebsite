module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        "no-console": 0,
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": 0,
        "vue/html-self-closing": ["error", {
            "html": {
                "normal": "never"
            },
        }]
    }
};
