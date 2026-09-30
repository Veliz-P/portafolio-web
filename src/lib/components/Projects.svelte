<script lang="ts">
  import { FolderKanban, CodeXml, ExternalLink, CalendarDays, Gauge, Plus, ChevronsUp } from '@lucide/svelte';
  import { translationStore } from '$lib/stores/langStore';
  import { asset } from '$app/paths';
  import TS from '$lib/assets/icons/typescript.svg';
  import Vuejs from '$lib/assets/icons/vuejs.svg';
  import Svelte from '$lib/assets/icons/svelte.svg';
  import Tailwind from '$lib/assets/icons/tailwind-css.svg';
  import LucideIcon from '$lib/components/LucideIcon.svelte';
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
    completionTime: string;
    difficulty: string;
  }
  let activeDetailsPopup = $state<number | null>(null);
  let projects = $state<Project[]>([]);
  $effect(() => {
    projects = [
      {
        title: $translationStore.projects.quickQuickNote.title,
        description: $translationStore.projects.quickQuickNote.description,
        shortDescription: $translationStore.projects.quickQuickNote.shortDescription,
        techStackIcons: [Vuejs, TS, Tailwind],
        techStack: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
        imgPath: asset('/images/quick-note-project-img.webp'),
        linkRepo: 'https://github.com/Veliz-P/quick-quick-note',
        linkDemo: 'https://veliz-p.github.io/quick-quick-note/#/home',
        completionTime: $translationStore.projects.quickQuickNote.completionTime,
        difficulty: $translationStore.easy
      },
      {
        title: $translationStore.projects.portfolioWeb.title,
        description: $translationStore.projects.portfolioWeb.description,
        shortDescription: $translationStore.projects.portfolioWeb.shortDescription,
        techStackIcons: [Svelte, TS, Tailwind],
        techStack: ['Svelte', 'TypeScript', 'Tailwind CSS'],
        imgPath: asset('/images/portfolio-project-img.webp'),
        linkRepo: 'https://github.com/Veliz-P/portafolio-web',
        linkDemo: 'https://veliz-p.github.io/portafolio-web/',
        completionTime: $translationStore.projects.portfolioWeb.completionTime,
        difficulty: $translationStore.intermediate
      }
    ];
  });

  function toggleDetailsPopup(index: number) {
    if (activeDetailsPopup === index) {
      activeDetailsPopup = null;
    } else {
      activeDetailsPopup = index;
    }
  } 
</script>

<section id="projects-container" class="animate-on-scroll">
  <h2 class="section-title">
    <span>{$translationStore.projects.title}</span>
    <FolderKanban size={30} />
  </h2>
  <div id="projects">
    <div id="desktop-projects-view">
      {#each projects as project}
        <div class="desktop-project-card">
          <div class="ds-project-img-container">
            <img class="ds-project-img" loading="lazy" src={project.imgPath} alt={project.title} />
            <div class="ds-tech-list">
              {#each project.techStackIcons as icon}
                <img src={icon as string} alt="Tech Icon" width="25" height="25" />
              {/each}
            </div>
          </div>
          <div class="ds-project-info">
            <div>
              <h3>{project.title}</h3>
              <div class="stats">
                <div>
                  <CalendarDays size={18} />
                  <span>{project.completionTime}</span>
                </div>
                <div>
                  <Gauge size={18} />
                  <span>{project.difficulty}</span>
                </div>
              </div>
            </div>
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
      {#each projects as project, index}
        <div class="mobile-project-card" style="background-image: url({project.imgPath})">
          <div class="blur-overlay"></div>
          <div class="more-details-div">
            <div style="position: relative">
              <button aria-label="Open/close details" 
                onclick={() => toggleDetailsPopup(index)}>
                <LucideIcon 
                  Icon={ activeDetailsPopup === index ? ChevronsUp : Plus } 
                  size={20}
                />
              </button>
              {#if activeDetailsPopup === index}
                <ul class="more-details-content">
                  <li>
                    <CalendarDays size={18}/> {$translationStore.projects.completionTimeTitle}: <span>{project.completionTime}</span>
                  </li>
                  <li>
                    <Gauge size={18}/> {$translationStore.projects.difficultyTitle}: <span>{project.difficulty}</span>
                  </li>
                </ul>
              {/if}
            </div>
          </div>
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
</section>

<style>
  #projects-container {
    background-color: var(--primary-700);
    padding: var(--space-10) 0;
    width: 100%;
    color: var(--light);
    margin-bottom: var(--space-12);
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
    height: 50%;
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
    font-size: var(--fs-xs);
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
  .stats {
    display: flex;
    gap: var(--space-6);
    font-size: var(--fs-sm);
    margin-top: var(--space-2);
    margin-bottom: var(--space-1);
  }
  .stats div {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  .more-details-div {
    position: absolute;
    top: 0;
    left: 0;
    
  }
  .more-details-div button {
    margin: var(--space-4);
    padding: var(--space-2);
    border-radius: var(--rounded-full);
    background-color: var(--dark);
    color: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .more-details-content {
    position: absolute;
    width: max-content;
    top: 100%;
    left: 0;
    list-style: none;
    color: var(--text-muted);
    font-size: var(--fs-sm);
    margin-top: var(--space-2);
    margin-left: var(--space-4);
    padding: var(--space-2) var(--space-4);
    background-color: var(--dark);
    border-radius: var(--rounded-md);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    font-weight: 500;
  }
  .more-details-content li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  .more-details-content li span {
    font-weight: 400;
    color: var(--light);
  }
  @media (min-width: 768px) {
    #projects-container {
      margin-bottom: calc(var(--space-16) * 1.5);
      padding: var(--space-16) 0 !important;
      padding-bottom: calc(var(--space-16) * 2) !important;
    }
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
      border: 3px dashed var(--primary-300);
      border-radius: var(--rounded-xl);
    }
    .desktop-project-card:hover {
      border-style: solid;
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
      min-height: 300px;
      object-fit: cover;
    }
    .ds-tech-list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-3);
      background-color: var(--primary-900);
      margin-right: auto;
      padding: var(--space-3) var(--space-4);
      border-radius: var(--rounded-md);
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
      font-size: var(--fs-sm);
    }
  }
</style>
