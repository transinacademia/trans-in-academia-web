<template>
  <div
    class="flex min-h-screen flex-col bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground"
  >
    <UiProgressBar />
    <UiBackToTop />

    <LayoutSiteHeader />
    <main class="container mx-auto max-w-7xl flex-grow px-4 py-8">
      <slot />
    </main>
    <LayoutSiteFooter />
  </div>
</template>
