<template>
  <header class="dark:shadow-dark-lg relative z-50 w-full shadow-md">
    <!-- Navigation Menu -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        aria-label="$t('aria.link', { title: siteTitle })"
        class="flex items-center gap-2 text-2xl font-bold no-underline transition-all duration-300 hover:text-tiaPink-light"
      >
        <!-- Icon -->
        <NuxtImg
          src="/logo.webp"
          alt="Site Logo"
          class="h-8 w-8 md:h-10 md:w-10"
        />

        <!-- Title -->
        <span class="hidden text-base md:inline lg:text-xl">
          {{ siteTitle }}
        </span>
        <span class="inline md:hidden">
          {{ mobileSiteTitle }}
        </span>
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        aria-label="$t('aria.menu')"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        class="z-50 flex h-12 w-12 items-center justify-center rounded-full bg-light-foreground text-2xl text-light-background shadow-md transition-transform duration-300 hover:scale-110 dark:bg-dark-foreground dark:text-dark-background md:hidden"
        @click="toggleOpen"
      >
        <Icon :name="isOpen ? '' : 'mdi:menu'" />
      </button>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        ref="menuReference"
        class="fixed right-0 top-0 z-50 h-full w-1/2 bg-light-background shadow-lg transition-all duration-300 ease-out dark:bg-dark-background md:hidden"
        :class="
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        "
      >
        <HeaderMenu
          :is-mobile="true"
          ul-class-name="flex flex-col items-start gap-4 p-6"
          @click-handler="toggleOpen"
        />
      </div>

      <!-- Backdrop -->
      <div
        v-if="isOpen"
        class="z-2 fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 dark:bg-opacity-60"
        aria-hidden="true"
        @click="toggleOpen"
      />

      <!-- Desktop Menu -->
      <HeaderMenu
        :is-mobile="false"
        ul-class-name="hidden md:flex md:gap-6"
      />
    </nav>
  </header>
</template>

<script lang="ts" setup>
  import HeaderMenu from './SiteHeaderMenu.vue';

  const siteTitle = 'Trans in Academia!';
  const mobileSiteTitle = 'TiA!';

  const isOpen = ref(false);
  const menuReference = ref<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };
</script>
