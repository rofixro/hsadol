import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  plugins: [terser()],
  output: {
    name: "_",
    extend: true,
    format: "iife",
    file: "lib/hsadol.js",
  },
};
