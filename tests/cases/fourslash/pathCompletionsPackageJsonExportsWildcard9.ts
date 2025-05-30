/// <reference path="fourslash.ts" />

// @module: node18
// @allowJs: true
// @maxNodeModuleJsDepth: 1

// @Filename: /node_modules/foo/package.json
//// {
////   "name": "foo",
////   "exports": {
////     "./*": "./dist/*.js"
////   }
//// }

// @Filename: /node_modules/foo/dist/blah.js
//// export const blah = 0;

// @Filename: /index.mts
//// import { } from "foo//**/";

verify.completions({
  marker: "",
  isNewIdentifierLocation: true,
  exact: [
    { name: "blah", kind: "script", kindModifiers: "" },
  ]
});
