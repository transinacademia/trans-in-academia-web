<template>
  <div>
    <div
      class="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-end md:gap-4"
    >
      <div class="flex flex-1 flex-col justify-between">
        <h1 class="mb-6 ml-4 text-tiaBlue">
          {{ $t('nuxtSiteConfig.name') }}
        </h1>
        <UiCustomCard custom-class="md:flex-1 text-start">
          <p>
            {{ $t('nuxtSiteConfig.description') }}
          </p>
        </UiCustomCard>
      </div>

      <HomeSocialLinks />
    </div>
    <HomeEventList />
  </div>
</template>
