// .eslintrc.js
module.exports = {
  root: true,

  // Environment settings
  env: {
    browser: true, // Indicates the code is running in a browser
    node: true, // Indicates the code is running in Node.js
    "jest/globals": true, // Jest global variables
  },

  // ESLint plugins
  plugins: [
    "@typescript-eslint", // TypeScript plugin for ESLint
    "prettier", // Prettier plugin for consistent code style
    "import", // Plugin to support import/export syntax
    "jest", // Jest testing plugin
  ],

  // ESLint extends
  extends: [
    "eslint:recommended", // Recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // Recommended rules from the TypeScript ESLint plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier
    "plugin:import/recommended", // Recommended import plugin rules
    "plugin:import/typescript", // Import plugin rules for TypeScript
    "plugin:jest/recommended", // Jest plugin recommended rules
    "plugin:prettier/recommended",
  ],

  // ESLint settings
  settings: {
    "import/resolver": {
      typescript: {
        // Configuring TypeScript resolver
        project: "./tsconfig.json", // Path to your TypeScript config
      },
    },
  },

  // Patterns to be ignored by ESLint
  ignorePatterns: [
    "node_modules", // Node modules directory
    "build", // Build directory
    ".vscode", // VSCode settings directory
  ],

  // ESLint rules
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "off",
    // Import rules
    "import/no-named-as-default": 0,
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc", // Sort in ascending order
          caseInsensitive: true, // Sorting ignores case sensitivity
        },
      },
    ],

    // TypeScript ESLint rules
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
};
