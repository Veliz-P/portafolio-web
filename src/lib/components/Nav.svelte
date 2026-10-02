<script lang="ts">
  import { onMount } from 'svelte';

  import DesktopNavbar from '$lib/components/navbar/DesktopNavbar.svelte';
  import FloatingNavbarDesktop from '$lib/components/navbar/FloatingNavbarDesktop.svelte';
  import MobileMenu from '$lib/components/navbar/MobileMenu.svelte';

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);

  const handleScroll = () => {
    isScrolled = window.scrollY > 50;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<FloatingNavbarDesktop {isScrolled} />
<DesktopNavbar
  {isScrolled}
  onOpenMenu={() => (isMenuOpen = !isMenuOpen)}
/>
<MobileMenu bind:isMenuOpen />
