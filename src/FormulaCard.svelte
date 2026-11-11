<script>
  export let formula;
  export let info = {};
  export let compact = false;
</script>

<section class:formula-card-compact={compact} class:formula-card-note={info.kind === 'note'} class="formula-card" aria-label={`${info.label ?? 'Zależność'}: ${formula}`}>
  <div class="formula-card-heading">
    <span>{info.label ?? 'Zależność'}</span>
    <span class="formula-card-mark" aria-hidden="true">ƒ</span>
  </div>
  <p class="formula-equation"><code>{formula}</code></p>
  {#if info.symbols?.length}
    <dl class="formula-symbols" aria-label="Oznaczenia i jednostki">
      {#each info.symbols as item}
        <div>
          <dt>{item.symbol}</dt>
          <dd>{item.meaning}<span>{item.unit}</span></dd>
        </div>
      {/each}
    </dl>
  {/if}
  {#if info.constants?.length}
    <div class="formula-meta">
      <span class="formula-meta-label">Stałe</span>
      <ul>{#each info.constants as constant}<li>{constant}</li>{/each}</ul>
    </div>
  {/if}
  {#if info.notes?.length}
    <div class="formula-meta formula-notes">
      <span class="formula-meta-label">Pamiętaj</span>
      <ul>{#each info.notes as note}<li>{note}</li>{/each}</ul>
    </div>
  {/if}
</section>
