<script lang="ts">
  import { User } from '@lucide/svelte';
  import { translationStore } from '$lib/stores/langStore';
</script>

<div id="about" class="animate-on-scroll">
  <h2 class="section-title">
    <span data-i18n="about">{$translationStore.about.title}</span>
    <User size={30} />
  </h2>
  <div id="bento-grid">
    <div id="about-text-wrapper">
      <div id="about-text">
        <div id="profile-header">
          <a href="https://github.com/Veliz-P" target="_blank">
            <img id="github-profile-pic" src="/images/gitpic.jpg" alt="github profile pic" />
          </a>
          <div id="profile-details">
            <p>Veliz-P</p>
            <p id="location">
              Quito, Ecuador <i class="fa-solid fa-earth-americas"></i>
            </p>
          </div>
        </div>
        <div id="profile-comment">
          <p>
            {$translationStore.about.line1}
          </p>
          <p>
            {$translationStore.about.line2}
          </p>
          <p>
            {$translationStore.about.line3}
          </p>
        </div>
      </div>
    </div>
    <img class="bento-img" id="light-bulb" src="/images/light-bulb.jpg" alt="light-bulb" />
    <img class="bento-img" id="design" src="/images/design.jpg" alt="design" />
    <img class="bento-img" id="texture" src="/images/texture.jpg" alt="texture" />
    <img class="bento-img" id="planes" src="/images/planes.jpg" alt="planes" />
    <img class="bento-img" id="computer" src="/images/computer.jpg" alt="computer" />
  </div>
</div>

<style>
  #about {
    margin: var(--space-8) auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #about .section-title {
    margin-bottom: var(--space-8);
  }
  #bento-grid {
    display: grid;
    gap: var(--space-6);
    grid-template-areas: 'img-1 txt-1';
    margin: auto var(--space-10) !important;
    align-items: start;
    justify-items: center;
  }
  .bento-img {
    width: 100%;
    height: auto;
    border-radius: var(--rounded-xl);
    object-fit: cover;
  }
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes spin-gradient {
    to {
      --angle: 360deg;
    }
  }
  #about-text-wrapper {
    position: relative;
    border-radius: var(--rounded-xl);
  }
  #about-text-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(from var(--angle), transparent, var(--primary-400), transparent);
    border-radius: inherit;
    animation: spin-gradient 6s linear infinite;
    z-index: -1;
  }
  #about-text {
    margin: 2px;
    grid-area: txt-1;
    font-size: var(--fs-base);
    max-width: 600px;
    background-color: var(--bg-100);
    padding: var(--space-4) var(--space-6);
    border-radius: var(--rounded-xl);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :global(.dark) #about-text {
    background-color: var(--bg-600);
  }
  #profile-header {
    width: 100%;
    display: flex;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
    font-weight: bold;
  }
  #location {
    display: flex;
    gap: var(--space-1);
    font-size: var(--fs-sm);
    align-items: center;
    color: var(--text-muted);
    font-weight: 500;
  }
  #profile-details {
    display: flex;
    flex-direction: column;
  }
  #github-profile-pic {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: var(--rounded-full);
    box-shadow: 0px 6px 0px var(--primary);
  }
  #light-bulb {
    grid-area: img-1;
    display: none;
  }
  #design {
    grid-area: img-2;
    display: none;
  }
  #texture {
    grid-area: img-3;
    display: none;
  }
  #planes {
    grid-area: img-4;
    display: none;
  }
  #computer {
    grid-area: img-5;
    display: none;
  }
  #profile-comment p {
    margin-bottom: var(--space-4);
    width: 100%;
    text-align: left;
  }
  @media (min-width: 640px) {
    #bento-grid {
      gap: var(--space-8);
      grid-template-areas:
        'img-1 txt-1'
        'img-5 img-5';
      margin: auto var(--space-12) !important;
    }
    #light-bulb {
      height: auto;
      max-height: 250px;
      display: block;
    }
    #computer {
      max-height: 250px;
      display: block;
    }
  }
  @media (min-width: 768px) {
    #about {
      margin-top: calc(var(--space-16) + 1rem);
    }
    #bento-grid {
      gap: var(--space-10);
      grid-template-areas:
        'img-1 txt-1 img-3'
        'img-2 img-5 img-4';
    }
    #light-bulb {
      max-height: 350px;
    }
    #computer {
      max-height: 320px;
      height: 100%;
      display: block;
    }
    #texture {
      max-height: 350px;
      display: block;
    }
    #design {
      max-height: 170px;
      display: block;
    }
    #planes {
      max-height: 300px;
      display: block;
    }
    #about-text {
      padding: var(--space-6) var(--space-8);
    }
    #profile-header {
      margin-bottom: var(--space-6);
    }
  }
  @media (min-width: 1280px) {
    #about .section-title {
      margin-bottom: var(--space-10);
    }
    #bento-grid {
      gap: var(--space-12);
      grid-template-areas:
        'img-1 img-2 img-3'
        'img-1 txt-1 img-3'
        'img-4 img-5 img-5';
      margin: auto var(--space-12) !important;
    }
    #light-bulb {
      max-height: 420px;
    }
    #design {
      max-height: 250px;
    }
    #texture {
      max-height: 500px;
    }
    #planes {
      height: 100%;
      max-height: 300px;
    }
    #computer {
      max-height: 300px;
    }
  }
</style>
