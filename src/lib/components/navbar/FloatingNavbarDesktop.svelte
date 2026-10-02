<script lang="ts">
  import { CodeXml, FolderKanban, Send, UserRound } from '@lucide/svelte';

  import { translationStore } from '$lib/stores/langStore';

  let { isScrolled }: { isScrolled: boolean } = $props();
</script>

<nav id="floating-navbar-desktop" class:hide-nav={!isScrolled}>
  <ul>
    <li>
      <a href="#skills">
        <CodeXml />
        <span>{$translationStore.navbar.skills}</span>
      </a>
    </li>
    <li>
      <a href="#projects-container">
        <FolderKanban />
        <span>{$translationStore.navbar.projects}</span>
      </a>
    </li>
    <li>
      <a href="#contact-section">
        <Send />
        <span>{$translationStore.navbar.contact}</span>
      </a>
    </li>
    <li>
      <a href="#about">
        <UserRound />
        <span>{$translationStore.navbar.about}</span>
      </a>
    </li>
  </ul>
</nav>

<style>
  #floating-navbar-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    #floating-navbar-desktop {
      display: flex;
      position: fixed;
      bottom: 3%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--bg-400);
      z-index: 2;
      border: 1px solid var(--border);
      border-radius: var(--rounded-2xl);
      transition: opacity 0.2s ease;
      box-shadow: var(--shadow-lg);
    }

    :global(.dark) #floating-navbar-desktop {
      background-color: var(--bg-600);
    }

    .hide-nav {
      opacity: 0;
      z-index: -1;
    }

    #floating-navbar-desktop ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-4);
      padding: var(--space-2) var(--space-3);
    }

    #floating-navbar-desktop ul li {
      font-size: var(--fs-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      font-weight: 500;
      padding: var(--space-1) var(--space-3);
      border-radius: var(--rounded-2xl);
      transition: background-color 0.2s ease-in;
    }

    #floating-navbar-desktop li:hover {
      background-color: var(--bg-100);
    }

    #floating-navbar-desktop a {
      text-decoration: none;
      color: var(--text);
      display: flex;
      gap: var(--space-2);
      align-items: center;
      position: relative;
    }

    #floating-navbar-desktop span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: -999;
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease-in;
    }

    #floating-navbar-desktop li:hover span {
      position: static;
      opacity: 1;
      z-index: 1;
      transform: translateX(0);
    }
  }
</style>
