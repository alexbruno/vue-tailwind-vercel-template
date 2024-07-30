<script setup lang="ts">
const page = {
  title: 'Title',
  description: 'Description'
}
</script>

<template>
  <article class="about">
    <Teleport to="head">
      <title>{{ page.title }} : vue-project</title>
      <meta name="description" :content="page.description" />
    </Teleport>

    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </article>
</template>

<style lang="pcss" scoped>
</style>
