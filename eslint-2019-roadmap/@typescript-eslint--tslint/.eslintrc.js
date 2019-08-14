module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint/tslint"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error",        // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"],       // https://github.com/eslint/eslint/issues/8226

      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "@typescript-eslint/tslint/config": ["warn", {
        "lintFile": "./tslint.json", // path to tslint.json of your project
      }],
    }
};
