<script>
  import { onMount, onDestroy } from 'svelte';
  import axios from 'axios';
  import Fa from 'svelte-fa';
  import { faUser, faQuestionCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons';
  
  const slides = [
    {
      title: 'Meme Kanseri Tedavi Süreci',
      desc: 'Günümüzde meme kanseri tedavisinde multidisipliner yaklaşım ön plandadır.',
      btn: 'Detaylar',
    },
    {
      title: 'Erken Teşhis Hayat Kurtarır',
      desc: 'Meme kanserinde erken teşhis tedavi başarısını artırır.',
      btn: 'Detaylar',
    },
    {
      title: 'Meme Sağlığı İçin Kontrollerinizi İhmal Etmeyin',
      desc: 'Düzenli kontroller meme sağlığınız için önemlidir.',
      btn: 'Detaylar',
    },
    {
      title: 'Uzman Kadro ile Yanınızdayız',
      desc: 'Alanında uzman ekibimizle meme kanseri tedavisinde yanınızdayız.',
      btn: 'Detaylar',
    },
  ];
  let current = 0;
  let interval;

  // Blog state
  let blogs = [];
  let blogError = '';

  function goTo(idx) {
    current = idx;
  }
  function next() {
    current = (current + 1) % slides.length;
  }
  onMount(async () => {
    interval = setInterval(next, 5000);
    try {
      const res = await axios.get('http://127.0.0.1:8055/items/blogs?fields=*,cover_image.*&sort[]=-created_at&limit=4');
      blogs = res.data.data;
    } catch (err) {
      blogError = err.message || 'Failed to fetch blogs.';
    }
  });
  onDestroy(() => clearInterval(interval));

  // Testimonials mock data
  const testimonials = [
    {
      name: 'Aysel Məmmədova',
      role: 'Pasiyent',
      text: 'Günel xanımın diqqəti və peşəkarlığı sayəsində müalicə prosesim çox rahat keçdi. Hər kəsə tövsiyə edirəm!',
      img: '/about/gunel-about.png',
      rating: 5,
    },
    {
      name: 'Elçin Quliyev',
      role: 'Pasiyent',
      text: 'Çox səmimi və qayğıkeş həkimdir. Suallarıma ətraflı cavab verdi və hər zaman dəstək oldu.',
      img: '/about/gunel-about.png',
      rating: 4,
    },
    {
      name: 'Nigar Əliyeva',
      role: 'Pasiyent',
      text: 'Müalicə və əməliyyat zamanı özümü çox güvəndə hiss etdim. Günel xanıma minnətdaram.',
      img: '/about/gunel-about.png',
      rating: 5,
    },
  ];
  let testimonialIndex = 1;
  function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  }
  function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  }
</script>

<main class="home-main">
  <!-- Slider Section -->
  <section class="slider-section slider-bg">
    <div class="slider-slide">
      <div class="slider-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].desc}</p>
        <button class="slider-btn">{slides[current].btn}</button>
      </div>
      <div class="slider-dots">
        {#each slides as _, i}
          <span class="dot {i === current ? 'active' : ''}" on:click={() => goTo(i)}></span>
        {/each}
      </div>
    </div>
  </section>

  <!-- Info Cards Section -->
  <section class="slider-cards">
    <div class="slider-card">
      <div class="slider-card-content">
        <div class="slider-card-icon">
          <Fa icon={faUser} size="1x" color="#fff" />
        </div>
        <div>
          <div class="slider-card-title">Məni Tanıyın</div>
          <div class="slider-card-desc">Tərcümeyi-halımı incələyərək ətraflı məlumat ala bilərsiniz</div>
        </div>
      </div>
    </div>
    <div class="slider-card">
      <div class="slider-card-content">
        <div class="slider-card-icon">
          <Fa icon={faQuestionCircle} size="1x" color="#fff" />
        </div>
        <div>
          <div class="slider-card-title">Tez-tez verilən suallar</div>
          <div class="slider-card-desc">Süd vəzi xərçəngi cərrahiyyəsi haqqında ətraflı məlumat ala bilərsiniz</div>
        </div>
      </div>
    </div>
    <div class="slider-card">
      <div class="slider-card-content">
        <div class="slider-card-icon">
          <Fa icon={faAddressBook} size="1x" color="#fff" />
        </div>
        <div>
          <div class="slider-card-title">Bize Ulaşın</div>
          <div class="slider-card-desc">Detaylı bilgi almak ve daha fazlası için</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Banner Section -->
  <section class="custom-banner">
    <div class="banner-content">
      <div class="banner-texts">
        <div class="banner-line1">
          <em>Prof. Dr. Bülent Çitgez ile meme kanserinde erken teşhis ve doğru tedaviyle sağlıklı bir geleceğe umutla bakın.</em>
        </div>
        <div class="banner-line2">
          <b>"MEME HASTALIKLARIYLA MÜCADELDE BİRLİKTE  GÜÇLÜ ADIMLAR ATALIM"</b>
        </div>
      </div>
      <div class="banner-image">
        <img src="/about/gunel-about.png" alt="Prof. Dr. Günel Məmmədova" />
      </div>
    </div>
  </section>

  <!-- Blogs Section -->
  <section class="home-blogs">
    <h2>Son Bloglar</h2>
    {#if blogError}
      <div class="blog-error">{blogError}</div>
    {:else}
      <div class="blog-row">
        {#each blogs as blog}
          <div class="blog-card">
            <img class="blog-card-img" src={blog.cover_image ? `http://127.0.0.1:8055${blog.cover_image}` : '/placeholder.jpg'} alt={blog.title} />
            <div class="blog-card-title">{blog.title}</div>
            <div class="blog-card-summary">{blog.summary}</div>
            <a class="blog-card-link" href={"/blog/" + blog.slug}>Devamını Oku</a>
          </div>
        {/each}
      </div>
    {/if}
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <h2 class="testimonials-title">Testimonials</h2>
    <div class="testimonials-carousel">
      <button class="testimonial-arrow left" on:click={prevTestimonial}>&lt;</button>
      {#each testimonials as t, i}
        <div class="testimonial-card {i === testimonialIndex ? 'active' : i === (testimonialIndex - 1 + testimonials.length) % testimonials.length || i === (testimonialIndex + 1) % testimonials.length ? 'side' : 'inactive'}">
          <div class="testimonial-quote">&#8220;</div>
          <img class="testimonial-img" src={t.img} alt={t.name} />
          <div class="testimonial-text">{t.text}</div>
          <div class="testimonial-rating">
            {#each Array(5) as _, j}
              <span class="star {j < t.rating ? 'filled' : ''}">&#9733;</span>
            {/each}
          </div>
          <div class="testimonial-name">{t.name}</div>
          <div class="testimonial-role">{t.role}</div>
        </div>
      {/each}
      <button class="testimonial-arrow right" on:click={nextTestimonial}>&gt;</button>
    </div>
    <div class="testimonial-dots">
      {#each testimonials as _, i}
        <span class="dot {i === testimonialIndex ? 'active' : ''}" on:click={() => testimonialIndex = i}></span>
      {/each}
    </div>
  </section>
</main>

<style>
.home-main {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #f7fafb;
}
.slider-section {
  width: 100%;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 0 2.5rem 0;
}
.slider-bg {
  background: url('/home/banner.jpg') center/cover no-repeat;
}
.slider-slide {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  min-height: 320px;
  position: relative;
}
.slider-content {
  flex: 1 1 50%;
  padding: 2.5rem 2.5rem 2.5rem 3.5rem;
  z-index: 2;
  border-radius: 18px;
}
.slider-content h1 {
  font-size: 2.3rem;
  color: #222;
  margin-bottom: 1.2rem;
}
.slider-content p {
  font-size: 1.18rem;
  color: #333;
  margin-bottom: 1.7rem;
}
.slider-btn {
  background: #2979ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px #0001;
  transition: background 0.2s;
}
.slider-btn:hover {
  background: #1565c0;
}
.slider-dots {
  position: absolute;
  left: 3.5rem;
  bottom: 1.2rem;
  display: flex;
  gap: 0.5rem;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e0e0e0;
  display: inline-block;
}
.dot.active {
  background: #2979ff;
}
.slider-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  margin: -2.5rem auto 0 auto;
  max-width: 1100px;
  position: relative;
  z-index: 2;
}
.slider-card {
  background: rgb(13, 71, 161);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px #0002;
  flex: 1 1 0;
  min-width: 260px;
  max-width: 340px;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.slider-card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.slider-card-icon {
  font-size: 2.2rem;
  margin-bottom: 0;
  margin-right: 1rem;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-card-title,
.slider-card-desc {
  text-align: center;
}
.slider-card-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.slider-card-desc {
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
}
.slider-card-flags {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}
.slider-card-flags img {
  width: 36px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0 1px 4px #0001;
}
@media (max-width: 900px) {
  .slider-section {
    min-height: 260px;
    padding-bottom: 1.5rem;
  }
  .slider-slide {
    flex-direction: column;
    align-items: flex-start;
    min-height: 220px;
  }
  .slider-content {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
  .slider-cards {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
}
.custom-banner {
  width: 100%;
  background: linear-gradient(100deg, #0d47a1 60%, #1976d2 100%);
  padding: 0;
  margin: 0;
  min-height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
}
.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding: 2.2rem 2.5rem 2.2rem 3rem;
  box-sizing: border-box;
}
.banner-texts {
  flex: 1 1 60%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.banner-line1 {
  font-size: 1.35rem;
  font-style: italic;
  font-weight: 400;
  opacity: 0.95;
}
.banner-line2 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 0.5rem;
}
.banner-image {
  flex: 0 0 260px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
}
.banner-image img {
  max-height: 180px;
  width: auto;
  border-radius: 18px;
  box-shadow: 0 2px 16px #0003;
  background: #fff;
  padding: 0.5rem;
}
@media (max-width: 900px) {
  .banner-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1rem;
    gap: 1.2rem;
  }
  .banner-image {
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
  .banner-image img {
    max-height: 120px;
  }
  .banner-line2 {
    font-size: 1.2rem;
  }
}
.home-blogs {
  max-width: 1200px;
  margin: 3.5rem auto 0 auto;
  padding: 0 1.5rem;
}
.home-blogs h2 {
  color: #9608aa;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
}
.blog-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.blog-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px #0001;
  padding: 0 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  min-height: 370px;
}
.blog-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.blog-card-title {
  margin: 1rem 0 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a3c6b;
}
.blog-card-summary {
  margin: 0 1rem 0.5rem 1rem;
  color: #444;
  font-size: 0.98rem;
  flex: 1;
  text-align: left;
}
.blog-card-link {
  margin-left: 1rem;
  color: #2979ff;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  margin-top: auto;
}
.blog-card-link:hover {
  text-decoration: underline;
}
.blog-error {
  color: #d32f2f;
  text-align: left;
  margin-bottom: 1rem;
}
@media (max-width: 1100px) {
  .blog-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .blog-row {
    grid-template-columns: 1fr;
  }
}
.testimonials-section {
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  padding: 0 1.5rem 3rem 1.5rem;
  text-align: center;
}
.testimonials-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #000;
}
.testimonials-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
}
.testimonial-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 24px #0001;
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  max-width: 370px;
  min-width: 320px;
  width: 100%;
  margin: 0 1.2rem;
  opacity: 0.25;
  transform: scale(0.92);
  transition: all 0.3s cubic-bezier(.4,2,.6,1);
  pointer-events: none;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonial-card.active {
  opacity: 1;
  transform: scale(1.05);
  box-shadow: 0 4px 32px #0002;
  pointer-events: auto;
  z-index: 2;
}
.testimonial-card.side {
  opacity: 0.5;
  transform: scale(0.98);
  z-index: 1;
}
.testimonial-quote {
  font-size: 2.5rem;
  color: #2196f3;
  margin-bottom: 1.2rem;
}
.testimonial-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.2rem;
  border: 3px solid #f7fafb;
}
.testimonial-text {
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.5rem;
  min-height: 90px;
}
.testimonial-rating {
  margin-bottom: 1.1rem;
}
.star {
  font-size: 1.3rem;
  color: #b0bec5;
}
.star.filled {
  color: #2196f3;
}
.testimonial-name {
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
  color: #222;
}
.testimonial-role {
  color: #888;
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}
.testimonial-arrow {
  background: #e3f2fd;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  color: #2196f3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 3;
}
.testimonial-arrow:hover {
  background: #bbdefb;
}
.testimonial-arrow.left {
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
}
.testimonial-arrow.right {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}
.testimonial-dots {
  margin-top: 2.2rem;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
}
.testimonial-dots .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e0e0e0;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s;
}
.testimonial-dots .dot.active {
  background: #2196f3;
}
@media (max-width: 900px) {
  .testimonials-carousel {
    gap: 0.5rem;
  }
  .testimonial-card {
    min-width: 220px;
    max-width: 320px;
    padding: 1.5rem 0.7rem 1.2rem 0.7rem;
  }
  .testimonial-arrow.left {
    left: -20px;
  }
  .testimonial-arrow.right {
    right: -20px;
  }
}
</style> 