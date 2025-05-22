<script>
  import { onMount } from 'svelte';
  import { wrap } from 'svelte-spa-router/wrap';
  import axios from 'axios';
  import { location } from 'svelte-spa-router';

  let blog = null;
  let error = '';
  let slug = '';

  $: {
    // Extract slug from the current location
    const match = $location.match(/\/blog\/([^/]+)/);
    slug = match ? match[1] : '';
  }

  onMount(async () => {
    if (!slug) return;
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`, { params: { slug } });
      blog = res.data[0];
      if (!blog) error = 'Blog not found';
    } catch (err) {
      error = err.message || 'Failed to fetch blog.';
    }
  });
</script>

<main>
  {#if error}
    <p style="color: red">{error}</p>
  {:else if blog}
    <h1 class="blog-title">{blog.title}</h1>
    {#if blog.cover_image}
      <img class="blog-cover" src={'/blogs/' + blog.cover_image.replace(/^\/assets\//, '')} alt={blog.title} />
    {/if}
    <div class="blog-content">{@html blog.content}</div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  .blog-title {
    margin: 2rem 0 1rem 2rem;
    color: #1a3c6b;
    font-size: 2.2rem;
    font-weight: 700;
  }
  .blog-cover {
    display: block;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px #0002;
  }
  .blog-content {
    margin: 2rem auto;
    max-width: 700px;
    background: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 8px #0001;
    color: #222;
    font-size: 1.1rem;
    line-height: 1.7;
  }
</style> 