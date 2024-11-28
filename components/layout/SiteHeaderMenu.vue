<template>
  <ul :class="`gap-4 md:gap-0 lg:gap-4 ${props.ulClassName}`">
    <!-- For each menu item -->
    <li
      v-for="item in menuItems"
      :key="item.href"
      class="menu-item"
    >
      <NuxtLink
        :to="item.href"
        :title="item.label"
        class="menu-link group"
        :aria-label="$t('aria.link', { title: item.label })"
        @click="props.onClickHandler"
      >
        <!-- Icon -->
        <Icon
          :name="item.icon"
          class="menu-icon"
        />
        {{ $t(item.label) }}
      </NuxtLink>

      <!-- Divider -->
      <div
        v-if="props.isMobile"
        class="z-10 h-[1px] w-full bg-gradient-to-r from-gray-300 via-tiaPink to-gray-300 dark:from-gray-600 dark:via-tiaPink-light dark:to-gray-600"
      />
    </li>

    <!-- Language Switch -->
    <li class="menu-item group">
      <button
        class="menu-link"
        aria-label="$t('aria.language')"
        @click="
          toggleLanguage();
          props.onClickHandler && props.onClickHandler();
        "
      >
        <Icon
          :name="'mdi:translate'"
          class="menu-icon"
        />
        {{ locale === 'en' ? '中文' : 'English' }}
      </button>
    </li>

    <!-- Theme Switch -->
    <li
      class="group mx-auto flex flex-col items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:justify-start"
    >
      <button
        class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="$t('aria.theme')"
        @click="
          toggleTheme();
          props.onClickHandler && props.onClickHandler();
        "
      >
        <Icon
          :name="isDarkTheme ? 'mdi:weather-sunny' : 'mdi:weather-night'"
          class="h-6 w-6 text-gray-600 transition-transform duration-300 ease-in-out hover:bg-tiaPink-light group-hover:scale-125 dark:text-gray-300"
        />
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  interface HeaderMenuProperties {
    isMobile: boolean;
    ulClassName?: string;
    onClickHandler?: () => void;
  }

  const props = defineProps<HeaderMenuProperties>();

  interface MenuItem {
    href: string;
    label: string;
    icon: string;
  }

  const menuItems: MenuItem[] = [
    { href: '/', label: 'header.home', icon: 'mdi:home' },
    {
      href: 'https://lib.transinacademia.org',
      label: 'header.library',
      icon: 'mdi:book-open-outline',
    },
    {
      href: 'https://uniguide.transacademic.org',
      label: 'header.uniGuide',
      icon: 'mdi:school-outline',
    },
  ];

  const { locale, setLocale } = useI18n();

  // Switch language
  const toggleLanguage = () => {
    const nextLocale = locale.value === 'en' ? 'zh' : 'en';
    setLocale(nextLocale);
  };

  // Switch color theme
  const isDarkTheme = ref(false);

  // Helper function to initialize theme
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('tia-web-theme');

    if (savedTheme) {
      isDarkTheme.value = savedTheme === 'dark';
    } else {
      isDarkTheme.value = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }

    document.documentElement.classList.toggle('dark', isDarkTheme.value);
  };

  const toggleTheme = (): void => {
    isDarkTheme.value = !isDarkTheme.value;
    document.documentElement.classList.toggle('dark');

    localStorage.setItem('tia-web-theme', isDarkTheme.value ? 'dark' : 'light');
  };

  // Initialize theme
  onMounted(initializeTheme);
</script>

<style scoped>
  .menu-item {
    @apply flex w-full flex-col items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:justify-start lg:w-full;
  }

  .menu-link {
    @apply flex w-full items-center gap-4 px-4 py-3 text-lg font-medium no-underline transition-all duration-300 ease-in-out hover:text-tiaPink-light md:gap-0 lg:gap-4;
  }

  .menu-icon {
    @apply h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-125 sm:h-4 sm:w-4 md:h-6 md:w-6;
  }
</style>
