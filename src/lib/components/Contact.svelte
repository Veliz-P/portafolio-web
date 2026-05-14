<script lang="ts">
  import { Mail, Megaphone, Send, TextAlignJustify, User, Phone } from '@lucide/svelte';
  import { asset } from '$app/paths';
  import Github from '$lib/assets/icons/github.svg';
  import Linkedin from '$lib/assets/icons/linkedin.svg';
  import Fiverr from '$lib/assets/icons/fiverr.svg';
  import { translationStore } from '$lib/stores/langStore';
  import emailjs from '@emailjs/browser';
  let resultState: 'idle' | 'success' | 'error' = $state('idle');
  async function sendEmail(e: Event) {
    e.preventDefault();
    const serviceId = 'service_r8z1b8l';
    const templateId = 'template_2ur7fou';
    const publicKey = '0M9Na40wF8jJMXTCc';
    try {
      emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, {
        publicKey: publicKey
      });
      console.log('Email sent successfully');
      resultState = 'success';
    } catch (error) {
      console.log('Error sending email:', error);
      resultState = 'error';
    }
    backToIdle();
  }
  let timeout: ReturnType<typeof setTimeout> | null = null;
  function backToIdle() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      resultState = 'idle';
    }, 3500);
  }
  let message = $state('');
</script>

<div id="contact-section" class="animate-on-scroll">
  <h2 class="section-title">
    <Phone size={30} />
    <span> {$translationStore.contact.title}</span>
  </h2>
  <div id="social-media-links-mobile" class="social-media-links">
    <a
      id="linkedin-link"
      aria-label="LinkedIn profile"
      href="https://www.linkedin.com/in/carlos-paucar-a576a239a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Linkedin} alt="LinkedIn" width="45" height="45" />
    </a>
    <a
      id="github-link"
      aria-label="GitHub profile"
      href="https://github.com/Veliz-P"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Github} alt="GitHub" width="45" height="45" />
    </a>
    <a
      id="fiverr-link"
      aria-label="Fiverr profile"
      href="https://es.fiverr.com/carlos_velizz?source=gig_page"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Fiverr} alt="Fiverr" width="45" height="45" />
    </a>
  </div>
  <div id="contact-row">
    <form onsubmit={sendEmail} id="form">
      <h3 id="form-title">{$translationStore.contact.formTitle}</h3>
      <div class="field-div">
        <label for="subject">
          <Megaphone size={20} />
          <span>{$translationStore.contact.subject}</span>
        </label>
        <input type="text" id="subject" name="subject" required minlength="10" maxlength="60" />
      </div>
      <div id="name-and-email-fields">
        <div class="field-div">
          <label for="name">
            <User size={20} />
            <span>{$translationStore.contact.name}</span>
          </label>
          <input type="text" id="name" name="name" required minlength="3" maxlength="50" />
        </div>
        <div class="field-div">
          <label for="email">
            <Mail size={20} />
            <span>Email</span>
          </label>
          <input type="email" id="email" name="email" required maxlength="255" />
        </div>
      </div>

      <div class="field-div">
        <label for="message">
          <TextAlignJustify size={20} />
          <span>{$translationStore.contact.message}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="60"
          minlength="15"
          maxlength="500"
          required
          bind:value={message}
        ></textarea>
        <p id="message-word-counter">
          <span id="message-current-count">{message.length}</span>/500
        </p>
      </div>
      <button id="submit-btn" type="submit">
        <span>{$translationStore.contact.send}</span>
        <Send size={20} />
      </button>
      <div class="result-message">
        {#if resultState === 'success'}
          <p class="success-message message">{$translationStore.contact.successMsg}</p>
        {:else if resultState === 'error'}
          <p class="error-message message">{$translationStore.contact.errorMsg}</p>
        {/if}
      </div>
    </form>
    <div id="ready-to-collaborate">
      <h3>{$translationStore.contact.readyToWork}</h3>
      <p>{$translationStore.contact.contactMeMsg}</p>
      <img
        id="work-together-img"
        src={asset('/images/work-together-img.svg')}
        alt="let's work together"
        width="100"
        height="250"
      />
      <div class="social-media-links">
        <a
          id="linkedin-link"
          aria-label="LinkedIn profile"
          href="https://www.linkedin.com/in/carlos-paucar-a576a239a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" width="45" height="45" />
        </a>
        <a
          id="github-link"
          aria-label="GitHub profile"
          href="https://github.com/Veliz-P"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub" width="45" height="45" />
        </a>
        <a
          id="fiverr-link"
          aria-label="Fiverr profile"
          href="https://es.fiverr.com/carlos_velizz?source=gig_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Fiverr} alt="Fiverr" width="45" height="45" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  #contact-section {
    margin-bottom: var(--space-12);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #contact-section .section-title {
    margin-bottom: var(--space-8);
    color: var(--primary-500);
  }
  #form {
    display: flex;
    flex-direction: column;
    border: 1.5px solid var(--border);
    padding: var(--space-8);
    border-radius: var(--rounded-xl);
  }
  #message-word-counter {
    font-size: var(--fs-sm);
    color: var(--text-muted);
  }
  .field-div {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
  }
  #name-and-email-fields {
    display: flex;
    justify-content: none;
    flex-direction: column;
    gap: 0rem;
  }
  #name-and-email-fields .field-div {
    flex: 1;
  }
  #contact-row {
    display: flex;
    gap: var(--space-10);
    justify-content: center;
    margin: 0 2.5rem;
  }
  #contact-row h3 {
    text-transform: capitalize;
    font-size: var(--fs-xl);
    margin-bottom: var(--space-2);
  }
  #contact-row form {
    flex-grow: 1;
  }
  #form-title {
    margin-bottom: var(--space-6) !important;
  }
  #form input,
  #form textarea {
    padding: var(--space-2);
    border-radius: var(--rounded-md);
    outline: none;
    border: none;
    color: var(--text);
    border: 1px solid var(--border);
    width: 100%;
    transition: box-shadow 0.3s ease-out;
    font-size: var(--fs-base);
  }
  #form label {
    color: var(--text-muted);
  }
  #form input:focus,
  #form textarea:focus {
    box-shadow: var(--shadow-sm);
    border-color: none;
    outline: 1.5px solid var(--primary-600);
  }
  #form label {
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }
  textarea {
    resize: vertical;
  }

  #submit-btn {
    padding: var(--space-2) var(--space-8);
    background-color: var(--primary-600);
    border-radius: var(--rounded-xl);
    color: var(--light);
    font-weight: bold;
    font-size: var(--fs-base);
    cursor: pointer;
    margin: auto;
    border: 1px solid var(--light);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    transition: box-shadow 0.2s ease-in-out;
    margin-bottom: var(--space-6);
  }
  #submit-btn:hover {
    box-shadow: 6px 6px 0 var(--primary-600);
  }
  #submit-btn:active {
    box-shadow: 1px 1px 0 var(--primary-600);
    transform: translateY(2px);
    transition: all 0.1s ease-in-out;
    border: none;
  }
  #ready-to-collaborate {
    display: none;
  }
  .social-media-links {
    display: flex;
    gap: var(--space-4);
  }
  .social-media-links img {
    width: 50px;
    height: 50px;
    border: 1.5px solid var(--border);
    border-radius: var(--rounded-full);
    padding: var(--space-2);
    transition:
      box-shadow 0.2s ease-in-out,
      background-color 0.2s ease-in-out;
  }
  .social-media-links img:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--primary-200);
  }
  :global(.dark) .social-media-links img:hover {
    background-color: var(--primary-500);
  }
  #social-media-links-mobile {
    width: 100%;
    justify-content: center;
    margin-bottom: var(--space-6);
  }
  .result-message {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .message {
    width: 100%;
    text-align: center;
    padding: var(--space-2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border-radius: var(--rounded-xl);
    font-size: var(--fs-sm);
  }
  .success-message {
    background-color: var(--success-100);
    color: var(--success-600);
    border: 1px solid var(--success-400);
  }
  :global(.dark) .success-message {
    background-color: var(--success-900);
    color: var(--success-200);
    border: 1px solid var(--success-600);
  }
  .error-message {
    background-color: var(--error-100);
    color: var(--error-500);
    border: 1px solid var(--error-300);
  }
  :global(.dark) .error-message {
    background-color: var(--error-900);
    color: var(--error-200);
    border: 1px solid var(--error-600);
  }
  @media (min-width: 768px) {
    #contact-section .section-title {
      margin-bottom: var(--space-10);
    }
    #contact-section {
      margin-bottom: var(--space-16);
    }
    #social-media-links-mobile {
      display: none;
    }
    #submit-btn {
      padding: var(--space-4) var(--space-16);
    }
    #form {
      padding: var(--space-8) var(--space-12);
    }
    #form-title {
      margin-bottom: var(--space-8) !important;
    }
    #form input,
    #form textarea {
      padding: var(--space-2);
    }
    .field-div {
      margin-bottom: var(--space-8);
    }
    #name-and-email-fields {
      justify-content: space-between;
      flex-direction: row;
      gap: var(--space-4);
    }
    #ready-to-collaborate {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }
    #ready-to-collaborate > h3 ~ p {
      color: var(--text-muted);
    }
    #work-together-img {
      width: 100%;
      max-width: 500px;
      height: auto;
      object-fit: cover;
      margin: var(--space-10) 0;
    }
  }

  @media (min-width: 1024px) {
    #contact-row {
      gap: calc(var(--space-16) + 1rem);
    }
  }
</style>
