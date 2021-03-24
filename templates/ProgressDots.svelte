<script>
  import { range } from "d3";

  export let numberOfItems = 0;
  export let activeIndex = 0;
	export let fontSize = 16;
	
</script>

<div class="items" style="font-size:{fontSize}px">
  {#each new Array(+numberOfItems).fill(0) as _, i}
    <button
      class="item"
      class:active={activeIndex == i}
			aria-label={`step ${i + 1} of ${numberOfItems}`}
      on:click={() => (activeIndex = i)} />
  {/each}
  <div class="items-text">{+activeIndex + 1} of {numberOfItems}</div>
</div>

<style>

	
  .items {
    display: flex;
    align-items: center;
    margin-left: 1em;
    margin-top: 1em;
  }
  .item {
    display: block;
    position: relative;
    appearance: none;
    background: none;
    outline: none;
    height: 1.3em;
    width: 1.3em;
    margin-right: 0.6em;
    margin-bottom: 0;
    padding: 0;
    flex: 0 0 1.3em;
    border-radius: 100%;
    border: 1px solid var(--gray, #ccc);
    cursor: pointer;
  }
  .item:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0.6em;
    width: 0.6em;
    border-radius: 100%;
    background: var(--accent-color, #282828);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease-out;
  }
	.item:focus{
		border: 2px solid var(--accent-color, #282828);
	}
	.item.active:before {
    transform: translate(-50%, -50%) scale(1);
  }
  .items-text {
    font-size: 0.7em;
    margin-left: 0.3em;
    color: var(--gray);
  }
</style>
