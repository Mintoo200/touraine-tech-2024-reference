<script setup lang="ts">
import rawData from './assets/data.json'
import {ref} from "vue";
import ImageCard from "./components/ImageCard.vue";
import type {ImageType} from "@/ImageType";
import AppHeader from "@/AppHeader.vue";
import AppFooter from "@/AppFooter.vue";

const data = ref<Array<ImageType>>(rawData)
</script>

<template>
  <AppHeader/>

  <main>
    <ul>
      <ImageCard v-for="entry in data" :key="entry.src" :entry="entry"/>
    </ul>
  </main>

  <AppFooter/>
</template>

<style>
main {
  display: grid;
  --content-width: 60%;
  grid-template-columns:
      [full-width-start]
      1fr
      [content-start]
      var(--content-width)
      [content-end]
      1fr
      [full-width-end];
}

main > * {
  grid-column: content;
}

ul {
  padding: 0;
  margin: 0;
  width: 100%;
  --max-card-width: 20ch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--max-card-width), 1fr));
  list-style: none;
  gap: var(--spacing-unrelated-items);
}
</style>
