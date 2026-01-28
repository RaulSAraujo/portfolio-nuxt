<script lang="ts" setup>
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value.seo.title,
  description: page.value.seo.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
  </UPage>
</template>
