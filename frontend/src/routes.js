import Home from './Home.svelte';
import Blog from './Blog.svelte';
import Blogs from './Blogs.svelte';
import Contacts from './Contacts.svelte';
import Gallery from './Gallery.svelte';
import About from './About.svelte';

export default {
  '/': Home,
  '/blogs': Blogs,
  '/blog/:slug': Blog,
  '/contacts': Contacts,
  '/gallery': Gallery,
  '/about': About,
}; 