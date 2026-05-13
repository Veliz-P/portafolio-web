<script lang="ts">
  import { Lightbulb, CodeXml, ExternalLink } from '@lucide/svelte';
  import { translationStore } from '$lib/stores/langStore';
  import TS from '$lib/assets/icons/typescript.svg';
  import Tailwind from '$lib/assets/icons/tailwind-css.svg';
  import Vuejs from '$lib/assets/icons/vuejs.svg';

  interface Project {
    title: string;
    techStackIcons: unknown[];
    techStack: string[];
    description: string;
    shortDescription: string;
    linkDemo?: string;
    linkRepo?: string;
    linkVideo?: string;
    imgPath: string;
  }
  let projects = $state<Project[]>([]);
  $effect(() => {
    projects = [
      {
        title: $translationStore.projects.quickQuickNote.title,
        description: $translationStore.projects.quickQuickNote.description,
        shortDescription: $translationStore.projects.quickQuickNote.shortDescription,
        techStackIcons: [Vuejs, TS, Tailwind],
        techStack: ['Vue.js', 'TypeScript', 'CSS'],
        imgPath: '/images/quick-note-project-img.webp',
        linkRepo: 'https://github.com/Veliz-P/quick-quick-note',
        linkDemo: 'https://veliz-p.github.io/quick-quick-note/#/home'
      }
    ];
  });
</script>

<div id="projects-container" class="animate-on-scroll">
  <h2 class="section-title">
    <span>{$translationStore.projects.title}</span>
    <Lightbulb size={30} />
  </h2>
  <div id="projects">
    <div id="desktop-projects-view">
      {#each projects as project}
        <div class="desktop-project-card">
          <div class="ds-project-img-container">
            <img class="ds-project-img" loading="lazy" src={project.imgPath} alt={project.title} />
            <div class="ds-tech-list">
              {#each project.techStack as tech}
                <span>{tech}</span>
              {/each}
            </div>
          </div>
          <div class="ds-project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div class="ds-project-links">
              {#if project.linkRepo}
                <a href={project.linkRepo} target="_blank" class="ds-repo-link">
                  {$translationStore.projects.code}
                  <CodeXml />
                </a>
              {/if}
              {#if project.linkDemo}
                <a href={project.linkDemo} target="_blank" class="ds-demo-link"
                  >Demo <ExternalLink />
                </a>
              {/if}
              {#if project.linkVideo}
                <a href={project.linkVideo} target="_blank" class="ds-video-link">Video</a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #projects-container {
    margin-bottom: var(--space-12);
    background-color: var(--primary-600);
    padding: var(--space-10) 0;
    width: 100%;
    color: var(--light);
  }
  #projects-container .section-title {
    margin-bottom: var(--space-8);
  }
  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #desktop-projects-view {
    display: none;
  }
  @media (min-width: 768px) {
    #desktop-projects-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-8);
      width: 100%;
      max-width: 1050px;
    }
    .desktop-project-card {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--space-8);
      padding: var(--space-10);
      margin: auto var(--space-8);
      border: 2px dashed var(--primary-300);
      border-radius: var(--rounded-xl);
    }
    .ds-project-img-container {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      object-fit: contain;
    }
    .ds-project-img {
      width: 100%;
      height: auto;
      border-radius: var(--rounded-xl);
    }
    .ds-tech-list {
      display: flex;
      gap: var(--space-3);
    }
    .ds-tech-list span {
      background-color: var(--primary-500);
      padding: var(--space-1) var(--space-2);
      border-radius: var(--rounded-md);
      font-size: var(--fs-sm);
      font-weight: 600;
      box-shadow: var(--shadow-md);
    }
    .ds-project-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      height: 100%;
      justify-content: center;
      align-items: flex-start;
    }
    .ds-project-info h3 {
      font-size: var(--fs-xl);
    }
    .ds-project-info p {
      line-height: 2;
      text-wrap: balance;
    }
    .ds-project-links {
      display: flex;
      gap: var(--space-4);
    }
    .ds-project-links a {
      padding: var(--space-2) var(--space-4);
      text-decoration: none;
      border-radius: var(--rounded-md);
      font-weight: 500;
      color: var(--light);
      border: 1.5px solid var(--light);
      display: flex;
      gap: var(--space-2);
      align-items: center;
      transition: box-shadow 0.3s ease;
      font-size: var(--fs-sm);
    }
    .ds-project-links a:hover {
      box-shadow: var(--shadow-md);
    }
    .ds-project-links a:first-child {
      background-color: var(--dark);
      border-color: transparent;
    }
  }
</style>
