<template>
  <div class="fixed left-0 top-0 z-50 w-full">
    <div
      v-if="progress > 0"
      class="h-0.5"
    >
      <div
        class="h-full bg-tiaBlue transition-all duration-700 ease-out dark:bg-tiaPink dark:bg-opacity-80"
        :style="{ width: progress + '%' }"
      />
    </div>
  </div>
</template>

<script setup>
  // Progress state
  const progress = ref(0);

  const updateProgress = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    progress.value = (scrollPosition / totalHeight) * 100;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateProgress);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateProgress);
  });
</script>
