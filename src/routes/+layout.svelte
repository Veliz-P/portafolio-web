<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import '$lib/assets/styles/main.css';
  import {asset} from '$app/paths';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Veliz-P Portfolio" />
  <meta property="og:image" content={asset('/images/portfolio-portrait.png')} />
</svelte:head>

{@render children()}
