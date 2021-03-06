/**
 * ?
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Main - Exports
// -------------------------------------------------------------------------------------------------------------------------------

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "standard"],
  globals: {},
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["import", "node", "promise"],
  root: true,
  rules: {
    // ESLint: Possible Errors - These rules relate to possible syntax or logic errors.
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "warn",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "warn",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "warn",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "warn",
    "use-isnan": "error",
    "valid-jsdoc": [
      "warn",
      {
        requireParamType: false,
        requireReturn: false,
        requireReturnType: false,
      },
    ],
    "valid-typeof": "error",
    // ESLint: Best Practices - These rules relate to better ways of doing things to help avoid problems.
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    complexity: ["error", 40],
    "consistent-return": "warn",
    curly: "warn",
    "default-case": "off",
    "default-case-last": "warn",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "warn",
    eqeqeq: "error",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "max-classes-per-file": ["warn", 5],
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "error",
    "no-return-assign": "error",
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "warn",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "error",
    "no-useless-return": "warn",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "prefer-named-capture-group": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    radix: "error",
    "require-await": "warn",
    "vars-on-top": "warn",
    "wrap-iife": "error",
    yoda: "error",
    // ESLint: Strict Mode - These rules relate to strict mode directives.
    strict: ["error", "safe"],
    // ESLint: Variables - These rules relate to variable declarations.
    "init-declarations": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    // ESLint: Stylistic Issues - These rules relate to style guidelines.
    "array-bracket-newline": "off",
    "array-bracket-spacing": "warn",
    "array-element-newline": "off",
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    camelcase: "off",
    "capitalized-comments": [
      "off",
      "always",
      { ignoreConsecutiveComments: true },
    ],
    "comma-dangle": "warn",
    "comma-spacing": "warn",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "warn",
    "func-names": "warn",
    "func-style": "warn",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "id-denylist": "error",
    "id-length": "warn",
    "id-match": "error",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    // "indent": ["warn", 4, { "SwitchCase": 1 }],
    "jsx-quotes": "error",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": "error",
    "lines-around-comment": "off",
    "lines-between-class-members": "warn",
    "max-depth": ["warn", 5],
    "max-len": ["warn", 180],
    "max-lines": ["warn", 1500],
    "max-lines-per-function": ["warn", 120],
    "max-nested-callbacks": "error",
    "max-params": ["warn", { max: 15 }],
    "max-statements": ["warn", 150],
    "max-statements-per-line": ["warn", { max: 3 }],
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": [
      "warn",
      {
        capIsNewExceptions: [
          "Collection",
          "Count",
          "Create",
          "CreateKey",
          "Database",
          "Databases",
          "Delete",
          "Documents",
          "Get",
          "Lambda",
          "Let",
          "Map",
          "Merge",
          "Paginate",
          "Ref",
          "Replace",
          "Select",
          "Var",
        ],
        properties: false,
      },
    ],
    "new-parens": "error",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "warn",
    "no-negated-condition": "error",
    "no-nested-ternary": "off",
    "no-new-object": "warn",
    "no-plusplus": "off",
    "no-restricted-syntax": "error",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": [
      "warn",
      { allow: ["_id", "__nectisContextTrace__"] },
    ],
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": "off",
    "one-var": ["warn", { var: "never", let: "never", const: "never" }],
    "one-var-declaration-per-line": "warn",
    "operator-assignment": "error",
    "operator-linebreak": "warn",
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": ["warn", "as-needed"],
    quotes: ["warn", "single", { avoidEscape: true }],
    semi: ["warn", "always"],
    "semi-spacing": "warn",
    "semi-style": "error",
    "sort-keys": "warn",
    "sort-vars": "error",
    "space-before-blocks": "warn",
    "space-before-function-paren": [
      "warn",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "error",
    "spaced-comment": "warn",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-regex": "error",
    // ESLint: ECMAScript 6 - These rules relate to ES6, also known as ES2015.
    "arrow-body-style": "warn",
    "arrow-parens": "warn",
    "arrow-spacing": "warn",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "warn",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-exports": "error",
    "no-restricted-imports": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "warn",
    "no-useless-rename": "error",
    "no-var": "warn",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: { array: false, object: false },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": "error",
    "sort-imports": "warn",
    "symbol-description": "error",
    "template-curly-spacing": "warn",
    "yield-star-spacing": "error",
    // Import
    "import/default": "error",
    "import/first": "warn",
    "import/export": "error",
    "import/extensions": ["warn", "never", { json: "always" }],
    "import/named": "error",
    "import/namespace": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
  },
};
