/* eslint-env node */

const path = require("path");
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	parserOptions: {
		parser: "@typescript-eslint/parser",
		project: path.resolve(__dirname, "tsconfig.json"),
		ecmaVersion: 2018,
		sourceType: "module",
		extraFileExtensions: [".vue"],
	},
	plugins: ["@typescript-eslint", "vue"],
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",
	},
	env: {
		'vue/setup-compiler-macros': true
	}
};
