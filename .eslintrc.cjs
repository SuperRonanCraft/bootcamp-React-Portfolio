module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["server/**/*.js", "scripts/**/*.js", "*.config.js"],
      env: { node: true },
    },
    {
      files: ["src/components/ui/button.jsx", "src/components/ui/form.jsx"],
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowExportNames: ["buttonVariants", "useFormField"] },
        ],
      },
    },
  ],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
