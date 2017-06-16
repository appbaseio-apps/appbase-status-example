module.exports = {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "no-tabs": 0,
        "one-var": 0,
        "max-len": 0,
        "func-names": 0,
        "no-multi-assign": 0,
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "newline-per-chained-call": 0,
        "class-methods-use-this": 0,
        "max-lines": ["error", 300],
        "indent": [2, "tab", { "SwitchCase": 1 }],
        "quotes": ["error", "double"],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "comma-dangle": ["error", "never"],
        "object-curly-spacing": [2, "always"],
        // linebreak-style: ["error", "windows"],
        "react/prop-types":0,
        "react/require-default-props": 0,
        "react/require-extension": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-boolean-value": 0,
        "react/forbid-prop-types": 1,
        "react/react-in-jsx-scope": 2,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "plugins": [
        "react"
    ]
}