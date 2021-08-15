import esbuild from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outdir: './dist',
    plugins: [
      esbuildSvelte({
        preprocess: sveltePreprocess()
      })
    ]
  })
  .catch(() => process.exit(1));
