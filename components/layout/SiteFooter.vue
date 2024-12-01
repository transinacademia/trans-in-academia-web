<template>
  <footer class="flex flex-col items-center gap-2 py-5 text-center text-sm">
    <b class="text-lg font-bold text-tiaBlue dark:text-tiaPink"
      >Hoc Iter ad Astra</b
    >

    <!-- CC License -->
    <NuxtLink
      rel="license"
      href="http://creativecommons.org/licenses/by/4.0/"
      class="flex items-center gap-2 no-underline transition-all duration-500 hover:font-bold hover:text-tiaBlue dark:hover:text-tiaPink"
      :aria-label="`${$t('aria.link', { title: 'CC BY 4.0' })}$`"
    >
      <NuxtImg
        class="h-6 w-6"
        alt="CC"
        src="https://r2.img.zla.app/2024/11/27/5c9a78.webp"
      />
      <NuxtImg
        class="h-6 w-6"
        alt="BY"
        src="https://r2.img.zla.app/2024/11/27/7382ae.webp"
      />
      {{ $t('license.before') }}
      CC BY 4.0
      {{ $t('license.after') }}
    </NuxtLink>

    <!-- Copyright -->
    <div>© Trans in Academia! 2023 - {{ new Date().getFullYear() }}</div>
  </footer>
</template>
