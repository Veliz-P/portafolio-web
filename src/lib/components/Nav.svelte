<script lang="ts">
  import { User, Phone, Moon, Sun, Lightbulb, Settings } from '@lucide/svelte';
  import { themeStore } from '$lib/stores/themeStore';
  import { localStore, translationStore } from '$lib/stores/langStore';
  let isMenuOpen = $state(false);
</script>

<nav id="navbar-desktop" class="dark">
  <button aria-label="Open menu" id="btn-open-menu" onclick={() => (isMenuOpen = !isMenuOpen)}>
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
</nav>

{#if isMenuOpen}
  <div
    id="menu-mobile-wrapper"
    role="button"
    tabindex="0"
    onclick={() => (isMenuOpen = false)}
    onkeydown={(e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        isMenuOpen = false;
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
        <a class="navbar-item" href="#about">
          <div class="mobile-icon"><User /></div>
          {$translationStore.navbar.about}</a
        >
        <a class="navbar-item" href="#skills">
          <div class="mobile-icon"><Settings /></div>
          {$translationStore.navbar.skills}</a
        >
        <a class="navbar-item" href="#contact-section">
          <div class="mobile-icon"><Phone /></div>
          {$translationStore.navbar.contact}</a
        >
        <a class="navbar-item" href="#projects-container">
          <div class="mobile-icon"><Lightbulb /></div>
          {$translationStore.navbar.projects}</a
        >
      </div>
    </nav>
  </div>
{/if}

<!-- svelte-ignore css_unused_selector -->
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
    z-index: 3;
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
  #menu-mobile-wrapper {
    position: fixed;
    inset: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.5);
  }
  #menu-mobile {
    word-break: break-all;
    background-color: var(--bg-500);
    height: 100%;
    font-size: var(--fs-base);
    width: 75%;
    max-width: 250px;
  }
  #menu-mobile > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  .mobile-icon {
    color: var(--primary-500);
  }
  #navbar-options {
    display: flex;
    list-style: none;
    align-items: center;
    gap: var(--space-4);
  }
  .language-switcher {
    font-size: var(--fs-sm);
  }
  @media (min-width: 768px) {
    #menu-mobile-wrapper {
      display: none;
    }
    #menu-mobile {
      display: none;
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
