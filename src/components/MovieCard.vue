
<script setup lang="ts">
defineProps<{
  title: string
  year: number
  genre: string
  posterUrl: string
}>()
</script>

<template>
  <article class="movie-card">
    <img :src="posterUrl" :alt="`Cartell de ${title}`" class="poster" />

    <div class="movie-info">
      <h3>{{ title }}</h3>
      <p>{{ year }} · {{ genre }}</p>
    </div>
  </article>
</template>

<style scoped>
.movie-card {
  overflow: hidden;
  background: #1c1c1c;
  color: white;
  border-radius: 12px;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.poster {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  background: #333;
}

.movie-info {
  padding: 16px;
}

.movie-info h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.movie-info p {
  margin: 0;
  color: #bbb;
  font-size: 14px;
}
</style>
