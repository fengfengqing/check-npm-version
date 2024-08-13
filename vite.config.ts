// vite.config.js

import { defineConfig } from 'vite'
import { externalizeDeps } from 'vite-plugin-externalize-deps';


export default defineConfig({
  appType: "custom",
   plugins: [
    externalizeDeps({            // https://github.com/davidmyersdev/vite-plugin-externalize-deps
      deps: false,
      devDeps: true,
      nodeBuiltins: true,
    }),
  ],
  build: {
    minify: false,
    target: 'es2015',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'umd', 'cjs'],
      name: 'check-npm-version',
      fileName: 'index'
    }
  }
  // ...
})