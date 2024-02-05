<script setup lang="ts">
import rawData from './assets/data.json'
import {inject, ref} from "vue";
import ImageCard from "./components/ImageCard.vue";
import type {ImageType} from "@/ImageType";
import AppHeader from "@/AppHeader.vue";
import AppFooter from "@/AppFooter.vue";
import Newsletter from "@/Newsletter.vue";
import ResultTable from "@/ResultTable.vue";

const data = ref<Array<ImageType>>(rawData.data)
const queryParams = inject<URLSearchParams>('queryParams')
const vote = queryParams?.get('vote');
const currentVotedImage = data.value.find(image => image.id === vote);
if (currentVotedImage != undefined) {
  currentVotedImage.votes += 1;
}
</script>

<template>
  <AppHeader/>

  <div>
    <h1>Vote for Pixel!</h1>
    <form>
      <ImageCard v-for="entry in data" :key="entry.id" :entry="entry" />
      <button type="submit"><strong>Vote now!</strong></button>
    </form>

    <div v-if="vote != null" autofocus tabindex="-1">
      <h2>Top 5</h2>
      <ResultTable :data="data" />
    </div>
  </div>

  <Newsletter/>

  <AppFooter/>
</template>

<style>
body {
  display: grid;
}

@media (width > 60ch) {
  body {
  --content-width: minmax(60%, 1fr);
  --right-gutter-min-width: min(30%, 20ch);
  --left-gutter-min-width: 0;
  grid-template-columns:
      [full-width-start left-gutter-start]
      minmax(var(--left-gutter-min-width), 1fr)
      [content-start left-gutter-end]
      var(--content-width)
      [content-end right-gutter-start]
      minmax(var(--right-gutter-min-width), 1fr)
      [full-width-end right-gutter-end];
  column-gap: var(--spacing-unrelated-items);
  }
}

body > .header,
body > .footer {
  grid-column: full-width;
}
body > *,
main > * {
  grid-column: content;
}
body > aside,
main > aside {
  grid-column: right-gutter;
}

form:has(.card) {
  padding: 0;
  margin: 0;
  width: 100%;
  --min-card-width: 30ch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min-card-width)), 1fr));
  list-style: none;
  gap: var(--spacing-unrelated-items);
  justify-items: center;
}
form:has(.card) button[type="submit"] {
  font-size: 1.5rem;
  grid-column: 1 / -1;
}

button {
  padding: .5em 3ch;
  border: none;
  border-radius: 100vmax;
}

div:focus,
div:focus-visible {
  outline: none;
}
*:focus,
*:focus-visible {
  outline: red;
}
</style>
