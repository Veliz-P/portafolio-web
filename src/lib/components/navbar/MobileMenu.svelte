<script lang="ts">
  import {
    ChevronsLeft,
    CodeXml,
    FolderKanban,
    Moon,
    Send,
    Sun,
    UserRound,
  } from '@lucide/svelte';

  import Github from '$lib/assets/icons/github.svg';
  import Gmail from '$lib/assets/icons/gmail.svg';
  import Linkedin from '$lib/assets/icons/linkedin.svg';
  import { localStore, translationStore } from '$lib/stores/langStore';
  import { themeStore } from '$lib/stores/themeStore';

  let { isMenuOpen = $bindable(false) } = $props<{ isMenuOpen: boolean }>();

  const closeMenu = () => (isMenuOpen = false);
</script>

{#if isMenuOpen}
  <div
    class="dark"
    aria-hidden={!isMenuOpen}
    id="menu-mobile-wrapper"
    role="button"
    tabindex="0"
    onclick={closeMenu}
    onkeydown={(e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        closeMenu();
      }
    }}
  >
    <nav id="menu-mobile">
      <div
        role="button"
        tabindex="0"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => e.stopPropagation()}
      >
        <div>
          <button
            aria-label="Close menu"
            id="btn-open-menu"
            onclick={() => (isMenuOpen = !isMenuOpen)}
          >
            <ChevronsLeft size={30} />
          </button>
        </div>

        <section class="mobile-menu-section">
          <h4>{$translationStore.navbar.explore}</h4>
          <ul class="navbar-items">
            <li>
              <a class="navbar-item" onclick={closeMenu} href="#skills">
                <div class="mobile-icon"><CodeXml /></div>
                {$translationStore.navbar.skills}
              </a>
            </li>
            <li>
              <a
                class="navbar-item"
                onclick={closeMenu}
                href="#projects-container"
              >
                <div class="mobile-icon"><FolderKanban /></div>
                {$translationStore.navbar.projects}
              </a>
            </li>
            <li>
              <a
                class="navbar-item"
                onclick={closeMenu}
                href="#contact-section"
              >
                <div class="mobile-icon"><Send /></div>
                {$translationStore.navbar.contact}
              </a>
            </li>
            <li>
              <a class="navbar-item" onclick={closeMenu} href="#about">
                <div class="mobile-icon"><UserRound /></div>
                {$translationStore.navbar.about}
              </a>
            </li>
          </ul>
        </section>

        <section class="mobile-menu-section">
          <h4>{$translationStore.navbar.settings}</h4>
          <ul class="mobile-settings">
            <li>
              <p>{$translationStore.navbar.theme}</p>
              <button
                onclick={() => ($themeStore = !$themeStore)}
                aria-label="Toggle theme"
                class="navbar-item btn-toggle-mode"
              >
                {#if $themeStore}
                  <Moon
                    class="fa-solid fa-moon moon-icon toggle-icon"
                    size={27}
                    strokeWidth={2}
                  />
                {:else}
                  <Sun
                    class="fa-solid fa-sun sun-icon toggle-icon"
                    size={27}
                    strokeWidth={2}
                  />
                {/if}
              </button>
            </li>
            <li>
              <p>{$translationStore.navbar.language}</p>
              <select
                name="language"
                bind:value={$localStore}
                class="navbar-item language-switcher"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </section>

        <section class="mobile-menu-section">
          <h4>{$translationStore.navbar.socialMedia}</h4>
          <ul class="social-media-links">
            <li>
              <a
                id="linkedin-link"
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/in/carlos-paucar-a576a239a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="LinkedIn" width="30" height="30" />
              </a>
            </li>
            <li>
              <a
                id="github-link"
                aria-label="GitHub profile"
                href="https://github.com/Veliz-P"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="GitHub" width="30" height="30" />
              </a>
            </li>
            <li>
              <a
                id="gmail-link"
                aria-label="Send an email"
                href="mailto:paucarcarlos2108@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gmail} alt="Gmail" width="30" height="30" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </div>
{/if}

<!-- svelte-ignore css_unused_selector -->
<style>
  #menu-mobile .navbar-items {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  #menu-mobile .mobile-menu-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .mobile-menu-section h4 {
    font-size: var(--fs-sm);
    font-weight: 500;
    color: var(--text-muted);
  }

  .mobile-settings {
    display: flex;
    gap: var(--space-5);
    flex-direction: column;
  }

  .mobile-settings li {
    display: flex;
    color: var(--text);
    font-size: var(--fs-sm);
    align-items: center;
    gap: var(--space-4);
    padding-left: var(--space-3);
  }

  .mobile-settings p {
    flex: 1;
  }

  .navbar-item {
    text-decoration: none;
    font-weight: bold;
    color: var(--text);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--rounded-lg);
    display: flex;
    gap: var(--space-2);
    align-items: center;
    font-size: var(--fs-sm) !important;
  }

  .navbar-item:hover {
    background-color: var(--bg-400);
  }

  #menu-mobile .navbar-item {
    background-color: var(--bg-500);
    border-radius: var(--rounded-sm);
    padding: var(--space-4);
    font-weight: 500;
    gap: var(--space-3);
  }

  #menu-mobile .navbar-item:hover {
    background-color: var(--bg-400);
  }

  .mobile-settings .navbar-item {
    padding: var(--space-2) var(--space-4) !important;
    border-radius: var(--rounded-lg) !important;
  }

  .language-switcher {
    cursor: pointer;
    outline: none;
    border: 2px solid var(--primary-700);
    background-color: var(--primary-700) !important;
    font-size: var(--fs-base);
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
  }

  .btn-toggle-mode {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #btn-open-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #menu-mobile-wrapper {
    position: fixed;
    inset: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #menu-mobile {
    word-break: break-all;
    background-color: var(--bg-800);
    height: 100%;
    font-size: var(--fs-base);
    width: 85%;
    max-width: 300px;
    overflow-y: auto;
  }

  #menu-mobile > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: var(--space-6);
  }

  .mobile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-400);
  }

  .social-media-links {
    display: flex;
    gap: var(--space-4);
    padding-left: var(--space-3);
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }

  @media (min-width: 768px) {
    #menu-mobile-wrapper,
    #menu-mobile {
      display: none;
    }
  }
</style>
