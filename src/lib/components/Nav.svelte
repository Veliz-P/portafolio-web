<script lang="ts">
  import { User, Phone, Moon, Sun, Lightbulb, Settings } from '@lucide/svelte';
  import { themeStore } from '$lib/stores/themeStore';
  import { localStore, translationStore } from '$lib/stores/langStore';
</script>

<nav id="navbar-desktop" class="dark">
  <ul id="navbar-items">
    <li>
      <a class="navbar-item" href="#about"><User /> {$translationStore.navbar.about}</a>
    </li>
    <li>
      <a class="navbar-item" href="#skills"><Settings /> {$translationStore.navbar.skills}</a>
    </li>
    <li>
      <a class="navbar-item" href="#contact-section">
        <Phone /> {$translationStore.navbar.contact}</a
      >
    </li>
    <li>
      <a class="navbar-item" href="#projects-container">
        <Lightbulb /> {$translationStore.navbar.projects}</a
      >
    </li>
  </ul>

  <ul id="navbar-options">
    <li>
      <button
        onclick={() => ($themeStore = !$themeStore)}
        aria-label="Language switcher"
        class="btn-toggle-mode"
      >
        {#if $themeStore}
          <Moon class="fa-solid fa-moon moon-icon toggle-icon" size={27} stroke-width={2} />
        {:else}
          <Sun class="fa-solid fa-sun sun-icon toggle-icon" size={27} stroke-width={2} />
        {/if}
      </button>
    </li>
    <li>
      <select name="language" bind:value={$localStore} class="navbar-item language-switcher">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </li>
  </ul>

  <button aria-label="Open menu" id="btn-open-menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="40"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="22" fill="#f3f4f6" />
      <rect x="12" y="16" width="24" height="2.6" rx="1.3" fill="#111" />
      <rect x="12" y="23" width="24" height="2.6" rx="1.3" fill="#111" />
      <rect x="12" y="30" width="24" height="2.6" rx="1.3" fill="#111" />
    </svg>
  </button>
</nav>

<aside id="menu-mobile">
  <button aria-label="Language switcher" class="pointer btn-toggle-mode">
    <Moon class="fa-solid fa-moon moon-icon toggle-icon" stroke-width={2} />
    <Sun class="fa-solid fa-sun sun-icon toggle-icon" stroke-width={2} />
  </button>
  <select name="language" class="navbar-item language-switcher">
    <option value="es">Español</option>
    <option value="en">English</option>
  </select>
  <a class="navbar-item" href="#contact-section">{$translationStore.navbar.contact}</a>
  <a class="navbar-item" href="#skills">{$translationStore.navbar.skills}</a>
  <a class="navbar-item" href="#about">{$translationStore.navbar.about} </a>
  <a class="navbar-item" href="#projects-container">{$translationStore.navbar.projects}</a>
</aside>

<style>
  #navbar-desktop {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: var(--space-2) var(--space-4);
    border-bottom: var(--space-2) solid var(--primary-500);
    z-index: 2;
  }
  .navbar-item {
    text-decoration: none;
    color: var(--text);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--rounded-lg);
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }
  .navbar-item:hover {
    background-color: var(--bg-400);
  }
  #navbar-items {
    display: none;
  }
  .language-switcher {
    cursor: pointer;
    outline: none;
    border: 2px solid var(--primary-600);
    background-color: var(--primary-600);
    font-size: var(--fs-base);
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
  }
  .language-switcher:focus {
    accent-color: var(--primary-500);
  }
  #btn-open-menu {
    display: block;
  }
  #btn-open-menu {
    display: block;
  }
  #navbar-items {
    display: none;
  }
  #menu-mobile {
    display: none;
    flex-direction: column;
    position: fixed;
    word-break: break-all;
    justify-content: space-around;
    align-items: center;
    font-size: var(--fs-base);
    top: 0;
    left: 0;
    width: 45vw;
    height: 100%;
    color: white;
    border-right: 7px solid var(--primary);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    opacity: 1;
  }
  #navbar-options {
    display: none;
  }
  @media (min-width: 768px) {
    #menu-mobile {
      display: none;
      opacity: 0;
    }
    #navbar-desktop {
      padding: var(--space-3) var(--space-4);
    }
    .navbar-item {
      padding: var(--space-1) var(--space-4);
    }
    #navbar-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style: none;
      gap: var(--space-1);
      font-weight: bold;
      align-items: center;
      color: var(--light);
    }
    .language-switcher {
      font-size: var(--fs-sm);
    }
    #navbar-options {
      display: flex;
      list-style: none;
      align-items: center;
      gap: var(--space-4);
    }
    #btn-open-menu {
      display: none;
    }
  }
</style>
