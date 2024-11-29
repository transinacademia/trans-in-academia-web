<template>
  <div class="flex h-full items-center justify-center">
    <Login />
  </div>
</template>

<script lang="ts" setup>
  useSeoMeta({
    title: '登录',
  });

  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex nofollow',
      },
    ],
  });
</script>
