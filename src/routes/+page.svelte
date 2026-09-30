<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import About from '$lib/components/About.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { themeStore } from '$lib/stores/themeStore';
  let observer : IntersectionObserver | null = null;
  function setupObserver() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-active")
        }
      }) 
    }, 
    {
      threshold: 0.15
    })
    let elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer?.observe(el))
  }
  onMount(() => {
    themeStore.loadTheme();
    setupObserver()
  });
  onDestroy(() => {
    observer?.disconnect()
  })
</script>

<Nav />
<main>
  <Hero />
  <Skills />
  <Projects />
  <Contact />
  <About />
</main>
<Footer />

<!-- svelte-ignore css_unused_selector -->
<style>
  :global(.animate-on-scroll) {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.5s ease,
    transform 0.4s ease
  }
  :global(.animate-on-scroll.animation-active) {
    opacity: 1;
    transform: translateY(0);
  }
</style>