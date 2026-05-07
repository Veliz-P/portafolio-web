<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import '$lib/assets/styles/main.css';
  export const prerender = true;
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
