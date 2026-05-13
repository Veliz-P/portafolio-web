<script lang="ts">
  import { Lightbulb, CodeXml, ExternalLink } from '@lucide/svelte';
  import { translationStore } from '$lib/stores/langStore';
  import TS from '$lib/assets/icons/typescript.svg';
  import Css from '$lib/assets/icons/css.svg';
  import Vuejs from '$lib/assets/icons/vuejs.svg';
  import Svelte from '$lib/assets/icons/svelte.svg';
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
        techStackIcons: [Vuejs, TS, Css],
        techStack: ['Vue.js', 'TypeScript', 'CSS'],
        imgPath: '/images/quick-note-project-img.webp',
        linkRepo: 'https://github.com/Veliz-P/quick-quick-note',
        linkDemo: 'https://veliz-p.github.io/quick-quick-note/#/home'
      },
      {
        title: $translationStore.projects.portfolioWeb.title,
        description: $translationStore.projects.portfolioWeb.description,
        shortDescription: $translationStore.projects.portfolioWeb.shortDescription,
        techStackIcons: [Svelte, TS, Css],
        techStack: ['Svelte', 'TypeScript', 'CSS'],
        imgPath: '/images/portfolio-project-img.webp',
        linkRepo: 'https://github.com/Veliz-P/portafolio-web'
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
            <div class="project-links">
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
    <div id="mobile-projects-view">
      {#each projects as project}
        <div class="mobile-project-card" style="background-image: url({project.imgPath})">
          <div class="blur-overlay"></div>
          <div class="tech-icon-list">
            {#each project.techStackIcons as icon}
              <img src={icon as string} alt="Tech Icon" width="25" height="25" />
            {/each}
          </div>
          <div class="mb-card-content">
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <div class="project-links">
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
  #mobile-projects-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-10);
    width: 80%;
  }
  .mobile-project-card {
    position: relative;
    width: 100%;
    min-height: 350px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--rounded-xl);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    outline: var(--space-2) solid var(--primary-400);
    box-shadow: var(--shadow-lg);
  }
  .blur-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    border-radius: var(--rounded-xl);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15));
  }
  .mb-card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-6);
    z-index: 2;
  }
  .mb-card-content h3 {
    font-size: var(--fs-lg);
  }
  .mb-card-content p {
    font-size: var(--fs-sm);
  }
  .project-links {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-2);
    flex-wrap: wrap;
  }
  .project-links a {
    padding: var(--space-2) var(--space-3);
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
  .project-links a:hover {
    box-shadow: var(--shadow-md);
  }
  .project-links a:first-child {
    background-color: var(--dark);
    border-color: transparent;
  }
  .tech-icon-list {
    position: absolute;
    top: 0;
    right: 0;
    margin: var(--space-4);
    padding: var(--space-1) var(--space-3);
    display: flex;
    gap: var(--space-2);
    border-radius: var(--rounded-xl);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 5px 30px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  @media (min-width: 768px) {
    #mobile-projects-view {
      display: none;
    }
    #desktop-projects-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-12);
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
      flex: 1;
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
      flex: 1;
    }
    .ds-project-info h3 {
      font-size: var(--fs-xl);
    }
    .ds-project-info p {
      line-height: 2;
      text-wrap: balance;
    }
    .project-links {
      margin-top: 0;
    }
    .project-links a {
      padding: var(--space-2) var(--space-4);
    }
  }
</style>
