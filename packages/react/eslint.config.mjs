import pluginReact from "eslint-plugin-react";

export default [
  pluginReact.configs.flat.recommended,
  { extends: "../../eslint.config.mjs" },
];
