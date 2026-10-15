
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">CINE<span>BOX</span></RouterLink>

    <nav>
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/catalog">Catàleg</RouterLink>
      <RouterLink to="/about">Sobre el projecte</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 6%;
  background: #111;
  color: white;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;
}

.logo span {
  color: #e50914;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-active {
  color: #e50914;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    gap: 18px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>