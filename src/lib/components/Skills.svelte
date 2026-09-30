<script lang="ts">
  import {
    CodeXml,
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
  import LucideIcon from '$lib/components/LucideIcon.svelte'; // Reusable Icon component for dynamic rendering
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
  import Nuxt from "$lib/assets/icons/nuxt.svg"
  import Svelte from '$lib/assets/icons/svelte.svg';
  import Postman from '$lib/assets/icons/postman.svg';
  import VsCode from '$lib/assets/icons/vscode.svg';
  import { themeStore } from '$lib/stores/themeStore';
  import { translationStore } from '$lib/stores/langStore';
  import type { LucideProps} from '@lucide/svelte';
  import type { Component } from 'svelte';
  let activeSkillSection = $state<'tech-stack' | 'what-i-can-do'>('tech-stack');
  interface TechStackItem {
    name: string;
    icon: string;
  }
  interface TechStackCard {
    title: string;
    icon: Component<LucideProps>;
    iconList: TechStackItem[];
  }
  interface WhatICanDoCard {
    title: string;
    icon: Component<LucideProps>;
    description: string;
  }

  let techStackCards : TechStackCard[] = $derived.by(() => 
  [
    {
      title: $translationStore.skills.techStackSection.programmingLangs,
      icon: CodeXml,
      iconList: [
        { name: 'Python', icon: Python },
        { name: 'Javascript', icon: JS },
        { name: 'TypeScript', icon: TS }
      ]
    },
    {
      title: $translationStore.skills.techStackSection.markupStyles,
      icon: Paintbrush,
      iconList: [
        { name: 'HTML', icon: HTML },
        { name: 'CSS', icon: CSS },
        { name: 'Tailwind CSS', icon: Tailwind }
      ]
    },
    {
      title: 'Backend',
      icon: Brain,
      iconList: [
        { name: 'Django REST Framework', icon: Django },
        { name: 'Express', icon: $themeStore ? ExpressLight : ExpressDark },
        { name: 'Node.js', icon: Node }
      ]
    },
    {
      title: 'Frontend',
      icon: User,
      iconList: [
        { name: 'Vue.js', icon: Vuejs },
        { name: 'Nuxt.js', icon: Nuxt },
        { name: 'Svelte', icon: Svelte }
      ]
    },
    {
      title: $translationStore.skills.techStackSection.databases,
      icon: Database,
      iconList: [
        { name: 'MySQL', icon: $themeStore ? MysqlLight : MysqlDark },
        { name: 'PostgreSQL', icon: Postgres },
        { name: 'MongoDB', icon: Mongo }
      ]
    },
    {
      title: $translationStore.skills.techStackSection.tools,
      icon: Wrench,
      iconList: [
        { name: 'Git', icon: Git },
        { name: 'Linux', icon: Linux },
        { name: 'Docker', icon: Docker },
        { name: 'NPM', icon: Npm },
        { name: 'Postman', icon: Postman },
        { name: 'VS Code', icon: VsCode }
      ]
    }
  ])
  let whatICanDoCards: WhatICanDoCard[] = $state([
    {
      title: $translationStore.skills.whatICanDoSection.webApps.title,
      icon: Globe,
      description: $translationStore.skills.whatICanDoSection.webApps.description
    },
    {
      title: $translationStore.skills.whatICanDoSection.dbManagement.title,
      icon: Database,
      description: $translationStore.skills.whatICanDoSection.dbManagement.description
    },
    {
      title: $translationStore.skills.whatICanDoSection.apis.title,
      icon: Cable,
      description: $translationStore.skills.whatICanDoSection.apis.description
    },
    {
      title: $translationStore.skills.whatICanDoSection.desktopApps.title,
      icon: Monitor,
      description: $translationStore.skills.whatICanDoSection.desktopApps.description
    },
    {
      title: $translationStore.skills.whatICanDoSection.systemDesign.title,
      icon: Network,
      description: $translationStore.skills.whatICanDoSection.systemDesign.description
    }
  ])
</script>

<section id="skills" class="animate-on-scroll">
  <h2 class="section-title">
    <CodeXml size={30} />
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
      <div class="skill-section" style="opacity: {activeSkillSection === 'tech-stack' ? 1 : 0}">
        {#each techStackCards as card}
          <div class="skill-card">
            <h3 class="title-h3">
              <div class="skill-header-icon">
                  <LucideIcon Icon={card.icon} />
              </div>
              <span>{card.title}</span>
            </h3>
            <div class="skill-list">
              {#each card.iconList as item}
                <div class="skill-item">
                  <img class="skill-icon" src={item.icon} alt="{item.name} icon" />
                  <span class="skill-name">{item.name}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div id="what-i-can-do" class="skill-section">
        {#each whatICanDoCards as card}
          <div class="skill-card">
            <h3 class="title-h3">
              <div class="skill-header-icon">
                  <LucideIcon Icon={card.icon} />
              </div>
              <span>{card.title}</span>
            </h3>
            <p>{card.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

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
  }
  .slider-buttons {
    position: sticky;
    top: 5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
    /* background-color: var(--bg-400); */
    padding: var(--space-3) var(--space-4);
    border-radius: var(--rounded-xl);
    margin-left: var(--space-3);
    margin-right: var(--space-3);
    margin-bottom: var(--space-4);
    /* box-shadow: var(--shadow-sm); */
  }
  /* :global(.dark) .slider-buttons {
    background-color: var(--bg-500);
  } */
  .slider-buttons button {
    /* color: var(--text-muted); */
    font-weight: 600;
    font-size: var(--fs-sm);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--rounded-lg);
    cursor: pointer;
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
    border: 2px solid var(--border);
    background-color: var(--bg-200);
  } 
  :global(.dark) .slider-buttons button {
    background-color: var(--bg-800);
  }
  .active-button {
    background-color: var(--primary-200) !important;
    color: var(--primary-800) !important;
    border-color: var(--primary-500) !important;
  }
  :global(.dark) .active-button {
    background-color: var(--primary-700) !important;
    color: var(--primary-100) !important;
    border-color: var(--primary-500) !important;
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    transition: border-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
    flex-wrap: wrap;
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
    width: 100px;
    font-size: var(--fs-sm);
    background-color: var(--primary-700);
    padding: var(--space-2);
    color: var(--light);
    font-weight: 600;
    border-radius: var(--rounded-lg);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;
    z-index: 1;
  }
  #what-i-can-do p {
    color: var(--text-muted);
  }
  @media (min-width: 480px) {
    .skill-section {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
  @media (min-width: 640px) {
    .skill-section {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-8);
    }
    .skill-card:hover {
      border-color: var(--primary-600);
      cursor: pointer;
    }
    .skill-card:hover ~ .skill-card{
      opacity: 0.4;
    }
    #skills {
      margin-bottom: calc(var(--space-16) * 2.5) !important;
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
