import { defineConfig } from 'unocss';
// import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  attributify: true,
  icons: true,
  // presets: [
  //   presetIcons({}),
  //   // ...other presets
  // ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
  ],
});
