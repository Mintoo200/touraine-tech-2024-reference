<script setup lang="ts">
import type {ImageType} from '@/ImageType'
import {inject} from "vue";
import CatImage from "@/components/CatImage.vue";

const props = defineProps<{ entry: ImageType }>()
const {description, id} = props.entry
const queryParams = inject<URLSearchParams>('queryParams')
const currentVote = queryParams?.get('vote')
</script>

<template>
  <div class="card">
    <input type="radio" :id="`option-${id}`" name="vote" :value="id" :checked="currentVote === id">
    <label :for="`option-${id}`">
      <CatImage :entry="entry" />
    </label>
  </div>
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
}

.card:has(input[type="radio"]) {
  --scale-transition-duration: 200ms;
  scale: 1;
  transition: scale ease-in-out var(--scale-transition-duration);
}
.card:has(input[type="radio"]):hover,
.card:has(input[type="radio"]:focus-visible) {
  --scale: 1.05;
  scale: var(--scale);
}
.card:has(input[type="radio"]:checked) {
  --scale: 1.1;
  --scale-bounce-amplitude: calc(var(--scale) + 0.1);
  --scale-transition-duration: 200ms;
  --shake-amplitude: 5deg;
  --shake-delay: var(--scale-transition-duration);
  --shake-duration: 300ms;
  transition: none;
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
  border: 2px solid var(--color-upvote-active);
}

.card input[type="radio"] {
  position: absolute;
  appearance: none;
  inset: 0;
  cursor: pointer;
}
.card input[type="radio"]::before {
  content: "";
  display: block;
  left: 0;
  top: 0;
  font-size: 2rem;
}
.card input[type="radio"]:checked::before {
  content: "✅";
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
</style>
