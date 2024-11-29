<template>
  <UiCustomCard class="mx-auto w-full space-y-10 p-10">
    <h1>活动列表</h1>
    <h3 class="mt-10">开发中...</h3>
    <UTable
      :rows="data"
      :columns="columnNames"
      class="text-start"
    />
  </UiCustomCard>
</template>

<script lang="ts" setup>
  useSeoMeta({
    title: '管理后台',
  });

  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex nofollow',
      },
    ],
  });

  const response = await fetch('/api/events');
  const events: TiAEvents[] = await response.json();
  const data = events.map((event: TiAEvents) => ({
    // map event properties to TableRow properties
    // example:
    id: event.id,
    time: new Date(event.time as unknown as string).toLocaleString(),
    name: event.title,
    lang: Array.isArray(event.lang) ? event.lang.map((l) => l).join(', ') : '',
  }));

  const columnNames = [
    { key: 'id', name: 'ID', label: 'ID' },
    { key: 'time', name: 'time', label: '时间' },
    { key: 'name', name: 'name', label: '名称' },
    { key: 'lang', name: 'lang', label: '语言' },
  ];
</script>
