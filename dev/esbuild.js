import {config} from 'dotenv'; config();
import path from 'path';
const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));

import esbuild from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import htmlPlugin from '@chialab/esbuild-plugin-html';
import sassPlugin from 'esbuild-plugin-sass';

// Development
import livereload from 'livereload';
import connect from 'connect';
import serveStatic from 'serve-static';

console.log('DIRNAME', __dirname);
const { PORT } = process.env;
esbuild
  .build({
    assetNames: '[name]',
    entryNames: '[dir]/[name]',
    chunkNames: 'chunks/[name]',
    entryPoints: [
      'dev/index.html'
    ],
    watch: true,
    bundle: true,
    sourcemap: true,
    outdir: 'dev/dist',
    plugins: [
      htmlPlugin(),
      sassPlugin(),
      esbuildSvelte({
        compileOptions: {
          dev: true,
          css: true
        },
        preprocess: sveltePreprocess()
      })
    ]
  })
  .then((result) => {
    const app = connect();
    app.listen(PORT);
    app.use(serveStatic(__dirname + '/dist'));

    const lrServer = livereload.createServer();
    lrServer.watch(__dirname + '/dist');

    console.log('Listening on port ' + PORT);
  })
  .catch((err) => {
    console.error('× Failed', err);
    process.exit(1)
  });