<script lang="ts">
  import {
    Settings,
    Code,
    Paintbrush,
    Brain,
    User,
    Database,
    Wrench,
    Globe,
    Cable,
    Monitor,
    Network
  } from '@lucide/svelte';
  import Django from '$lib/assets/icons/django.svg';
  import ExpressLight from '$lib/assets/icons/express-light.svg';
  import ExpressDark from '$lib/assets/icons/express-dark.svg';
  import Docker from '$lib/assets/icons/docker.svg';
  import Git from '$lib/assets/icons/git.svg';
  import Linux from '$lib/assets/icons/linux.svg';
  import HTML from '$lib/assets/icons/html.svg';
  import CSS from '$lib/assets/icons/css.svg';
  import JS from '$lib/assets/icons/javascript.svg';
  import TS from '$lib/assets/icons/typescript.svg';
  import Python from '$lib/assets/icons/python.svg';
  import Tailwind from '$lib/assets/icons/tailwind-css.svg';
  import Mongo from '$lib/assets/icons/mongodb.svg';
  import Node from '$lib/assets/icons/nodejs.svg';
  import Npm from '$lib/assets/icons/npm.svg';
  import MysqlLight from '$lib/assets/icons/mysql-light.svg';
  import MysqlDark from '$lib/assets/icons/mysql-dark.svg';
  import Postgres from '$lib/assets/icons/postgresql.svg';
  import Vuejs from '$lib/assets/icons/vuejs.svg';
  import { themeStore } from '$lib/stores/themeStore';
  import { translationStore } from '$lib/stores/langStore';
  let activeSkillSection = $state<'tech-stack' | 'what-i-can-do'>('tech-stack');
</script>

<div id="skills" class="animate-on-scroll">
  <h2 class="section-title">
    <Settings size={30} />
    <span> {$translationStore.skills.title}</span>
  </h2>
  <div class="slider-buttons">
    <button
      class={activeSkillSection === 'tech-stack' ? 'active-button' : ''}
      onclick={() => (activeSkillSection = 'tech-stack')}
    >
      {$translationStore.skills.sliderButtons.techStack}
    </button>
    <button
      class={activeSkillSection === 'what-i-can-do' ? 'active-button' : ''}
      onclick={() => (activeSkillSection = 'what-i-can-do')}
    >
      {$translationStore.skills.sliderButtons.whatICanDo}
    </button>
  </div>
  <div id="slider-wrapper">
    <div
      id="slider-tracker"
      style="transform: translateX({activeSkillSection === 'tech-stack' ? '0%' : '-100%'})"
    >
      <div class="skill-section">
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Code />
            </div>
            <span>{$translationStore.skills.techStackSection.programmingLangs}</span>
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              <img class="skill-icon" src={Python} alt="python icon" />
              <span class="skill-name">Python</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={JS} alt="javascript icon" />
              <span class="skill-name">Javascript</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={TS} alt="typescript icon" />
              <span class="skill-name">TypeScript</span>
            </div>
          </div>
        </div>

        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Paintbrush />
            </div>
            <span>{$translationStore.skills.techStackSection.markupStyles}</span>
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              <img class="skill-icon" src={HTML} alt="html icon" />
              <span class="skill-name">HTML</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={CSS} alt="css icon" />
              <span class="skill-name">CSS</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Tailwind} alt="tailwind css icon" />
              <span class="skill-name">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Brain />
            </div>
            Backend
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              <img class="skill-icon" src={Django} alt="django icon" />
              <span class="skill-name">Django REST Framework</span>
            </div>
            <div class="skill-item">
              <!-- TODO: Rename themeStore to darkModeStore-->
              <!-- if themeStore is true then darkMode is enabled -->
              {#if $themeStore}
                <img class="skill-icon" src={ExpressLight} alt="express icon" />
              {:else}
                <img class="skill-icon" src={ExpressDark} alt="express icon" />
              {/if}
              <span class="skill-name">Express</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Node} alt="node-js icon" />
              <span class="skill-name">Node.js</span>
            </div>
          </div>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <User />
            </div>
            Frontend
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              <img class="skill-icon" src={Vuejs} alt="vue js icon" />
              <span class="skill-name">Vue.js</span>
            </div>
          </div>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Database />
            </div>
            <span>{$translationStore.skills.techStackSection.databases}</span>
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              {#if $themeStore}
                <img class="skill-icon" src={MysqlLight} alt="mysql icon" />
              {:else}
                <img class="skill-icon" src={MysqlDark} alt="mysql icon" />
              {/if}
              <span class="skill-name">MySQL</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Postgres} alt="postgresql icon" />
              <span class="skill-name">PostgreSQL</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Mongo} alt="mongodb icon" />
              <span class="skill-name">MongoDB</span>
            </div>
          </div>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Wrench />
            </div>
            <span>{$translationStore.skills.techStackSection.tools}</span>
          </h3>
          <div class="skill-list">
            <div class="skill-item">
              <img class="skill-icon" src={Git} alt="git icon" />
              <span class="skill-name">Git</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Linux} alt="linux icon" />
              <span class="skill-name">Linux</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Docker} alt="docker icon" />
              <span class="skill-name">Docker</span>
            </div>
            <div class="skill-item">
              <img class="skill-icon" src={Npm} alt="npm icon" />
              <span class="skill-name">NPM</span>
            </div>
          </div>
        </div>
      </div>

      <div id="what-i-can-do" class="skill-section">
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Globe />
            </div>
            <span>{$translationStore.skills.whatICanDoSection.webApps.title}</span>
          </h3>
          <p>{$translationStore.skills.whatICanDoSection.webApps.description}</p>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Database />
            </div>
            <span>{$translationStore.skills.whatICanDoSection.dbManagement.title}</span>
          </h3>
          <p>{$translationStore.skills.whatICanDoSection.dbManagement.description}</p>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Cable />
            </div>
            <span>{$translationStore.skills.whatICanDoSection.apis.title}</span>
          </h3>
          <p>{$translationStore.skills.whatICanDoSection.apis.description}</p>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Monitor />
            </div>
            <span>{$translationStore.skills.whatICanDoSection.desktopApps.title}</span>
          </h3>
          <p>{$translationStore.skills.whatICanDoSection.desktopApps.description}</p>
        </div>
        <div class="skill-card">
          <h3 class="title-h3">
            <div class="skill-header-icon">
              <Network />
            </div>
            <span>{$translationStore.skills.whatICanDoSection.systemDesign.title}</span>
          </h3>
          <p>{$translationStore.skills.whatICanDoSection.systemDesign.description}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #skills {
    margin: auto var(--space-6);
    margin-bottom: var(--space-12);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  #skills .section-title {
    margin-bottom: var(--space-8);
    color: var(--primary-500);
  }
  .slider-buttons {
    position: sticky;
    top: 5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-4);
    background-color: var(--bg-400);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--rounded-xl);
    margin-bottom: var(--space-4);
    box-shadow: var(--shadow-sm);
  }
  .slider-buttons button {
    color: var(--primary-500);
    font-weight: 600;
    font-size: var(--fs-sm);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--rounded-lg);
    cursor: pointer;
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }
  .active-button {
    background-color: var(--primary-500) !important;
    color: var(--light) !important;
  }
  #slider-wrapper {
    overflow: hidden;
    width: 100%;
    max-width: 1300px;
  }
  #slider-tracker {
    display: flex;
    width: 100%;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
  }
  .skill-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
    min-width: 100%;
    transition: opacity 0.3s ease-in-out;
    padding: var(--space-4);
  }
  .skill-card {
    border-radius: var(--rounded);
    padding: var(--space-4);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
  }
  .skill-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skill-card h3 {
    margin-bottom: var(--space-6);
    text-align: left;
    width: 100%;
    text-transform: capitalize;
    font-family: 'Exo2';
    display: flex;
    gap: var(--space-3);
    align-items: center;
    font-size: var(--fs-base);
    font-weight: 500;
  }
  .skill-header-icon {
    font-size: var(--fs-md);
    color: var(--light);
    background-color: var(--dark);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--rounded-lg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(.dark) .skill-header-icon {
    background-color: var(--light);
    color: var(--dark);
    opacity: 0.9;
  }
  .skill-list {
    display: flex;
    justify-content: start;
    width: 100%;
    flex-wrap: wrap;
    gap: var(--space-4);
  }
  .skill-item {
    background-color: var(--bg-300);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--rounded-md);
    box-shadow: var(--shadow-md);
    border: 1.5px solid var(--border);
    border-bottom: inset 3px var(--border);
    position: relative;
    transition: border-color 0.3s ease-in-out;
  }
  .skill-item:hover,
  .skill-item:focus {
    border-color: var(--primary-500);
  }
  .skill-item:hover .skill-name,
  .skill-item:focus .skill-name {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
  .skill-name {
    position: absolute;
    top: 100%;
    margin-top: var(--space-2);
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--fs-sm);
    background-color: var(--primary-500);
    padding: var(--space-2);
    color: var(--light);
    font-weight: 600;
    border-radius: var(--rounded-lg);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;
  }
  #what-i-can-do p {
    color: var(--text-muted);
  }
  @media (min-width: 640px) {
    .skill-section {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-8);
    }
    #skills {
      margin-bottom: var(--space-16);
    }
  }
  @media (min-width: 1024px) {
    #skills {
      margin: auto var(--space-8);
      margin-bottom: var(--space-16);
    }
    #skills .section-title {
      margin-bottom: var(--space-10);
    }
    .skill-section {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-10);
      justify-content: center;
      align-items: center;
    }
    .skill-card {
      padding: var(--space-6) var(--space-8);
    }
    .skill-card h3 {
      gap: var(--space-4);
      font-size: var(--fs-md);
    }
  }
</style>
