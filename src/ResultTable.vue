<script setup lang="ts">
import type { ImageType } from '@/ImageType'
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
    Votes:
    <tr :style="`--max-votes: ${topImages[0].votes}; --min-votes: ${topImages[topImages.length - 1].votes};`">
      <td @click="$emit('toot')" v-for="entry in topImages" :style="`--vote-count: ${entry.votes}`" :vote-count="entry.votes">{{ entry.votes }}</td>
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
  --min-votes: 0;
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
  --max-votes-safe: calc(var(--max-votes) + 1);
  --vote-ratio: calc(var(--vote-count) / var(--max-votes-safe));
  --normalized-vote-ratio: calc((var(--vote-count) - var(--min-votes)) / (var(--max-votes) - var(--min-votes)));
  /* FIXME (GAFI 29-01-2024): Fix color */
  /* background: var(--cyan); */
  --color-amplitude: -120deg;
  background: hsl(calc(var(--normalized-vote-ratio) * var(--color-amplitude) + (360deg - var(--color-amplitude))), 100%, 50%);
  --opacity-amplitude: 0.75;
  opacity: calc((var(--normalized-vote-ratio) * var(--opacity-amplitude) + (1 - var(--opacity-amplitude))));
  width: 40%;
  height: calc(var(--vote-ratio) * 40vh);
  display: block;
  border-radius: .5rem .5rem 0 0;
}

th img {
  max-width: 100%;
}
</style>
