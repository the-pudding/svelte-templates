<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
    export let headerText;

    let expanded = false
</script>

<div class="collapsible">
    <h3>
        <button aria-expanded={expanded} on:click={() => expanded = !expanded}>{headerText}
<svg viewBox="0 0 20 20" fill="none" >
<path class="vert" d="M10 1V19" stroke-width="2"/>
<path d="M1 10L19 10" stroke-width="2"/>
</svg>
        </button>
    </h3>
    
    <div class='contents' hidden={!expanded}>
        <slot></slot>
    </div>
</div>

<style>
  .collapsible {
    border-bottom: 1px solid #CAC5D6;
  }
	
	h3 {
		margin: 0;
        font-family: 'National 2 Narrow Web';
        font-size: 2em;
	}
	
  button {
    background-color: var(--background, #fff);
    color: #3E3454;
    display: flex;
		justify-content: space-between;
        align-items: baseline;
    width: 100%;
		border: none;
		margin: 0;
		padding: 0.5em 0;
  }

  button[aria-expanded="true"] {
    border-bottom: 1px solid #CAC5D6;
  }

    button[aria-expanded="true"] .vert {
        display: none;
    }

    button:focus svg{
        outline: 2px solid;
    }

    button [aria-expanded="true"] rect {
        fill: currentColor;
    }

    svg {
        height: 0.7em;
		width: 0.7em;
    }

    svg path{
        stroke: #3E3454;
    }

    .contents {
        width: 100%;
        background-color: #F1F9FD;
        font-size: 16px;
    }
</style>