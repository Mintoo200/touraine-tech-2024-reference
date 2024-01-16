<script setup lang="ts">
import type { ImageType } from '../ImageType'
import { ref } from "vue";

const props = defineProps<{ entry: ImageType }>()
const votes = ref(props.entry.votes)
const {description, src} = props.entry
</script>

<template>
  <li>
    <img :src="src" :alt="description">
    <button @click="() => votes--">Downvote</button>
    <output>{{votes}}</output>
    <button @click="() => votes++">Upvote</button>
  </li>
</template>
