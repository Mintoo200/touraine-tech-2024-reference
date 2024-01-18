<template>
  <aside class="card newsletter">
    <h2>Newsletter</h2>
    <form action="/">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
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
label {
  display: block;
}
label::after {
  content: ": "
}
</style>
