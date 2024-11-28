<template>
  <UiCard custom-class="text-center w-full md:flex-1">
    <h3 class="mb-4 text-center text-2xl font-bold md:mb-7">
      {{ $t('contact') }}
    </h3>
    <div class="grid grid-cols-5 gap-2 md:gap-4">
      <NuxtLink
        v-for="(social, index) in socialLinks"
        :key="index"
        :to="social.href"
        target="_blank"
        class="flex flex-col items-center no-underline transition-transform duration-700 hover:scale-105"
      >
        <NuxtImg
          :src="social.icon"
          alt="social.label"
          class="mb-2 h-12 w-12 overflow-hidden rounded-2xl object-cover md:h-16 md:w-16"
          placeholder
        />
        <span class="font-sans text-xs font-semibold sm:text-sm md:text-base">
          {{ social.label }}
        </span>
      </NuxtLink>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
  type SocialLink = {
    href: string;
    label: string;
    icon: string;
  };

  const socialLinks: SocialLink[] = [
    {
      href: 'https://t.me/transacademicorg',
      label: 'Telegram',
      icon: 'https://r2.img.zla.app/2024/11/27/25af29.webp',
    },
    {
      href: 'https://discord.gg/A3exRdrEDp',
      label: 'Discord',
      icon: 'https://r2.img.zla.app/2024/11/27/8f5dd6.webp',
    },
    {
      href: 'https://kazv.moe/users/tia',
      label: 'Fediverse',
      icon: 'https://r2.img.zla.app/2024/11/27/c6879d.webp',
    },
    {
      href: 'https://github.com/transinacademia',
      label: 'GitHub',
      icon: 'https://r2.img.zla.app/2024/11/27/5336b2.webp',
    },
    {
      href: 'https://x.com/transinacademia',
      label: 'X',
      icon: 'https://r2.img.zla.app/2024/11/27/630752.webp',
    },
  ];
</script>
