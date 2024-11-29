<template>
  <UiCustomCard
    class="mt-[30vh] flex flex-col items-center justify-center space-y-10"
  >
    <h1 class="text-center text-2xl font-semibold">登录</h1>
    <form
      class="mx-10 flex flex-col"
      @submit.prevent="handleSubmit"
    >
      <UInput
        v-model="token"
        type="password"
        placeholder="输入你的登录 Token"
        variant="outline"
        class="w-full rounded-md bg-light-background p-6 px-4 py-2 dark:bg-dark-background"
        size="xl"
        required
        padded
      />
      <button
        type="submit"
        class="mx-auto mt-10 rounded-md bg-tiaBlue px-10 py-2 text-light-foreground hover:bg-tiaBlue-dark dark:bg-tiaPink dark:text-dark-foreground dark:hover:bg-tiaPink-dark"
      >
        登录
      </button>
    </form>
  </UiCustomCard>
</template>

<script lang="ts" setup>
  import { toast } from 'vue-sonner';

  const token = ref('');

  const handleSubmit = async () => {
    if (token.value.trim()) {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.info(response);
      if (response.ok) {
        toast.success('登录成功');
        localStorage.setItem('tiaAuthToken', token.value);
        navigateTo('/dash');
      } else {
        toast.error('密码错误');
      }
    }
  };
</script>
