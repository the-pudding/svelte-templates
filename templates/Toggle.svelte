<script>
  export let options = [];
  export let value = null;
  export let onChange = () => {};

  const onChangeLocal = option => {
    onChange(option);
    value = option.id;
  };
</script>

<div class="c">
  {#each options as option}
    <button
      class="option"
      class:selected={option.id == value}
      on:click={() => onChangeLocal(option)}>
      {option.label}
    </button>
  {/each}
</div>

<style>
  .c {
    display: flex;
    align-items: center;
  }
  button.option {
    /* flex: 1; */
    padding: 0.6em 1em;
    line-height: 1.3em;
    appearance: none;
    /* background: var(--accent-light); */
    background: none;
    font-weight: 600;
    font-size: 0.9em;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    border-radius: 0;
    outline: none;
    cursor: pointer;
  }
  .option:hover {
    background: #ececf1;
  }
  .option.selected,
  .option.selected:hover {
    background: var(--accent-color);
    color: white;
  }
  .option + .option {
    border-left-width: 0;
  }
  .option:first-of-type {
    border-radius: 6px 0 0 6px;
  }
  .option:last-of-type {
    border-radius: 0 6px 6px 0;
  }
</style>
