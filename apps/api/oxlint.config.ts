// Resources
import { defineConfig } from "oxlint";
import rootConfiguration from "../../oxlint.config.ts";

/** The API linting configuration. */
const configuration = defineConfig({
  env: {
    node: true
  },
  extends: [rootConfiguration],
  overrides: [
    {
      files: ["src/**/*.ts"],
      rules: {
        "eslint/class-methods-use-this": "off",
        "eslint/new-cap": ["error", { capIsNewExceptions: ["Controller", "Get", "Injectable", "Module"] }],
        "eslint/no-void": "off",
        "typescript/consistent-type-imports": "off",
        "typescript/no-extraneous-class": ["error", { allowWithDecorator: true }],
        "typescript/parameter-properties": ["error", { prefer: "parameter-property" }],
        "typescript/prefer-readonly-parameter-types": "off",
        "unicorn/prefer-top-level-await": "off"
      }
    }
  ],
  rules: {
    "typescript/no-explicit-any": "off",
    "typescript/no-floating-promises": "error"
  }
});

export default configuration;
