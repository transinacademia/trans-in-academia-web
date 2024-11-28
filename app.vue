<template>
  <div
    class="flex min-h-screen flex-col bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground"
  >
    <NuxtRouteAnnouncer />

    <UiProgressBar />
    <UiBackToTop />

    <SiteHeader />
    <main class="container mx-auto max-w-7xl flex-grow px-4 py-8">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
  import SiteHeader from '~/components/layout/SiteHeader.vue';
  import SiteFooter from '~/components/layout/SiteFooter.vue';

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
