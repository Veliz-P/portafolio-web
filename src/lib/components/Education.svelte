<script lang="ts">
  import { Building2, CalendarDays, GraduationCap } from '@lucide/svelte';
  import { translationStore } from '$lib/stores/langStore';
</script>

<section id="education" class="animate-on-scroll">
  <h2 class="section-title">
    <GraduationCap size={30} />
    <span>{$translationStore.education.title}</span>
  </h2>
  <div class="timeline">
    {#each $translationStore.education.items as item}
      <article class="timeline-item">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card">
          <span class="timeline-period">
            <CalendarDays size={18} />
            {item.period}
          </span>
          <h3>{item.title}</h3>
          <p class="timeline-institution">
            <span class="institution-icon"><Building2 size={18} /></span>
            <span>{item.institution}</span>
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  #education {
    margin: var(--space-12) auto;
    padding: 0 var(--space-6);
    max-width: 1050px;
  }
  #education .section-title {
    margin-bottom: var(--space-8);
  }
  .timeline {
    display: flex;
    flex-direction: column;

    gap: var(--space-8);
    padding: var(--space-4);
  }
  .timeline-item {
    position: relative;
    height: 100% ;
  }
  
  .timeline-card {
    background-color: var(--primary-100);
    border: 1px solid var(--primary-600);
    border-radius: var(--rounded-xl);
    padding: var(--space-5) var(--space-6);
    box-shadow: var(--shadow-md);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
  :global(.dark) .timeline-card {
    background-color: var(--bg-800);
    border-color: var(--primary-400);
  }
  .timeline-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  .timeline-period {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    color: var(--primary-800);
    font-size: var(--fs-xs);
    background-color: var(--primary-200);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--rounded-md);
    font-weight: 700;
    letter-spacing: 0.03em;
  }
  :global(.dark) .timeline-period {
    color: var(--primary-100);
    background-color: var(--primary-700);
  }
  .timeline-card h3 {
    font-size: var(--fs-md);
    font-weight: 700;
    line-height: 1.4;
  }
  .timeline-institution {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: var(--space-2);
    color: var(--text-muted);
    font-size: var(--fs-sm);
    line-height: 1.4;
  }
  .institution-icon {
    display: flex;
    flex-shrink: 0;
  }
  :global(.dark) .timeline-dot {
    box-shadow: 0 0 0 4px var(--bg-800);
  }
  @media (min-width: 468px) {
    .timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media (min-width: 640px) {
    #education {
      margin: var(--space-16) auto calc(var(--space-16) * 1.5);
    }
    #education .section-title {
      margin-bottom: var(--space-16);
    }
    .timeline {
      gap: var(--space-8);
    }
    .timeline-card {
      padding: var(--space-6) var(--space-8);
    }
    .timeline-card h3 {
      font-size: var(--fs-lg);
    }
  }
  @media (min-width: 900px) {
    .timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }
    .timeline-dot {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border-radius: var(--rounded-full);
      background-color: var(--primary-700);
      border: 3px solid var(--primary-100);
      box-shadow: 0 0 0 4px var(--bg-200);
      z-index: 1;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--primary-300);
      left: 50%;
      transform: translateX(-50%);
    }
    .timeline-item {
      position: relative;
      width: 50%;
    }
    .timeline-item:nth-child(odd) {
      align-self: flex-start;
      padding-right: var(--space-10);
    }
    .timeline-item:nth-child(even) {
      align-self: flex-end;
      padding-left: var(--space-10);
    }
    .timeline-item:nth-child(odd) .timeline-dot {
      right: -8px;
    }
    .timeline-item:nth-child(even) .timeline-dot {
      left: -8px;
    }
  }
</style>
