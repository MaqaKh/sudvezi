<script>
// No logic needed for now
const experiences = [
  { place: 'Ege Hospital', years: '2023 - Davam edir' },
  { place: 'HB GUVEN KLİNİKASİ', years: '2022 - 2023' },
  { place: 'Memorial hospitals İstanbul', years: '2019 - 2022' },
  { place: 'Marmara Üniversiteti xestexanasi', years: '2014 - 2019' },
];
const interests = [
  'süd vəzi plastik əməliyyatları',
  'Mədə balonunun yerləşdirilməsi',
  'Anal apses',
  'Babasil',
  'Bağırsaq çatı',
  'Mədə botoksu',
  'Mədə və bağırsağın onkolojik xəstəlikləri',
  'Qalxanabənzər vəzi xəstəliklərinin cərrahi müalicəsi',
  'Qasıq və qarın yırtıqları',
  'Öd kisəsi xəstəlikləriDırnaq batması',
  'Endoskopik,laparoskopik cərrahi əməliyyatlar',
  'Kolonoskopiya',
  'Lipom və dəri törəmələrinin çıxarılması',
  'Periton dializ kateteri taxılması',
  'Qastroskopiya',
  'Anal fistula',
  'Tük dönməsianal cat ve hemoroid',
];
const certImages = [
  'cert1.jpeg', 'cert2.jpeg', 'cert3.jpeg', 'cert4.jpeg', 'cert5.jpeg', 'cert6.jpeg', 'cert7.jpeg',
  'cert8.jpeg', 'cert9.jpeg', 'cert10.jpeg', 'cert11.jpeg', 'cert12.jpeg', 'cert13.jpeg', 'cert14.jpeg'
];
</script>

<main class="about-main">
  <!-- Section 1: Brief intro -->
  <section class="about-brief">
    <div class="about-photo">
      <img src="/about/gunel-about.png" alt="Günel Məmmədova" />
    </div>
    <div class="about-text">
      <h1>Uzman Doktor Günel Məmmədova</h1>
      <p>
        Uzman Doktor Günel Məmmədova, İstanbul Universiteti Cərrahpaşa Tibb Fakültəsində tibb təhsilini uğurla tamamladıqdan sonra, Marmara Universiteti Pendik Eğitim Araştırma xəstəxanasında uzmanlıqını tamamlamışdır.<br><br>
        Hal-hazırda HB Güven klinikasında ümumi cərrah, mammoloq olaraq fəaliyyət göstərməktədir. Azerbaycan'ın dəğərli həkimlərindən olan Uzman Doktor Günel Məmmədova, beynəlxalq konqres və konferanslarda iştirak etmişdir.
      </p>
    </div>
  </section>

  <!-- Section 2: Certificates -->
  <section class="about-certificates">
    <h2>Sertifikatlar</h2>
    <div class="cert-gallery">
      {#each certImages as img}
        <div class="cert-item">
          <img src={`/about/cert/${img}`} alt={img} loading="lazy" />
        </div>
      {/each}
    </div>
  </section>

  <!-- Section 3: Experience Timeline -->
  <section class="about-timeline">
    <h2>Təcrübələr</h2>
    <div class="timeline">
      {#each experiences.slice().reverse() as exp, i}
        <div class="timeline-item">
          <div class="timeline-dot">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#9608aa" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C7.03 2 2.5 4.42 2.5 7.5V20c0 .55.45 1 1 1s1-.45 1-1v-2h14v2c0 .55.45 1 1 1s1-.45 1-1V7.5C21.5 4.42 16.97 2 12 2zm0 2c4.14 0 7.5 1.91 7.5 3.5S16.14 9 12 9 4.5 7.09 4.5 5.5 7.86 4 12 4zm-7.5 7.5c0-1.59 3.36-3.5 7.5-3.5s7.5 1.91 7.5 3.5V15h-15V11.5zm0 6.5v-2h15v2h-15z"/>
            </svg>
          </div>
          <div class="timeline-content">
            <div class="timeline-place">{exp.place}</div>
            <div class="timeline-years">{exp.years}</div>
          </div>
        </div>
        {#if i !== experiences.length - 1}
          <div class="timeline-line"></div>
        {/if}
      {/each}
    </div>
  </section>

  <!-- Section 4: Interests -->
  <section class="about-interests">
    <h2>Maraq sahələri</h2>
    <ul>
      {#each interests as interest}
        <li>{interest}</li>
      {/each}
    </ul>
  </section>
</main>

<style>
.about-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem 3rem 1rem;
}
.about-brief {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 3rem;
}
.about-photo {
  flex: 0 0 30%;
  max-width: 240px;
}
.about-photo img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 16px #0002;
}
.about-text {
  flex: 1 1 70%;
  text-align: left;
}
.about-text h1 {
  color: #9608aa;
  font-size: 2rem;
  margin-bottom: 1.2rem;
  text-align: left;
}
.about-text p {
  font-size: 1.15rem;
  color: #222;
  line-height: 1.7;
  text-align: left;
}
.about-certificates {
  margin-bottom: 3rem;
  text-align: left;
}
.about-certificates h2 {
  color: #9608aa;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  text-align: left;
}
.cert-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.cert-item {
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
.cert-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.about-timeline {
  margin-bottom: 3rem;
  text-align: left;
}
.about-timeline h2 {
  color: #9608aa;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  text-align: left;
}
.timeline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}
.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  position: relative;
}
.timeline-dot {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafb;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px #0002;
}
.timeline-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #0001;
  padding: 1rem 1.2rem;
  text-align: left;
  min-width: 150px;
}
.timeline-place {
  font-weight: 600;
  color: #9608aa;
  margin-bottom: 0.3rem;
  text-align: left;
}
.timeline-years {
  color: #555;
  font-size: 1.05rem;
  text-align: left;
}
.timeline-line {
  height: 4px;
  width: 40px;
  background: #9608aa;
  border-radius: 2px;
}
.about-interests h2 {
  color: #9608aa;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  text-align: left;
}
.about-interests ul {
  columns: 2;
  gap: 2.5rem;
  font-size: 1.12rem;
  color: #222;
  margin: 0;
  padding: 0 0 0 1.2rem;
  text-align: left;
}
.about-interests li {
  margin-bottom: 0.7rem;
  list-style: disc inside;
  text-align: left;
}
@media (max-width: 900px) {
  .about-brief {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }
  .about-photo {
    max-width: 100%;
    width: 100%;
  }
  .about-interests ul {
    columns: 1;
  }
  .cert-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .cert-gallery {
    grid-template-columns: 1fr;
  }
}
</style> 