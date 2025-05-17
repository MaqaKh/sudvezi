<script>
const images = [
  'gunel1.jpeg', 'gunel2.jpeg', 'gunel3.jpeg', 'gunel4.jpeg',
  'gunel5.jpeg', 'gunel6.jpeg', 'gunel7.jpeg', 'gunel8.jpeg',
  'gunel9.jpeg', 'gunel10.jpeg', 'gunel11.jpeg', 'gunel12.jpeg',
  'gunel13.jpeg', 'gunel14.jpeg', 'gunel15.jpeg', 'gunel16.jpeg'
];
</script>

<main class="gallery-main">
  <h1>Qalereya</h1>
  <div class="gallery-grid">
    {#each images as img}
      <div class="gallery-item">
        <img src={`/gallery/${img}`} alt={img} loading="lazy" />
      </div>
    {/each}
  </div>
</main>

<style>
.gallery-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem 3rem 1rem;
}
.gallery-main h1 {
  color: #9608aa;
  font-size: 2.1rem;
  margin-bottom: 2.2rem;
  text-align: center;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.gallery-item {
  width: 100%;
  aspect-ratio: 1/1;
  background: #f7fafb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px #0001;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style> 