<template>
  <div>
    <div
      v-if="loading"
      class="grid flex-shrink flex-grow auto-rows-min grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <UiCard
        v-for="index in 6"
        :key="'loading-' + index"
        class="w-full text-start"
      >
        <!-- Thumbnail Placeholder -->
        <div class="mb-4 h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-800" />

        <!-- Title Placeholder -->
        <div class="mb-4">
          <div class="h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        <!-- Links Placeholder -->
        <div class="flex flex-wrap justify-center gap-2">
          <div class="h-6 w-24 rounded bg-gray-200 dark:bg-gray-800" />
          <div class="h-6 w-24 rounded bg-gray-200 dark:bg-gray-800" />
        </div>

        <!-- Date / Time Placeholder -->
        <div class="mt-4 h-4 w-32 rounded bg-gray-200 dark:bg-gray-800" />

        <!-- Content Placeholder -->
        <div
          class="event-content mt-4 h-6 w-full rounded bg-gray-200 dark:bg-gray-800"
        />
      </UiCard>
    </div>
    <div
      v-else
      class="grid flex-shrink flex-grow auto-rows-min grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <UiCard
        v-for="event in events"
        :key="event.id"
        class="w-full text-start"
      >
        <!-- Thumbnail -->
        <NuxtImg
          :src="event.image"
          :alt="event.title"
          class="mb-4 w-full rounded-lg object-cover"
          placeholder
        />

        <!-- Title / Available Languages -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold">{{ event.title }}</h2>
          <div class="mt-2 flex flex-wrap justify-center gap-2">
            <span
              v-for="lang in event.lang"
              :key="lang"
              class="rounded bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700"
            >
              {{ lang }}
            </span>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-2">
          <NuxtLink
            v-for="link in event.links"
            :key="link.label"
            :to="link.url"
            target="_blank"
            class="rounded bg-tiaBlue px-4 py-2 text-white no-underline transition-transform duration-700 hover:scale-105 hover:bg-tiaBlue-dark dark:bg-tiaPink dark:hover:bg-tiaPink-dark"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Date / Time -->
        <div class="mt-4 text-sm">
          {{ formatDate(event.time) }}
        </div>

        <!-- Content -->
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="event-content mt-4 text-wrap transition-all duration-700"
          :class="{
            'line-clamp-6': !event.showFullText,
            'line-clamp-none': event.showFullText,
          }"
          v-html="event.content"
        />

        <!-- Show Full Text Button -->
        <button
          v-if="event.showMoreButtonVisible"
          class="mt-4 font-bold text-tiaBlue transition-transform duration-700 hover:scale-105 hover:underline"
          @click="event.showFullText = !event.showFullText"
        >
          {{ event.showFullText ? '收起' : '显示全文' }}
          <Icon
            v-if="event.showFullText"
            name="heroicons:chevron-up"
          />
          <Icon
            v-else
            name="heroicons:chevron-down"
          />
        </button>
      </UiCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const events = ref<TiAEventCard[]>([]);
  const loading = ref(true);

  const formatDate = (time: string) => new Date(time).toLocaleString();

  const checkIfClamped = (element: HTMLElement) =>
    element.scrollHeight > element.clientHeight;

  onMounted(async () => {
    const response = await fetch('/api/events');
    const data = (await response.json()) as TiAEvents;

    // Add showFullText property to each event
    events.value = Object.entries(data).map(([id, event]) => ({
      id,
      ...event,
      showFullText: false,
      showMoreButtonVisible: false,
    }));

    loading.value = false;

    // After the component is mounted, check if the content is clamped
    await nextTick(() => {
      const contentElements = document.querySelectorAll('.event-content');

      events.value.forEach((_, index) => {
        const contentElement = contentElements[index] as HTMLElement;

        if (contentElement && checkIfClamped(contentElement)) {
          events.value[index].showMoreButtonVisible = true; // Show the button if clamped
        }
      });
    });
  });
</script>

<style>
  @import '~/assets/css/event-content.css';
</style>
