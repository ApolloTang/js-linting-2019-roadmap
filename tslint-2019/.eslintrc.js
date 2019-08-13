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
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint/tslint"
    ],
    "rules": {
      "@typescript-eslint/tslint/config": ["warn", {
        "lintFile": "", // path to tslint.json of your project
        "rules": {
          // tslint rules (will be used if `lintFile` is not specified)
        },
        "rulesDirectory": [
          // array of paths to directories with rules, e.g. 'node_modules/tslint/lib/rules' (will be used if `lintFile` is not specified)
        ]
      }],
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error",        // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"],       // https://github.com/eslint/eslint/issues/8226

      "semi": ["error", "never"],
      "quotes": ["error", "single"]
    }
};
