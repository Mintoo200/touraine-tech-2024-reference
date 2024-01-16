<script setup lang="ts">
import type { ImageType } from '../ImageType'
import { ref } from "vue";

const props = defineProps<{ entry: ImageType }>()
const votes = ref(props.entry.votes)
const {description, src} = props.entry
</script>

<template>
  <li class="card">
    <img :src="src" :alt="description">
    <button @click="() => votes--">Downvote</button>
    <output>{{votes}}</output>
    <button @click="() => votes++">Upvote</button>
  </li>
</template>

<style>
.card {
  width: 100%;
}

.card img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 16/9;
}
</style>
