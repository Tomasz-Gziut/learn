<script>
  import FormulaCard from './FormulaCard.svelte';

  export let example;
  export let index = 0;

  let stepDisclosures = [];
  let resetAnnouncement = '';

  function resetSteps() {
    stepDisclosures.forEach((disclosure, stepIndex) => {
      if (disclosure) disclosure.open = stepIndex === 0;
    });
    resetAnnouncement = `Etapy przykładu „${example.title}” otwarto ponownie od początku.`;
  }
</script>

<details class="tutorial-example" open={index === 0}>
  <summary class="tutorial-example-summary">
    <span class="tutorial-example-index">{String(index + 1).padStart(2, '0')}</span>
    <span class="tutorial-example-title">
      <span class="tutorial-category">{example.category}</span>
      <span>{example.title}</span>
    </span>
    <span class="expand-mark" aria-hidden="true">+</span>
  </summary>
  <div class="tutorial-example-body">
    <p class="tutorial-task">{example.task}</p>
    <FormulaCard formula={example.formula} info={example.formulaInfo} compact />
    <ol class="tutorial-steps">
      {#each example.steps as step, stepIndex}
        <li>
          <details class="tutorial-step" open={stepIndex === 0} bind:this={stepDisclosures[stepIndex]}>
            <summary>
              <span class="tutorial-step-index">{String(stepIndex + 1).padStart(2, '0')}</span>
              <span>{step.title}</span>
              <span class="tutorial-step-mark" aria-hidden="true">+</span>
            </summary>
            <div class="tutorial-step-content"><p>{step.text}</p></div>
          </details>
        </li>
      {/each}
    </ol>
    <div class="tutorial-controls">
      <button type="button" class="quiet-button" onclick={resetSteps}>Otwórz ponownie od początku <span aria-hidden="true">↻</span></button>
      <span class="tutorial-reset-status" role="status">{resetAnnouncement}</span>
    </div>
  </div>
</details>
