<template>
  <div>
    <div class="mb-8 flex flex-col items-center gap-4 md:flex-row md:items-end">
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

      <SocialLinks />
    </div>
    <EventList />
  </div>
</template>

<script lang="ts" setup>
  import SocialLinks from '~/components/pages/SocialLinks.vue';
  import EventList from '~/components/pages/EventList.vue';
</script>
