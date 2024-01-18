<script setup lang="ts">
import rawData from './assets/data.json'
import {ref} from "vue";
import ImageCard from "./components/ImageCard.vue";
import type {ImageType} from "@/ImageType";
import AppHeader from "@/AppHeader.vue";
import AppFooter from "@/AppFooter.vue";
import Newsletter from "@/Newsletter.vue";

const data = ref<Array<ImageType>>(rawData)
</script>

<template>
  <AppHeader/>

  <main>
    <ul>
      <ImageCard v-for="entry in data" :key="entry.src" :entry="entry"/>
    </ul>
  </main>

  <Newsletter/>

  <AppFooter/>
</template>

<style>
body {
  display: grid;
}

@media (width > 60ch) {
  body {
  --content-width: minmax(60%, 1fr);
  --right-gutter-min-width: min(30%, 20ch);
  --left-gutter-min-width: 0;
  grid-template-columns:
      [full-width-start left-gutter-start]
      minmax(var(--left-gutter-min-width), 1fr)
      [content-start left-gutter-end]
      var(--content-width)
      [content-end right-gutter-start]
      minmax(var(--right-gutter-min-width), 1fr)
      [full-width-end right-gutter-end];
  column-gap: var(--spacing-unrelated-items);
  }
}

body > header,
body > footer {
  grid-column: full-width;
}
body > *,
main > * {
  grid-column: content;
}
body > aside,
main > aside {
  grid-column: right-gutter;
}

ul {
  padding: 0;
  margin: 0;
  width: 100%;
  --min-card-width: 30ch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min-card-width)), 1fr));
  list-style: none;
  gap: var(--spacing-unrelated-items);
}
</style>
