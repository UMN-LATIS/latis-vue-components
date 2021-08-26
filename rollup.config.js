import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      vue(),
      image(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extensions: [".css"],
      }),
    ],
  },
];
