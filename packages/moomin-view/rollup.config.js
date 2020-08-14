import typescriptPlugin from "rollup-plugin-typescript2";
import typescript from "typescript";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    // use in frontend projects through npm
    {
      file: pkg.browser,
      format: "es",
    },
    // minified and ready for use through cdn
    {
      file: "./lib/moomin.min.js",
      format: "iife",
      name: "moomin",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
    sourcemaps(),
    typescriptPlugin({
      typescript,
      objectHashIgnoreUnknownHack: true,
    }),
  ],
};
