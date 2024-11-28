<template>
  <section
    :class="[
      'relative rounded-2xl border border-gray-100 p-4 text-center text-light-foreground shadow-md transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:border-gray-600 dark:text-dark-foreground dark:shadow-gray-700 dark:hover:shadow-lg md:p-6',
      customClass,
    ]"
    v-bind="attributes"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
  defineProps({
    customClass: {
      type: String,
      default: '',
    },
    attributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  });
</script>
