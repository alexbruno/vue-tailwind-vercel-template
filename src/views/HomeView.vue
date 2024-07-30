<script setup lang="ts">
import { computed } from 'vue'

const title = 'Title'
const text = 'Lorem ipsum dolor sit amet'
const description = 'Lorem ipsum dolor sit amet'
const meta = computed(() => `${title}: ${description}`)
</script>

<template>
  <div class="home">
    <Teleport to="head">
      <title>vue-project</title>
      <meta name="description" :content="meta" />
    </Teleport>

    <figure class="logo icon-logo text-primary"></figure>
    <h1 class="page-title">Vue Project</h1>
    <p class="page-subtitle">{{ title }}</p>
    <hr class="divider" />
    <small class="text-slate-500">{{ text }}:</small>
  </div>
</template>

<style scoped lang="pcss">
.home {
  @apply flex flex-col items-center justify-center gap-3 text-center max-w-2xl mx-auto;

  .logo {
    @apply text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem];
  }

  .divider {
    @apply w-1/2 my-1.5 dark:opacity-25 transition-all;
  }
}
</style>
