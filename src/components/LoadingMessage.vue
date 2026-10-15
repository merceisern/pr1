
<template>
  <div class="loading">
    <div class="spinner"></div>
    <p>Carregant pel·lícules...</p>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 60px 20px;
  color: #ccc;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 4px solid #444;
  border-top-color: #e50914;
  border-radius: 50%;
  animation: girar 0.8s linear infinite;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}
</style>
