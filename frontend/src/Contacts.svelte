<script>
  let name = '';
  let email = '';
  let phone = '';
  let subject = 'Genel';
  let message = '';
  let sent = false;
  let error = '';

  function sendEmail() {
    if (!name || !email || !phone || !subject || !message) {
      error = 'Lütfen tüm alanları doldurun.';
      sent = false;
      return;
    }
    error = '';
    sent = true;
    // Here you would send the email via backend API
    name = '';
    email = '';
    phone = '';
    subject = 'Genel';
    message = '';
  }
</script>

<main class="contact-main">
  <div class="contact-top-row">
    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps?q=Akademik%20Həsən%20Əliyev%20k%C3%BC%C3%A7%C9%99si%2038%2C%20AZ1078%20N%C9%99simi%20Baku%20Ege%20Hospital&output=embed"
        width="100%" height="340" style="border:0; border-radius: 12px; box-shadow: 0 2px 16px #0002;"
        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="contact-details">
      <div class="contact-details-inner">
        <div style="font-size:2rem; font-weight:700; margin-bottom:0.7rem;">Əlaqə</div>
        <div style="font-weight:600; margin-bottom:0.5rem;">(Bazar ertəsi, Çərşənbə axşamı və Cümə axşamı)</div>
        <div><b>Ünvan</b><br>Akademik Həsən Əliyev küçəsi 38, AZ1078 Nəsimi / Bakı (Ege Hospital)</div>
        <div style="margin-top:1.2rem;"><b>E-poçt</b><br>info@sudvezi.az</div>
        <div style="margin-top:1.2rem;"><b>Mobil</b><br>0503858635</div>
        <div style="margin-top:1.2rem;"><b>Telefon</b><br>0503858635</div>
      </div>
    </div>
  </div>
  <div class="contact-form-section">
    <form class="contact-form-grid" on:submit|preventDefault={sendEmail}>
      <div class="form-row">
        <div class="form-group">
          <label for="name">Adınız Soyadınız (*)</label>
          <input id="name" type="text" bind:value={name} required />
        </div>
        <div class="form-group">
          <label for="email">E-poçt ünvanınız (*)</label>
          <input id="email" type="email" bind:value={email} required />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="phone">Telefon nömrəniz (*)</label>
          <input id="phone" type="text" bind:value={phone} required />
        </div>
        <div class="form-group">
          <label for="subject">Mövzu (*)</label>
          <select id="subject" bind:value={subject} required>
            <option value="Genel">Ümumi</option>
            <option value="Randevu">Randevu</option>
            <option value="Danışma">Məsləhət</option>
          </select>
        </div>
      </div>
      <div class="form-group full-width">
        <label for="message">Mesajınız</label>
        <textarea id="message" rows="3" bind:value={message} required></textarea>
      </div>
      {#if error}
        <div class="form-error">Zəhmət olmasa bütün sahələri doldurun.</div>
      {/if}
      {#if sent}
        <div class="form-success">Mesajınız göndərildi!</div>
      {/if}
      <button type="submit" class="green-btn">Göndər</button>
    </form>
  </div>
</main>

<style>
  .contact-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    background: #f7fafb;
    padding: 3rem 0;
  }
  .contact-top-row {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;
    max-width: 1100px;
    margin-bottom: 2.5rem;
    justify-content: center;
    align-items: stretch;
  }
  .contact-map {
    flex: 1.2;
    min-width: 340px;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
  .contact-map iframe {
    height: 100%;
    min-height: 340px;
    width: 100%;
    border: 0;
    border-radius: 12px;
    box-shadow: 0 2px 16px #0002;
    display: block;
  }
  .contact-details {
    flex: 1;
    min-width: 270px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 16px #0002;
    padding: 2.2rem 2rem 2rem 2rem;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }
  .contact-details-inner {
    font-size: 1rem;
    color: #222;
    line-height: 1.6;
    text-align: left;
    width: 100%;
  }
  .contact-details-inner > div {
    text-align: left !important;
  }
  .contact-form-section {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: #f7fafb;
    border-radius: 12px;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    box-shadow: 0 1px 8px #0001;
  }
  .contact-form-section h2 {
    color: #9608aa;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }
  .contact-form-grid {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .form-row {
    display: flex;
    gap: 2rem;
  }
  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .form-group label {
    font-size: 1.08rem;
    font-weight: 500;
    color: #222;
    margin-bottom: 0.2rem;
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    border: 1.5px solid #b5d0e0;
    border-radius: 4px;
    padding: 0.7rem 1rem;
    font-size: 1.08rem;
    outline: none;
    background: #f7fafb;
    transition: border 0.2s;
  }
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border: 1.5px solid #9608aa;
  }
  .form-group.full-width {
    width: 100%;
  }
  .green-btn {
    background: #36b24a;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.8rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 0.5rem;
    width: 140px;
    transition: background 0.2s;
  }
  .green-btn:hover {
    background: #249a36;
  }
  .form-error {
    color: #d32f2f;
    margin-bottom: 1rem;
    text-align: center;
  }
  .form-success {
    color: #388e3c;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 900px) {
    .contact-top-row {
      flex-direction: column;
      gap: 2rem;
      align-items: stretch;
    }
    .contact-map, .contact-details {
      max-width: 100%;
      min-width: 0;
    }
  }
  @media (max-width: 700px) {
    .form-row {
      flex-direction: column;
      gap: 1rem;
    }
    .green-btn {
      width: 100%;
    }
  }
</style> 