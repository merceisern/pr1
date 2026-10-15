
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <AppHeader />

    <RouterView />

    <footer>
      <p>© 2026 CINEBOX · El teu espai de cinema</p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #171717;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

footer {
  padding: 24px;
  background: #111;
  color: #888;
  text-align: center;
  font-size: 14px;
}
</style>
