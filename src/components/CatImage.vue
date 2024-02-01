<script setup lang="ts">
import rawData from "@/assets/data.json";
import type {ImageType} from "@/ImageType";

const basepath = rawData.meta.basepath
const { entry } = defineProps<{ entry: ImageType }>()
const { description, id } = entry;
</script>
<template>
  <img :src="`${basepath}/${id}`">
</template>
<style>
img {
  object-fit: cover;
  aspect-ratio: 16/9;
}
</style>
