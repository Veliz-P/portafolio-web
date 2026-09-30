<script lang="ts">
  import { translationStore } from '$lib/stores/langStore';
  import { onMount, onDestroy } from 'svelte';
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
    <p>
        &copy; {new Date().getFullYear()}, Carlos Veliz | {$translationStore.footer.rightsReserved}
    </p>
</footer>

<style>
:global(.dark) footer {
    background-color: var(--bg-400);

}
footer {
    margin-top: 6rem;
    background-color: var(--bg-500);
    display: flex;
    justify-content: center;
    padding: var(--space-3) var(--space-2);
    color: var(--text-muted);
    font-size: var(--fs-sm);
    font-weight: 500;
    text-align: center;
}
@media (min-width: 768px) {
    footer {
        margin-top: 8rem;
    }
}
</style>
