<template>
  <div
    v-if="showButton"
    class="fixed bottom-4 right-4"
  >
    <button
      class="flex h-12 w-12 items-center justify-center rounded-full bg-tiaBlue p-4 text-light-foreground shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-tiaBlue-dark focus:outline-none dark:bg-tiaPink dark:text-dark-foreground dark:hover:bg-tiaPink-dark"
      @click="scrollToTop"
    >
      <Icon
        name="mdi:arrow-up"
        size="24"
        class="mx-auto"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
  const showButton = ref(false);

  const scrollThreshold = 100;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const updateButtonVisibility = () => {
    showButton.value = window.scrollY > scrollThreshold;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateButtonVisibility);
  });
</script>
