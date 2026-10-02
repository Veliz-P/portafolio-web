<script lang="ts">
  import {
    CodeXml,
    FolderKanban,
    Menu,
    Moon,
    Send,
    Sun,
    UserRound,
  } from '@lucide/svelte';

  import { localStore, translationStore } from '$lib/stores/langStore';
  import { themeStore } from '$lib/stores/themeStore';

  let {
    isScrolled,
    onOpenMenu,
  }: {
    isScrolled: boolean;
    onOpenMenu: () => void;
  } = $props();
</script>

<nav id="navbar-desktop" class="dark" class:hide-nav={isScrolled}>
  <button aria-label="Open menu" id="btn-open-menu" onclick={onOpenMenu}>
    <Menu />
  </button>

  <ul id="navbar-items">
    <li>
      <a class="navbar-item" href="#skills">
        <CodeXml />
        <span>{$translationStore.navbar.skills}</span>
      </a>
    </li>
    <li>
      <a class="navbar-item" href="#projects-container">
        <FolderKanban />
        <span>{$translationStore.navbar.projects}</span>
      </a>
    </li>
    <li>
      <a class="navbar-item" href="#contact-section">
        <Send />
        <span>{$translationStore.navbar.contact}</span>
      </a>
    </li>
    <li>
      <a class="navbar-item" href="#about">
        <UserRound />
        <span>{$translationStore.navbar.about}</span>
      </a>
    </li>
  </ul>

  <ul id="navbar-options">
    <li>
      <button
        onclick={() => ($themeStore = !$themeStore)}
        aria-label="Toggle theme"
        class="btn-toggle-mode"
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
</nav>

<style>
  #navbar-desktop {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: var(--space-3) var(--space-4);
    border-bottom: 3px solid var(--primary-500);
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

  #navbar-options {
    display: flex;
    list-style: none;
    align-items: center;
    gap: var(--space-4);
  }

  @media (min-width: 768px) {
    #navbar-desktop {
      padding: var(--space-3) var(--space-4);
      transition: opacity 0.2s ease;
    }

    .hide-nav {
      opacity: 0;
      z-index: -1;
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
