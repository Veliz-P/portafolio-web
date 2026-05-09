<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import { onMount } from 'svelte';
  import { themeStore } from '$lib/stores/themeStore';
  onMount(() => {
    themeStore.loadTheme();
  });
</script>

<Nav />

<Hero />
