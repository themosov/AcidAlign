module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "import",
        "jest",
        "testing-library",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        "prettier",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "import/order": ["error", { "newlines-between": "always" }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
