<script setup lang="ts">
import type { ImageType } from '../ImageType'
import CatImage from "@/components/CatImage.vue";

const props = defineProps<{ data: ImageType[] }>();
const topImages = props.data.filter(entry => entry.votes >= 0)
    .sort((firstEntry, secondEntry) => secondEntry.votes - firstEntry.votes)
    .slice(0, 5)
</script>
<template>
  <table>
    <thead>
    <tr>
      <th v-for="entry in topImages">
        <CatImage :entry="entry" />
      </th>
    </tr>
    </thead>
    <tbody>
    <tr :style="`--max-votes: ${topImages[0].votes}`">
      <td v-for="entry in topImages" :style="`--vote-count: ${entry.votes}`">{{ entry.votes }}</td>
    </tr>
    </tbody>
  </table>
</template>
<style>
table {
  display: flex;
  flex-direction: column-reverse;
}
tr {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}

tr {
  --max-votes: 0;
}
td {
  --vote-count: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-auto-flow: row;
  justify-items: center;
  align-items: end;
}
td::before {
  content: "";
  /* FIXME (GAFI 29-01-2024): Fix color */
  background: red;
  width: 40%;
  --max-votes-safe: calc(var(--max-votes) + 1);
  height: calc(var(--vote-count) / var(--max-votes-safe) * 40vh);
  display: block;
}
</style>
