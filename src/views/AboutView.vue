
<template>
  <main class="about">
    <section class="content">
      <p class="subtitle">CONEIX CINEBOX</p>

      <h1>El cinema és més que mirar una pantalla.</h1>

      <p class="intro">
        CINEBOX és un projecte web pensat per descobrir i consultar
        pel·lícules d'una manera senzilla, visual i intuïtiva.
      </p>

      <section class="info">
        <article>
          <h2>El projecte</h2>
          <p>
            Hem creat un espai digital per reunir informació de pel·lícules
            en un catàleg fàcil de navegar.
          </p>
        </article>

        <article>
          <h2>La tecnologia</h2>
          <p>
            L'aplicació està desenvolupada amb Vue 3 i TypeScript.
            Utilitza Vue Router per navegar entre pàgines i Firebase
            Firestore per consultar les dades.
          </p>
        </article>

        <article>
          <h2>L'objectiu</h2>
          <p>
            Oferir una experiència clara i agradable per explorar
            pel·lícules des de diferents dispositius.
          </p>
        </article>
      </section>
    </section>
  </main>
</template>

<style scoped>
.about {
  min-height: 80vh;
  padding: 70px 8%;
  background: #171717;
  color: white;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

.subtitle {
  color: #e50914;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  max-width: 750px;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.15;
  margin: 20px 0;
}

.intro {
  max-width: 700px;
  color: #bbb;
  font-size: 18px;
  line-height: 1.8;
}

.info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 55px;
}

.info article {
  padding: 25px;
  background: #222;
  border-radius: 10px;
}

.info h2 {
  color: #e50914;
}

.info p {
  color: #bbb;
  line-height: 1.7;
}

@media (max-width: 700px) {
  .info {
    grid-template-columns: 1fr;
  }
}
</style>
