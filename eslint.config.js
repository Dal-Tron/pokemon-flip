const enforceMockNaming = require("./eslint/rules/enforceMockNaming");
const eslintPluginTS = require("@typescript-eslint/eslint-plugin");
const eslintPluginPrettier = require("eslint-plugin-prettier");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginJest = require("eslint-plugin-jest");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", "build", ".vscode", "coverage"],
    plugins: {
      local: {
        rules: {
          "enforce-mock-naming": enforceMockNaming,
        },
      },
      "@typescript-eslint": eslintPluginTS,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      jest: eslintPluginJest,
    },
    rules: {
      "local/enforce-mock-naming": "error",
      ...eslintPluginTS.configs.recommended.rules,
      ...eslintPluginJest.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5",
          endOfLine: "auto",
        },
      ],
      "no-unused-vars": "off",
      "import/no-named-as-default": 0,
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
];
