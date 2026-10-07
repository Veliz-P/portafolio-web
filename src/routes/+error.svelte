<script lang="ts">
  import { page } from '$app/state';
  import { House } from '@lucide/svelte';
  import { themeStore } from '$lib/stores/themeStore';
  import { translationStore } from '$lib/stores/langStore';
  import { onMount } from 'svelte';
  import { resolve } from '$app/paths';
  onMount(() => {
    themeStore.loadTheme()
  })
</script>

<main>
  <div id="error-page-pattern"></div>
  <section id="error-container">
    <div id="error-code">
      <h1>
        <span>Error</span> 
        <span>{page.status}</span>
      </h1>
    </div>
    <div id="error-message">
      <p>Upss...</p>
      {#if page.status === 404}
        <p>
          { $translationStore.errorPage.msg404 }
        </p>
      {:else}
        <p>{$translationStore.errorPage.defaultErrorMsg}</p>
      {/if}
      <p id="invitation">{$translationStore.errorPage.caption}</p>
      <a href={resolve('/')} aria-label="{$translationStore.errorPage.goHome}">
          <House size={20} />
          {$translationStore.errorPage.goHome}
      </a>
    </div>
  </section>
</main>

<style>
  #error-page-pattern {
    position: fixed;
    inset:0;
    background-color: #E5E5F7;
    opacity: 0.6;
    background: radial-gradient(circle, transparent 20%, #E5E5F7 20%, #E5E5F7 80%, transparent 80%, transparent), 
    radial-gradient(circle, transparent 20%, #E5E5F7 20%, #E5E5F7 80%, transparent 80%, transparent) 25px 25px, 
    linear-gradient(#444CF7 2px, transparent 2px) 0 -1px, 
    linear-gradient(90deg, #444CF7 2px, #E5E5F7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
    mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 75%);
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
  }
  :global(.dark) #error-page-pattern {
    background-color: #E5E5F7;
    opacity: 0.4;
    background: radial-gradient(circle, transparent 20%, #E5E5F7 20%, #E5E5F7 80%, transparent 80%, transparent), 
    radial-gradient(circle, transparent 20%, #E5E5F7 20%, #E5E5F7 80%, transparent 80%, transparent) 25px 25px, 
    linear-gradient(var(--bg-100) 2px, transparent 2px) 0 -1px, 
    linear-gradient(90deg, var(--bg-100) 2px, #E5E5F7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
    mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 75%);
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
  }
  #error-container {
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 700px;
    border-radius: var(--rounded-xl);
    background-color: var(--bg-300);
    box-shadow: var(--shadow-md);
  }
  #error-container > div {
    padding: var(--space-8);
    border-radius: var(--rounded-xl);
  }
  #error-code {
    color: var(--light);
    background-color: var(--primary-700);
    flex: 1
  }
  #error-code h1 {
    font-size: 4rem;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  #error-code h1 span:first-child {
    color: var(--primary-300);
    font-size: var(--fs-base);
    font-weight: 500;
    text-transform: uppercase;
  }
  #error-message {
    font-weight: 600;
    font-size: var(--fs-xl);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 3
  }
  #error-message p:first-child {
    margin-bottom: var(--space-2);
    font-size: var(--fs-base);
    color: var(--primary-600)
  }
  :global(.dark) #error-message p:first-child {
    color: var(--primary-400)
  }
  #error-message #invitation {
    color: var(--text-muted);
    font-size: var(--fs-base);
    font-weight: 400;
    margin-bottom: var(--space-8);
  }
  #error-message a {
    text-decoration: none;
    background-color: var(--dark);
    color: var(--light);
    font-weight: 600;
    font-size: var(--fs-base);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--rounded-lg);
    transition: background-color 0.3s ease-in-out;
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  @media (min-width: 480px) {
    #error-container {
      gap: var(--space-4)
    }
  }
</style>

