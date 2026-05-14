<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import About from '$lib/components/About.svelte';
  import { onMount } from 'svelte';
  import { themeStore } from '$lib/stores/themeStore';
  onMount(() => {
    themeStore.loadTheme();
  });
</script>

<Nav />
<Hero />
<Skills />
<Projects />
<Contact />
<About />
