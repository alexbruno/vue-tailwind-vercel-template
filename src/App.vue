<script setup lang="ts">
import { RouterView } from 'vue-router'

const dt = new Date()
const year = dt.getFullYear()
</script>

<template>
  <footer>
    <p>vue-project &copy; {{ year }}</p>
  </footer>

  <main class="content pb-16">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped lang="pcss">
footer {
  @apply text-center text-sm text-slate-500 p-2 mb-4 print:hidden;
}

/* Vue Transition */
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
/* Vue Transition */
</style>
