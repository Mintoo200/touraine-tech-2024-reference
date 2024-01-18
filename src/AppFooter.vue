<template>
  <footer>
    &copy; 2023 Gauthier Fiorentino et Cecile Freyd-Foucault pour <a href="https://touraine.tech">TouraineTech</a>.
  </footer>
</template>

<style>
footer {
  text-align: center;
  margin-top: var(--spacing-unrelated-items);
  padding: var(--spacing-related-items);
  border-top: 1px solid var(--color-footer-separator);
  min-height: 5rem;
}

:any-link {
  color: var(--color-links);
}
:any-link:visited {
  color: var(--color-links-visited);
}
</style>
