<script lang="ts">
  import { translationStore } from '$lib/stores/langStore';
</script>

<div id="hero-section-wrapper">
  <div id="hero-section">
    <img id="profile-pic" src="/images/hero-img.svg" alt="Profile Pic" />
    <div id="hero-text">
      <h1 id="hero-title">
        <div>{$translationStore.hero.gretting}</div>
        <div class="neon">{$translationStore.hero.name}</div>
      </h1>
      <div class="tags">
        <span>{$translationStore.hero.tagDesigner}</span>
        <span>{$translationStore.hero.tagDeveloper}</span>
        <span>{$translationStore.hero.tagTechnician}</span>
      </div>
      <div id="presentation-text">
        <p>
          {$translationStore.hero.description}
        </p>
      </div>
      <div class="links">
        <a href="#contact-section" id="hero-button" class="dark">
          <span> {$translationStore.hero.contactMe}</span>
        </a>
        <a href="#projects-container" id="hero-button-secondary">
          <span> {$translationStore.hero.myProjects}</span>
        </a>
      </div>
    </div>
  </div>
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
    padding: var(--space-4);
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
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
    margin: var(--space-6);
    margin-top: var(--space-4);
    padding: var(--space-6) var(--space-8);
    border-right: solid 6px var(--primary);
    border-radius: var(--rounded-xl);
    gap: var(--space-8);
  }
  #hero-title * {
    text-wrap: balance;
    font-size: var(--fs-2xl);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  #hero-title {
    margin-bottom: var(--space-6);
  }
  #hero-button {
    background-color: var(--dark);
    padding: var(--space-2) var(--space-4);
    text-decoration: none;
    color: var(--light);
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--fs-sm);
    border: 1.5px solid var(--border);
    border-radius: var(--rounded-lg);
    transition: background-color 0.2s ease-in-out;
    text-align: center;
  }
  #hero-button:hover {
    background-color: var(--primary-500);
  }
  #hero-button-secondary {
    padding: var(--space-2) var(--space-4);
    color: var(--primary-600);
    text-transform: uppercase;
    font-weight: bold;
    text-underline-offset: var(--space-1);
    text-decoration-thickness: 2.5px;
    text-decoration-color: var(--primary-600);
    text-align: center;
  }
  :global(.dark) #hero-button-secondary {
    color: var(--primary-500);
    text-decoration-color: var(--primary-500);
  }
  #profile-pic {
    width: auto;
    height: 100%;
    max-height: clamp(250px, 15vw, 350px);
    border-radius: var(--rounded-full);
    z-index: 1;
    position: relative;
    object-fit: contain;
  }
  #hero-text {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  #presentation-text {
    display: flex;
    align-items: center;
    line-height: 2;
    margin-bottom: var(--space-6);
    text-align: center;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-3);
    width: 100%;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    font-size: var(--fs-sm);
    justify-content: center;
    margin-bottom: var(--space-2);
  }
  .tags span {
    background-color: var(--bg-500);
    border-radius: var(--rounded-lg);
    padding: var(--space-1) var(--space-2);
    font-weight: 600;
    border: 1px solid transparent;
  }
  :global(.dark) .tags span {
    background-color: var(--bg-500);
    border: 1px solid var(--border);
  }
  @media (min-width: 768px) {
    #hero-section-wrapper {
      padding: var(--space-10);
      margin-bottom: var(--space-16);
    }
    #hero-section {
      margin: var(--space-8);
      padding: var(--space-6) var(--space-10);
      gap: var(--space-10);
      flex-direction: row;
    }
    #hero-title * {
      font-size: var(--fs-3xl);
      text-align: left;
    }
    #hero-button {
      padding: var(--space-2) var(--space-4);
    }
    #hero-text {
      display: flex;
      flex-direction: column;
    }
    #presentation-text {
      margin-bottom: var(--space-8);
      text-align: left;
      width: 100%;
      max-width: 650px;
    }
    #profile-pic {
      max-height: clamp(250px, 30vw, 300px);
    }
    .links {
      justify-content: flex-start;
    }
    .tags {
      justify-content: flex-start;
    }
  }
</style>
