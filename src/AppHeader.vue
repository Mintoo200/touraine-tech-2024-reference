<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";
</script>

<template>
  <header>
    <Logo aria-hidden="true" />
    <menu>
      <li><a href="#">About Pixel</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Contact</a></li>
    </menu>
  </header>
</template>

<style>
header {
  border-bottom: 1px solid var(--color-header-separator);
  margin-bottom: var(--spacing-unrelated-items);
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15%;
  padding-block: var(--spacing-related-items);
}

menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-indirectly-related-items);
  align-items: center;
}
menu li > a {
  text-decoration: none;
}
.logo {
  height: 5rem;
  fill: currentColor;
}
</style>
