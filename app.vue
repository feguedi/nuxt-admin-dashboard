<template>
  <main class="py-20 px-12 text-center">
    <span class="text-blue text-5xl hover:text-red cursor-default">Hello Nuxt 3</span>

    <br />

    <ClientOnly>
      <span class="i-carbon-car text-4xl inline-block" />
    </ClientOnly>

    <br />

    <button class="btn">Button</button>
  </main>
</template>

<style>
@import '@unocss/reset/tailwind.css';
</style>
