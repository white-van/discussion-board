module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: 2019,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "latest",
    },
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "warn",
    "no-undef": "off", // https://github.com/eslint/typescript-eslint-parser/issues/437
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-implicit-coercion": "error",
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],

      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        // @typescript-eslint
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/class-name-casing": [
          "off",
          {
            allowUnderscorePrefix: true,
          },
        ],

        "@typescript-eslint/unbound-method": "off",
        // Without the following, you will get inconsistent behaviour compared to barebone @typescript-eslint
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        // Allow promise to resolve without value (eg. blocking the flow of an execution)
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: false },
        ],
      },
    },
  ],
};
