<script setup lang="ts">
import type { ImageType } from '@/ImageType'
import CatImage from "@/components/CatImage.vue";

const props = defineProps<{ data: ImageType[] }>();
const topImages = props.data.filter(entry => entry.votes >= 0)
    .sort((firstEntry, secondEntry) => secondEntry.votes - firstEntry.votes)
    .slice(0, 5)
const minVotes = topImages[0].votes;
const maxVotes = topImages[topImages.length - 1].votes;
</script>
<template>
  <table>
    <thead>
    <tr :style="`--max-votes: ${minVotes}; --min-votes: ${maxVotes};`">
      <th v-for="entry in topImages" :style="`--vote-count: ${entry.votes}`">
        <CatImage :entry="entry" />
      </th>
    </tr>
    </thead>
    <tbody>
    Votes:
    <tr :style="`--max-votes: ${minVotes}; --min-votes: ${maxVotes};`">
      <td @click="$emit('toot')" v-for="entry in topImages" :style="`--vote-count: ${entry.votes}`" :vote-count="entry.votes"></td>
    </tr>
    </tbody>
  </table>
</template>
<style>
table {
  --toot: 0deg;
  --test: hsl(var(--toot), 50%, 50%);
  display: flex;
  flex-direction: row-reverse;
}
tbody {
  flex: 1;
}
thead {
  --toot: 180deg;
}
th {
  display: flex;
  align-items: center;
}
thead tr {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
th img {
  width: 10ch;
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
td, th {
  --vote-count: 0;
  --max-votes-safe: calc(var(--max-votes) + 1);
  --vote-ratio: calc(var(--vote-count) / var(--max-votes-safe));
  --normalized-vote-ratio: calc((var(--vote-count) - var(--min-votes)) / (var(--max-votes) - var(--min-votes)));
  --color-amplitude: -120deg;
  --vote-color: hsl(calc(var(--normalized-vote-ratio) * var(--color-amplitude) + (360deg - var(--color-amplitude))), 100%, 50%);
  --opacity-amplitude: 0.75;
  --vote-opacity: calc((var(--normalized-vote-ratio) * var(--opacity-amplitude) + (1 - var(--opacity-amplitude))));
}
th::before {
  font-size: 2rem;
  content: "\025AA ";
  color: var(--vote-color);
  opacity: var(--vote-opacity);
  height: fit-content;
}
td {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-auto-flow: row;
  justify-items: center;
  align-items: end;
}
td::before {
  content: "";
  background: var(--vote-color);
  opacity: var(--vote-opacity);
  width: 40%;
  height: calc(var(--vote-ratio) * 40vh);
  display: block;
  border-radius: .5rem .5rem 0 0;
}
</style>
