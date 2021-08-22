import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss"
import presetEnv from "postcss-preset-env"

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      // serviceWorker: null,
    },
  ],
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

