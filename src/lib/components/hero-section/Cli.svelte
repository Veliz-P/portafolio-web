<script lang="ts">
import { translationStore } from '$lib/stores/langStore';
</script>

<div class="dark" id="cli">
  <div class="cli-header">
    <div class="cli-header-left">
      <span class="cli-dot red"></span>
      <span class="cli-dot yellow"></span>
      <span class="cli-dot green"></span>
    </div>
    <div class="cli-header-right">
      <span class="cli-header-title">terminal - bash</span>
    </div>
  </div>
  <div class="cli-body">
    <p class="cli-command">
      <span class="cli-prompt">veliz@dev:~$</span>
      bash load-presentation.sh
    </p>
    <div class="cli-output">
      {$translationStore.hero.loading}
    </div>
    <div class="presentation-output">
      <div>
        <h1>{$translationStore.hero.gretting} <span class="neon">Carlos Veliz</span></h1>
      </div>
      <div class="presentation-details">
        <div>
          <h4>{$translationStore.hero.workAsTitle}</h4>
          <ul>
            <li> + {$translationStore.hero.tagDeveloper}</li>
            <li> + Freelancer</li>
            <li> + {$translationStore.hero.tagTechnician}</li>
          </ul>
        </div>
        <div>
          <h4>{$translationStore.hero.myMotivationTitle}</h4>
          <p class="motivation-text">{$translationStore.hero.motivation}</p>
        </div>
      </div>
    </div>
    <p class="cli-output">
      {$translationStore.hero.done}
    </p>
  </div>
  <div class="cli-footer">
    <a href="#projects-container" id="hero-button" class="dark">
      <span>{$translationStore.hero.myProjects}</span>
    </a>
    <a href="#contact-section" id="hero-button-secondary">
      <span>{$translationStore.hero.contactMe}</span>
    </a>
    
  </div>
</div>

<style>
#cli {
  background-color: var(--dark);
  border-radius: var(--rounded-xl);
  padding: var(--space-4);
  color: #cbcbcb;
  box-shadow: var(--shadow-md); 
  border: 1px solid var(--border);
  font-size: var(--fs-sm);
  width: 100%;
  max-width: 650px;
}
.cli-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding-bottom: var(--space-2);
  font-size: var(--fs-xs);
}

.cli-dot {
  width: 12px;
  height: 12px;
  border-radius: var(--rounded-full);
}

.cli-dot.red {
  background-color: #ff5f56;
}

.cli-dot.yellow {
  background-color: #ffbd2e;
}

.cli-dot.green {
  background-color: #27c93f;
}

.cli-header-left {
  display: flex;
  gap: var(--space-2);
}

.cli-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4) 0;
}

.cli-prompt {
  color: var(--primary-400);
  font-weight: 800;
}

.cli-output {
  margin-left: var(--space-2);
}

.presentation-output {
  display: flex;
  flex-direction: column;
  margin-left: var(--space-2);
  padding: var(--space-2);
}

.presentation-output > div {
  border: 2px dashed var(--border);
  border-radius: var(--rounded-sm);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  justify-content: center;
}

.presentation-details h4 {
  font-weight: 600;
  font-size: var(--fs-sm);
  margin-bottom: var(--space-2);
  color: #cbcbcb;
}

.presentation-details ul {
  list-style: none;
  margin-left: var(--space-1);
}

.motivation-text {
  color: #cbcbcb;
  margin-left: var(--space-1);
}

h1 {
  font-size: var(--fs-2xl);
  font-weight: 800;
}

.cli-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #444;
  padding-top: var(--space-4);
  padding-bottom: var(--space-2);
  gap: var(--space-4)
}

#hero-button {
  background-color: var(--primary-700);
  padding: var(--space-1) var(--space-3);
  text-decoration: none;
  color: var(--light);
  border-radius: var(--rounded-lg);
  text-align: center;
  font-weight: 500
}

#hero-button-secondary {
  padding: var(--space-1) var(--space-3);
  color: var(--light);
  text-decoration: none;
  border-radius: var(--rounded-lg);
  border: 1px solid var(--border);
  text-align: center;
  font-weight: 500;
}

@media (min-width: 864px) {
  .presentation-output {
    flex-direction: row;
  }
}
</style>