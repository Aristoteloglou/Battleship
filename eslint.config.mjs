import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {ignores:[
    "node_modules/",
    "dist/",
    "package-lock.json",
    "webpack.common.js",
    "webpack.prod.js",
    "webpack.dev.js",
    "coverage/",
    "src/tests/",
    ".*.min.js",
    ".*.config.js",
    ".*.config.js.json",
    ]},
{
  files: ["tests/**/*"],
  plugins: ["jest"],
  env: {
    "jest/globals": true  
  }}

];

