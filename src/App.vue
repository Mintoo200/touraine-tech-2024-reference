<script setup lang="ts">
import rawData from './assets/data.json'
import {ref} from "vue";
import ImageCard from "./components/ImageCard.vue";
import type {ImageType} from "@/ImageType";

const data = ref<Array<ImageType>>(rawData)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <ul>
      <ImageCard v-for="entry in data" :key="entry.src" :entry="entry"/>
    </ul>
  </main>

  <footer>

  </footer>
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
  --max-card-width: 20ch;
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--max-card-width));
  list-style: none;
  gap: var(--spacing-unrelated-items);
}
</style>
