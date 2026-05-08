<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { onMount } from 'svelte';
  import { themeStore } from '$lib/stores/themeStore';
  function loadTheme() {
    document.documentElement.classList.toggle('dark', $themeStore);
  }
  onMount(() => {
    loadTheme();
  });
</script>

<Nav />
