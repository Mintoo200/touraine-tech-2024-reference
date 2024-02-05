<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";
</script>

<template>
  <div class="header">
    <Logo aria-hidden="true" />
    <div class="liens-header">
      <a href="#">About Pixel</a>
      <a href="#">Shop</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<style>
.header {
  border-bottom: 1px solid var(--color-header-separator);
  margin-bottom: var(--spacing-unrelated-items);
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15%;
  padding-block: var(--spacing-related-items);
}

.liens-header {
  display: flex;
  list-style: none;
  gap: var(--spacing-indirectly-related-items);
  align-items: center;
}
.liens-header a {
  text-decoration: none;
}
.logo {
  height: 5rem;
  fill: currentColor;
}
</style>
