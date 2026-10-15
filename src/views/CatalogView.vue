
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import LoadingMessage from '../components/LoadingMessage.vue'
import { getMovies, type Movie } from '../services/movies'

const movies = ref<Movie[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    movies.value = await getMovies()
  } catch (err) {
    console.error('Error carregant les pel·lícules:', err)
    error.value = 'No s’han pogut carregar les pel·lícules. Torna-ho a provar més tard.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="catalog">
    <header class="catalog-header">
      <p class="subtitle">CINEBOX</p>
      <h1>El catàleg</h1>
      <p>Descobreix la teva pròxima pel·lícula preferida.</p>
    </header>

    <LoadingMessage v-if="loading" />

    <p v-else-if="error" class="message error">
      {{ error }}
    </p>

    <p v-else-if="movies.length === 0" class="message">
      Encara no hi ha pel·lícules al catàleg.
    </p>

    <section v-else class="movie-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :year="movie.year"
        :genre="movie.genre"
        :poster-url="movie.posterUrl"
      />
    </section>
  </main>
</template>

<style scoped>
.catalog {
  min-height: 80vh;
  padding: 60px 6%;
  background: #171717;
  color: white;
}

.catalog-header {
  margin-bottom: 40px;
}

.subtitle {
  color: #e50914;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  margin: 10px 0;
  font-size: 48px;
}

.catalog-header > p:last-child {
  color: #bbb;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px;
}

.message {
  padding: 30px 0;
  color: #ccc;
}

.error {
  color: #ff7777;
}

@media (max-width: 600px) {
  h1 {
    font-size: 36px;
  }

  .movie-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}
</style>
