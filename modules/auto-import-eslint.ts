// https://github.com/nuxt/eslint-plugin-nuxt/issues/173#issuecomment-1022154872

import { basename, resolve } from 'path';
import type { Import, Unimport } from 'unimport';
import { addTemplate, defineNuxtModule } from '@nuxt/kit';

const autoImportEslint = defineNuxtModule({
  setup(_, nuxt) {
    // console.log('autoImportEslint', _)
    const autoImports: { [key: string]: string[] } = {
      // global imports
      global: [
        '$fetch',
        'useCloneDeep',
        'defineNuxtConfig',
        'definePageMeta',
        'defineI18nConfig',
        'defineEventHandler',
      ],
    };

    nuxt.hook('imports:context', async (context: Unimport) => {
      const imports = await context.getImports();
      imports.forEach((autoImport) => {
        const list = autoImports[autoImport.from] || [];
        const name = autoImport.as ? autoImport.as!.toString() : autoImport.name.toString();
        autoImports[autoImport.from] = list.concat([name]);
      });
    });

    nuxt.hook('imports:extend', (composableImport: Import[]) => {
      // console.log('imports:extend', composableImport)
      autoImports.composables = composableImport.map((autoImport) => {
        if (autoImport.as) return autoImport.as!.toString();
        return autoImport.name.toString();
      });
    });

    nuxt.hook('modules:done', () => {
      // console.log('autoImports', autoImports);

      const outDir = basename(nuxt.options.buildDir);
      const filename = '.eslint.globals.json';
      const fullPath = resolve(outDir, filename);

      function getContents() {
        const globals = {};

        Object.keys(autoImports).forEach((autoImport) => {
          autoImports[autoImport].forEach((imp) => {
            globals[imp] = 'readonly';
          });
        });

        const content = {
          globals,
        };

        return JSON.stringify(content, null, 2);
      }

      addTemplate({
        filename,
        getContents,
        write: true,
      });

      // eslint-disable-next-line no-console
      console.log(`globals file is generated at ${fullPath}`);
    });
  },
});

export default autoImportEslint;
