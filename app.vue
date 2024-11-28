<template>
  <NuxtRouteAnnouncer />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const { t } = useI18n();

  useSeoMeta({
    title: '',
    ogTitle: `${t('nuxtSiteConfig.name')}`,
    ogImage: '/logo.png',
    twitterTitle: `${t('nuxtSiteConfig.name')}`,
    twitterDescription: `${t('nuxtSiteConfig.description')}`,
    twitterImage: '/logo.png',
    twitterCard: 'summary',
  });

  useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96',
      },
    ],
  });
</script>
