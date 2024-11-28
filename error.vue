<template>
  <NuxtLayout name="default">
    <div
      class="mx-8 mt-[30vh] flex flex-col items-center justify-center text-center"
    >
      <h1 class="mb-4 text-2xl font-bold text-tiaPink">
        {{
          error.statusCode === 404
            ? $t('error.notFound.title')
            : error.statusCode === 401
              ? $t('error.unauthorized.title')
              : $t('error.default.title')
        }}
      </h1>
      <p class="mb-6">
        {{
          error.statusCode === 404
            ? $t('error.notFound.description')
            : error.statusCode === 401
              ? $t('error.unauthorized.description')
              : $t('error.default.description')
        }}
      </p>
      <button
        class="rounded bg-tiaBlue px-4 py-2 text-white hover:bg-tiaBlue-dark"
        @click="$router.push('/')"
      >
        {{ $t('error.backToHome') }}
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app';

  const _props = defineProps({
    error: {
      type: Object as () => NuxtError,
      default: () => ({ statusCode: 500 }),
    },
  });
</script>
