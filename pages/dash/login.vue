<template>
  <div class="flex h-full items-center justify-center">
    <Login />
  </div>
</template>

<script lang="ts" setup>
  defineI18nRoute(false);

  useSeoMeta({
    title: '登录',
  });

  useServerSeoMeta({
    robots: 'index, follow',
  });
</script>
