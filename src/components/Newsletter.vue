<template>
  <aside class="card newsletter">
    <h2>Newsletter</h2>
    <form action="/">
      <input type="email" name="email" placeholder="Email">
      <button>Subscribe!</button>
    </form>
  </aside>
</template>

<style>
.newsletter {
  text-align: center;
}
.newsletter > * {
  width: 100%;
}
.newsletter,
.newsletter form {
  display: grid;
  justify-content: center;
  justify-items: center;
}
label:not(:has(> img:only-child))::after {
  content: ": "
}
button {
  width: fit-content;
}
h2 {
  margin-top: 0;
  margin-bottom: var(--spacing-related-items);
}
</style>
