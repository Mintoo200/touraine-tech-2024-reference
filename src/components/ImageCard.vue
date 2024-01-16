<script setup lang="ts">
import type { ImageType } from '../ImageType'
import { ref } from "vue";
import Upvote from './icons/Upvote.vue';
import Downvote from './icons/Downvote.vue';

const props = defineProps<{ entry: ImageType }>()
const votes = ref(props.entry.votes)
const {description, src} = props.entry
</script>

<template>
  <li class="card">
    <img :src="src" :alt="description">
    <span class="controls">
      <button @click="() => votes--"><Downvote aria-label="Downvote" /></button>
      <output>{{votes}}</output>
      <button @click="() => votes++"><Upvote aria-label="Upvote" /></button>
    </span>
  </li>
</template>

<style>
.card {
  width: 100%;
  border: 1px solid var(--color-card-border);
  padding: var(--spacing-related-items);
  position: relative;
}

.card img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.card button {
  color: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  height: 100%;
  width: auto;
  line-height: 1;
  vertical-align: middle;
}

.card button svg {
  color: inherit;
  height: 100%;
  width: auto;
}

.card output {
  font-family: monospace;
  min-width: 4ch;
  display: inline-block;
  text-align: center;
  margin-inline: var(--spacing-related-items);
}

.card .controls {
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--color-controls-background);
  padding-inline: var(--spacing-related-items);
}
</style>
