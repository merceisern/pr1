
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home">
    <section class="hero">
      <p class="subtitle">EL TEU ESPAI DE CINEMA</p>

      <h1>El cinema que t'agrada, <span>en un sol lloc.</span></h1>

      <p class="description">
        Descobreix pel·lícules, explora històries i troba la teva pròxima pel·lícula preferida.
      </p>

      <RouterLink to="/catalog" class="button">
        Explorar catàleg
      </RouterLink>
    </section>

    <section class="features">
      <article>
        <h2>Descobreix</h2>
        <p>Explora pel·lícules de diferents gèneres i èpoques.</p>
      </article>

      <article>
        <h2>Organitza</h2>
        <p>Consulta la informació de cada pel·lícula en un mateix lloc.</p>
      </article>

      <article>
        <h2>Gaudeix</h2>
        <p>Troba inspiració per a la teva pròxima sessió de cinema.</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 80vh;
  background: #171717;
  color: white;
}

.hero {
  padding: 100px 8%;
  max-width: 850px;
}

.subtitle {
  color: #e50914;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.1;
  margin: 24px 0;
}

h1 span {
  color: #e50914;
}

.description {
  max-width: 560px;
  color: #bbb;
  font-size: 18px;
  line-height: 1.7;
}

.button {
  display: inline-block;
  margin-top: 24px;
  padding: 14px 24px;
  background: #e50914;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.button:hover {
  background: #b80710;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 20px 8% 70px;
}

.features article {
  padding: 24px;
  background: #222;
  border-radius: 10px;
}

.features h2 {
  color: #e50914;
}

.features p {
  color: #bbb;
  line-height: 1.6;
}

@media (max-width: 650px) {
  .hero {
    padding: 65px 6%;
  }

  .features {
    grid-template-columns: 1fr;
    padding: 20px 6% 50px;
  }
}
</style>
