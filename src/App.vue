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

