<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
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
</style>
