<script>
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes.js';
  import { link } from 'svelte-spa-router';
  import axios from 'axios';

  let blogs = [];
  let error = '';
  let categories = [];

  // Dropdown state
  let showGunelMenu = false;
  let showHaqqindaSubmenu = false;

  // Fetch categories for navbar
  onMount(async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories`);
      categories = res.data;
    } catch (err) {
      error = err.message || 'Failed to fetch categories.';
    }
  });
</script>

<div class="header-nav-wrapper">
  <header>
    <div class="header-top">
      <div class="header-left">
        <div class="logo">
          <img src="/gunel.png" alt="Prof. Dr. Günel Məmmədova" height="100" />
            <div class="logo-text">
              <div class="brand">Prof. Dr. <b>Günel Məmmədova</b></div>
              <div class="subtitle">Genel Cerrahi Uzmanı</div>
            </div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-info">
          <div>
            <b>Ünvan</b><br />Akademik Həsən Əliyev küçəsi 38, AZ1078 Nəsimi / Bakı (Ege Hospital)
          </div>
  <div>
            <b>Telefon</b><br />(+994) (50) 3858﻿635
          </div>
        </div>
        <div class="socials">
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" /></a>
        </div>
      </div>
    </div>
  </header>
  <nav>
    <ul>
      <li><a href="/">Ana Səyfə</a></li>
      <li><a href="/about" use:link>Günel Məmmədova</a></li>
      {#each categories as category}
        <li><a href={`/blogs?category=${encodeURIComponent(category.slug)}`} use:link>{category.name_az}</a></li>
      {/each}
      <li><a href="/blogs" use:link>Blog</a></li>
      <li><a href="/gallery" use:link>Qalereya</a></li>
      <li><a href="/contacts" use:link>Əlagə</a></li>
    </ul>
  </nav>
</div>

<Router {routes} let:Component>
  <svelte:component this={Component} />
</Router>

<footer class="site-footer">
  <div class="footer-main">
    <div class="footer-col about">
      <img src="/gunel.png" alt="Prof. Dr. Günel Məmmədova" height="60" />
      <p>Prof. Dr. Günel Məmmədova, Memorial Şişli ve Memorial Ataşehir'de Meme ve Endokrin Cerrahisi konusunda hizmet vermektedir....</p>
      <a class="footer-link" href="#">Devamını Oku</a>
    </div>
    <div class="footer-col contact">
      <div class="footer-title">Bize Ulaşın</div>
      <div class="footer-socials">
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" /></a>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" alt="Spotify" /></a>
      </div>
      <div class="footer-contact-item"><span>📞</span> <a href="tel:+902124447888">+(+994) (50) 3858﻿635</a></div>
      <div class="footer-contact-item"><span>✉️</span> <a href="mailto:bcitgez@yahoo.com">info@sudvezi.az</a></div>
      <div class="footer-contact-item"><span>📍</span> Akademik Həsən Əliyev küçəsi 38, AZ1078 Nəsimi / Bakı (Ege Hospital)</div>
    </div>
    <div class="footer-col sitemap">
      <div class="footer-title">Sayt xəritəsi</div>
      <ul>
        <li><a href="/" use:link>Ana Səyfə</a></li>
        <li><a href="/about" use:link>Haqqımda</a></li>
        <li><a href="/gallery" use:link>Qalereya</a></li>
        <li><a href="/videos" use:link>Videolar</a></li>
        <li><a href="/contacts" use:link>Əlaqə</a></li>
      </ul>
    </div>
    <div class="footer-col services">
      <div class="footer-title">Hizmetlerimiz</div>
      <ul>
        <li><a href="#">Döş Xərçəngi Cərrahiyyəsi</a></li>
        <li><a href="#">Tiroid Cərrahiyyəsi</a></li>
        <li><a href="#">Böyrəküstü vəzi Cərrahiyyəsi</a></li>
        <li><a href="#">Paratiroid Cərrahiyyəsi</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-disclaimer">
      Bu sitede yer alan içeriklerin her biri bilgilendirme amacı ile hazırlanmıştır. Sitede anlatılan hiçbir tedavi yöntemini doktor kontrolü dışında uygulamayınız. Aksi takdirde doğacak herhangi bir problemden hiçbir şekilde site yönetimi ve Prof. Dr. Günel Məmmədova sorumlu değildir.
    </div>
    <div class="footer-copyright">
      Copyright © 2022 Prof. Dr. Günel Məmmədova Tüm Hakları Saklıdır, izinsiz kopyalanamaz.
    </div>
  </div>
</footer>

<style>
  :global(html), :global(body) {
    margin: 0;
    background: #f7fafb;
    max-width: 100vw;
    overflow-x: hidden;
  }
  main {
    background: #f7fafb;
    min-height: 100vh;
  }
  :root {
    --header-height: 120px;
  }
  .header-nav-wrapper {
    overflow-x: hidden;
  }
  header {
    background: #fff;
    padding-bottom: 0.5rem;
    width: 100%;
    margin: 0 auto 0 auto;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 8px #0001;
    min-height: var(--header-height);
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.2rem 2.5rem 0.5rem 2.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .header-left {
    display: flex;
    align-items: flex-start;
    flex: 1 1 0;
    min-width: 320px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .logo img {
    display: block;
    height: 100px;
  }
  .logo-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .brand {
    font-size: 1.3rem;
    font-weight: bold;
    color: #1a3c6b;
  }
  .subtitle {
    font-size: 1rem;
    color: #666;
  }
  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.7rem;
    min-width: 350px;
  }
  .header-info {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .header-info > div {
    font-size: 0.95rem;
    color: #1a3c6b;
    min-width: 120px;
    text-align: center;
  }
  .header-info > div b {
    font-weight: bold;
    color: #1a3c6b;
  }
  .socials {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 0.3rem;
  }
  .socials img {
    width: 14px;
    height: 14px;
    transition: filter 0.2s;
    border-radius: 6px;
    padding: 3px;
  }
  .socials img:hover {
    filter: none;
  }
  nav {
    background: #9608aa;
    margin-top: 0;
    border-radius: 0 0 8px 8px;
    overflow-x: visible;
    position: sticky;
    top: var(--header-height);
    z-index: 1000;
    box-shadow: 0 2px 8px #0002;
    width: 100%;
    left: 0;
  }
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
    align-items: stretch;
    white-space: nowrap;
    overflow-x: visible;
    min-height: 3.9em;
    width: 100%;
  }
  nav li {
    flex: 1 1 0;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.98rem;
    transition: text-decoration 0.2s, background 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    white-space: nowrap;
    height: 100%;
    padding: 0 1.1em;
    justify-content: center;
    width: 100%;
  }
  nav a:hover {
    text-decoration: none;
    background: #fff;
    color: #1a3c6b;
  }
  nav li:last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
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
  .lang-switcher {
    position: fixed;
    bottom: 24px;
    right: 32px;
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 2px 8px #0002;
    padding: 6px 16px;
    display: flex;
    gap: 8px;
    align-items: center;
    z-index: 100;
  }
  .search-icon {
    display: inline-block;
    vertical-align: middle;
    background: #fff3;
    border-radius: 50%;
    padding: 2px;
    margin-bottom: 2px;
  }
  .site-footer {
    background: #9608aa;
    color: #fff;
    margin-top: 3rem;
    padding-top: 2.5rem;
    font-size: 1.08rem;
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    box-shadow: 0 -2px 8px #0002;
  }
  .footer-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem 2.5rem 2rem;
    gap: 2rem;
  }
  .footer-col {
    flex: 1 1 220px;
    min-width: 220px;
    max-width: 340px;
    margin-bottom: 1.5rem;
  }
  .footer-col.about img {
    margin-bottom: 1rem;
  }
  .footer-col.about p {
    color: #e3f2fd;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }
  .footer-link {
    color: #fff;
    font-weight: 500;
    text-decoration: underline;
    font-size: 1.08rem;
  }
  .footer-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
    text-align: left;
  }
  .footer-socials {
    display: flex;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
  .footer-socials img {
    width: 24px;
    height: 24px;
    transition: background 0.2s;
  }
  .footer-socials img:hover {
    background: #fff;
  }
  .footer-contact-item {
    margin-bottom: 0.5rem;
    color: #fff;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-align: left;
  }
  .footer-contact-item a {
    color: #fff;
    text-decoration: underline;
  }
  .footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .footer-col ul li {
    margin-bottom: 0.5rem;
    color: #fff;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .footer-col ul li:before {
    content: '\2014';
    margin-right: 0.5em;
    color: #fff;
  }
  .footer-col ul li a {
    color: #fff;
    text-decoration: underline;
    font-size: 1.05rem;
  }
  .footer-bottom {
    background: #9608aa;
    padding: 1.2rem 2rem 1.2rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: 0.98rem;
    position: relative;
  }
  .footer-disclaimer {
    flex: 2 1 400px;
    color: #b3e5fc;
    font-size: 0.98rem;
    margin-bottom: 0.5rem;
  }
  .footer-copyright {
    flex: 1 1 200px;
    color: #fff;
    font-size: 0.98rem;
    text-align: left;
    margin-bottom: 0.5rem;
  }
</style>
