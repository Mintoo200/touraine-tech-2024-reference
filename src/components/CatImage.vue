<script setup lang="ts">
import rawData from "@/assets/data.json";
import type {ImageType} from "@/ImageType";

const basepath = rawData.meta.basepath
const imageDimensions = {
  height: 100,
  width: 180,
}
const { entry } = defineProps<{ entry: ImageType }>()
const { description, id } = entry;
</script>
<template>
  <img :src="`${basepath}?width=${imageDimensions.width}&height=${imageDimensions.height}&q=${id}`" :alt="description">
</template>
