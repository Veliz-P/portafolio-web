<script lang="ts">
  import { translationStore } from '$lib/stores/langStore';
  import { onMount, onDestroy } from 'svelte';
  import { resolve } from '$app/paths';
  import Linkedin from '$lib/assets/icons/linkedin.svg';
  import Github from '$lib/assets/icons/github.svg';
  let observer : IntersectionObserver | null = null;
  let footer : HTMLElement | null = null;

  function setupObserver() {
    const footerId = "#floating-navbar-desktop"
    const hideClass = "hide-nav"
    footer = document.querySelector(footerId)
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        footer?.classList.toggle(hideClass, entry.isIntersecting)
      }
    }, 
    {
      threshold: 0.10,
    })
    let el = document.querySelector("#portfolio-end")
    if (el) {
        observer?.observe(el)
    }
  }

  onMount(() => {
    setupObserver()
  });
  
  onDestroy(() => {
    observer?.disconnect()
  })
</script>

<footer id="portfolio-end">
    
    <div class="footer-social-media-links">
      <ul>
        <li>
          <a 
          aria-label="LinkedIn profile"
          href="https://www.linkedin.com/in/carlos-paucar-a576a239a/"
          target="_blank"
          rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </li>
        <li>
          <a 
          aria-label="Github profile"
          href="https://github.com/Veliz-P"
          target="_blank"
          rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
        </li>
      </ul>
      <div>
        <a id="email-link" href="mailto:paucarcarlos2108@gmail.com">paucarcarlos2108@gmail.com</a>
        <p id="my-name">Carlos Veliz</p>
      </div>
      <p id="rights-reserved">
        &copy; {new Date().getFullYear()} | {$translationStore.footer.rightsReserved}
      </p>
    </div>
    <div class="footer-explore-links">
      <ul>
        <li>
          <a href={resolve('/')}>{ $translationStore.navbar.start }</a>
        </li>
        <li>
          <a href="#skills">{ $translationStore.navbar.skills }</a>
        </li>
        <li>
          <a href="#projects-container">{ $translationStore.navbar.projects }</a>
        </li>
        <li>
          <a href="#contact-section">{ $translationStore.navbar.contact }</a>
        </li>
        <li>
          <a href="#about">{ $translationStore.navbar.about }</a>
        </li>
      </ul>
    </div>
</footer>

<style>
:global(.dark) footer {
    background-color: var(--bg-400);

}
#portfolio-end {
    margin-top: 6rem;
    background-color: var(--bg-500);
    display: flex;
    justify-content: space-between;
    padding: var(--space-10) var(--space-8);
    color: var(--text-muted);
    font-size: var(--fs-sm);
    font-weight: 500;
    flex-wrap: wrap;
    gap: var(--space-10)
}
.footer-social-media-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: 100%;
}
.footer-social-media-links ul {
  display: flex;
  gap: var(--space-2);
  align-items: center;
  list-style: none;
}
.footer-social-media-links img {
  width: 1.7rem;
}
#email-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: var(--fs-sm);
  font-weight: 500;
}
:global(.dark) #my-name {
  color: var(--primary-500);
}
#my-name {
  font-weight: 900;
  font-size: var(--fs-base);
  color: var(--primary-700);
  text-transform: uppercase;
  margin-top: auto;
  
}
#rights-reserved {
  font-size: var(--fs-xs);
  margin-top: auto;
  color: var(--text-muted);
}
.footer-explore-links {
  display: none
}
@media (min-width: 768px) {
  #portfolio-end {
    padding: var(--space-12) var(--space-10);
  }
  .footer-explore-links {
    display: block;
  }
  .footer-explore-links ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: var(--space-4)
  }
  .footer-explore-links a {
    color: var(--text);
    text-decoration: none;
    font-size: var(--fs-sm);
    font-weight: 600;
  }
}
</style>
