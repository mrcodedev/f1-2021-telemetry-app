import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss"
import presetEnv from "postcss-preset-env"

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      copy: [
        { src: "../assets", dest: "assets "},
      ],
      dir: "dist",
      // comment the following line to disable service workers in production
      // serviceWorker: null,
    },
  ],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  plugins: [
    postcss({
      plugins: [
        presetEnv({
          stage: 4,
          features: {
            "nesting-rules": true,
          },
        }),
      ],
    }),
  ],
};

