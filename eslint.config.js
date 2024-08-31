// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  reactPlugin.configs.flat.recommended,

  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ["src/components/ui"],
  },
);
