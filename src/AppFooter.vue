<script setup lang="ts">
import Twitter from "@/components/icons/Twitter.vue";
import GitHub from "@/components/icons/GitHub.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Website from "@/components/icons/Website.vue";
</script>

<template>
  <footer>
    <h2>Cécile Freyd-Foucault</h2>
    <ul>
      <li><a href="https://twitter.com/cecilefreydf"><Twitter /></a></li>
      <li><a href="https://linkedin.com/in/cecile-freydfoucault"><LinkedIn /></a></li>
      <li><a href="https://cecilefreydf.com/"><Website /></a></li>
    </ul>
    <h2>Gauthier Fiorentino</h2>
    <ul>
      <li><a href="https://linkedin.com/in/gauthier-fiorentino"><LinkedIn /></a></li>
      <li><a href="https://github.com/Mintoo200"><GitHub /></a></li>
    </ul>
    <h2>Pixel</h2>
    <ul>
      <li><a href="#"><Twitter /></a></li>
      <li><a href="#"><LinkedIn /></a></li>
      <li><a href="#"><Website /></a></li>
      <li><a href="#">My Project</a></li>
    </ul>
    <p class="copyright">
      <small>
        &copy; 2023 Gauthier Fiorentino et Cecile Freyd-Foucault pour <a href="https://touraine.tech">TouraineTech</a>.
      </small>
    </p>
  </footer>
</template>

<style>
footer {
  text-align: center;
  margin-top: var(--spacing-unrelated-items);
  padding: var(--spacing-related-items);
  border-top: 1px solid var(--color-footer-separator);
  min-height: 5rem;
  display: grid;
  grid-auto-columns: 1fr;
  justify-content: center;
  grid-auto-flow: row;
}
footer > ul:has(> li > :any-link:only-child) {
  margin-bottom: var(--spacing-unrelated-items);
}
@media (width > 100ch) {
  footer {
    grid-template-rows: [title-start copyright-start] auto [title-end links-start] auto [links-end copyright-start] auto [copyright-end];
  }
  footer > h2 {
    grid-row: title;
  }
  footer > ul:has(> li > :any-link:only-child) {
    grid-row: links;
  }
  footer > .copyright {
    /*grid-row: copyright;*/
    /*display: inline-block;*/
    /*grid-column: 1 / -1;*/
  }
}

:any-link {
  color: var(--color-links);
}
:any-link:visited {
  color: var(--color-links-visited);
}
:any-link svg * {
  fill: currentColor;
}
:any-link svg {
  color: var(--color-text);
  max-height: 1rem;
}
ul:has(> li > :any-link:only-child) {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul > li:has(> :any-link:only-child > svg:only-child) {
  display: inline;
  width: fit-content;
  margin-inline: var(--spacing-related-items);
}
</style>
