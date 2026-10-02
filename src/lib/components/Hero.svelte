<script lang="ts">
  import { asset } from '$app/paths';
  import Cli from '$lib/components/hero-section/Cli.svelte';
</script>

<div class="animate-on-scroll" id="hero-section-wrapper">
  <section id="hero-section">
    <img id="profile-pic" src={asset('/images/hero-img.svg')} alt="Profile Pic" />
    <Cli/>
  </section>
</div>

<style>
  #hero-section-wrapper {
    opacity: 1;
    background-image: radial-gradient(
      var(--bg-700) 1.7000000000000002px,
      transparent 1.7000000000000002px
    );
    background-size: 34px 34px;
    width: 100%;
    padding: var(--space-4) var(--space-3);
    margin-bottom: var(--space-10);
    display: flex;
    justify-content: center;
  }

  :global(.dark) #hero-section-wrapper {
    background-image: radial-gradient(
      var(--bg-100) 1.7000000000000002px,
      transparent 1.7000000000000002px
    );
  }

  #hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    margin: var(--space-6);
    margin-top: var(--space-4);
    padding: var(--space-6) 0;
    border-right: solid 6px var(--primary);
    border-radius: var(--rounded-xl);
    gap: var(--space-8);
  }

  #profile-pic {
    width: auto;
    height: 100%;
    max-height: clamp(180px, 15vw, 350px);
    border-radius: var(--rounded-full);
    z-index: 1;
    position: relative;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    #hero-section-wrapper {
      padding: var(--space-10);
      margin-bottom: var(--space-16);
    }

    #hero-section {
      padding: var(--space-6) 0;
    }

    #profile-pic {
      max-height: clamp(250px, 25vw, 300px);
    }
  }

  @media (min-width: 864px) {
    #hero-section {
      padding: var(--space-6) 0;
      gap: var(--space-16);
      flex-direction: row;

    }
  }
    
</style>
