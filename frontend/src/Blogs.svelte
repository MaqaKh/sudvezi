<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { link } from 'svelte-spa-router';

  let blogs = [];
  let error = '';
  let categories = [];
  let categorySlug = null;
  let categoryNameAz = '';

  function getCategoryFromUrl() {
    // For hash-based routing, e.g. /#/blogs?category=breast-cancer
    const hash = window.location.hash || '';
    const queryIndex = hash.indexOf('?');
    if (queryIndex === -1) return null;
    const queryString = hash.substring(queryIndex + 1);
    const params = new URLSearchParams(queryString);
    return params.get('category');
  }

  async function fetchCategories() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories`);
      categories = res.data;
    } catch (err) {
      // ignore for now
    }
  }

  async function fetchBlogs() {
    categorySlug = getCategoryFromUrl();
    let url = `${import.meta.env.VITE_API_URL}/api/blogs`;
    let params = {};
    if (categorySlug && categories.length > 0) {
      const cat = categories.find(c => c.slug === categorySlug);
      if (cat) {
        params.category = cat.id;
      }
    }
    try {
      const res = await axios.get(url, { params });
      blogs = res.data;
    } catch (err) {
      error = err.message || 'Failed to fetch blogs.';
    }
    // Set categoryNameAz if categorySlug is present
    if (categorySlug && categories.length > 0) {
      const cat = categories.find(c => c.slug === categorySlug);
      categoryNameAz = cat ? cat.name_az : '';
    } else {
      categoryNameAz = '';
    }
  }

  onMount(() => {
    fetchCategories().then(() => fetchBlogs());
    window.addEventListener('popstate', fetchBlogs);
    return () => window.removeEventListener('popstate', fetchBlogs);
  });
</script>

<main>
  <div class="breadcrumb">
    <span>Ana Sayfa</span> <span class="sep">|</span> <span class="active">{categoryNameAz || 'Bloglar'}</span>
  </div>
  <h1 class="page-title">{categoryNameAz || 'Bloglar'}</h1>
  {#if error}
    <p style="color: red">{error}</p>
  {:else}
    <div class="articles">
      {#each blogs as blog}
        <div class="card">
          <img class="card-img" src={blog.cover_image ? '/blogs/' + blog.cover_image.replace(/^\/assets\//, '') : '/placeholder.jpg'} alt={blog.title} />
          <div class="card-date">{blog.created_at}</div>
          <div class="card-title">{blog.title}</div>
          <div class="card-desc">{blog.summary}</div>
          <a class="card-link" href={"/blog/" + blog.slug} use:link>Devamını Oku</a>
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  .breadcrumb {
    margin: 2rem 0 0.5rem 2rem;
    color: #888;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .breadcrumb .active {
    color: #f78fb3;
    font-weight: 500;
  }
  .breadcrumb .sep {
    color: #bbb;
  }
  .page-title {
    margin-left: 2rem;
    margin-bottom: 2rem;
    color: #1a3c6b;
    font-size: 2rem;
    font-weight: 600;
  }
  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 2rem;
    padding: 0 2rem 2rem 2rem;
  }
  .card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px #0001;
    padding: 0 0 1.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    min-height: 370px;
  }
  .card-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .card-date {
    margin: 1rem 0 0.2rem 1rem;
    color: #888;
    font-size: 0.98rem;
    font-weight: 400;
  }
  .card-title {
    margin: 0 0 0.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a3c6b;
  }
  .card-desc {
    margin: 0 1rem 0.5rem 1rem;
    color: #444;
    font-size: 0.98rem;
    flex: 1;
  }
  .card-link {
    margin-left: 1rem;
    color: #f78fb3;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    margin-top: auto;
  }
  .card-link:hover {
    text-decoration: underline;
  }
</style> 