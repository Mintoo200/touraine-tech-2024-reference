<script setup lang="ts">
import type { ImageType } from '../ImageType'
import {computed, ref} from "vue";
import Upvote from './icons/Upvote.vue';
import Downvote from './icons/Downvote.vue';

const props = defineProps<{ entry: ImageType }>()
type Status = 'downvoted' | 'neutral' | 'upvoted';
const status = ref<Status>('neutral')
const {description, src} = props.entry
const votes = computed(() => props.entry.votes + +(status.value === 'upvoted') - +(status.value === 'downvoted'))
function toggle(newStatus: Status): Status {
  return (status.value === newStatus) ? 'neutral' : newStatus;
}
</script>

<template>
  <li class="card">
    <img :src="src" :alt="description">
    <span class="controls">
      <button
          role="switch"
          :aria-checked="status === 'downvoted'"
          @click="() => status = toggle('downvoted')">
        <Downvote aria-label="Downvote" />
      </button>

      <output>{{votes}}</output>

      <button
          role="switch"
          :aria-checked="status === 'upvoted'"
          @click="() => status = toggle('upvoted')">
        <Upvote aria-label="Upvote" />
      </button>
    </span>
  </li>
</template>

<style>
.card {
  width: 100%;
  border: 1px solid var(--color-card-border);
  padding: var(--spacing-related-items);
  position: relative;
  height: fit-content;
}

.card img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 16/9;
}

button:has(svg) {
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

button svg {
  color: inherit;
  height: 100%;
  width: auto;
}

button[aria-checked="true"] svg {
  --scale: 1.5;
  --scale-transition-duration: 200ms;
  --scale-bounce-amplitude: calc(var(--scale) + 0.5);
  --shake-amplitude: 50deg;
  --shake-delay: var(--scale-transition-duration);
  --shake-duration: 300ms;
  /*transition: scale ease-in-out var(--scale-transition-duration)*/;
  animation:
      scale-bounce
        ease-in-out
        var(--scale-transition-duration)
        forwards,
      shake
        linear
        calc(var(--shake-duration) / 2)
        2
        var(--shake-delay);
}
button[aria-checked="true"] svg[aria-label*="vote"] path {
  stroke: black;
  stroke-width: 5px;
  stroke-opacity: 1;
}
button[aria-checked="true"] svg[aria-label="Upvote"] {
  color: var(--color-upvote-active);
}
button[aria-checked="true"] svg[aria-label="Downvote"] {
  color: var(--color-downvote-active);
}

@keyframes shake {
  0%, 100% {
    rotate: 0;
  }

  25% {
    rotate: calc((var(--shake-amplitude) / 2) - var(--shake-amplitude));
  }

  75% {
    rotate: calc(var(--shake-amplitude) - (var(--shake-amplitude) / 2));
  }
}
@keyframes scale-bounce {
  from {
    scale: 1;
  }
  50% {
    scale: var(--scale-bounce-amplitude);
  }
  to {
    scale: var(--scale);
  }
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
