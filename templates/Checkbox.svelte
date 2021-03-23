<script>
    // based on suggestions from: 
    // A11y with Lindsey https://www.a11ywithlindsey.com/blog/create-custom-keyboard-accesible-checkboxes
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

    export let options;
    export let legend;
		export let userSelected = options
			.filter(d => d.selected === true)
			.map(d => d.value);
		export let fontSize = 16;
		export let flexDirection = 'column'
	
		let uniqueID = Math.floor(Math.random() * 100)
		
    export const slugify = (str = "") =>
        str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>


<!-- hiding default checkbox to style our own -->

    <div role="group" 
				 class="group-container"
				 aria-labelledby={`label-${uniqueID}`}
				 style="font-size:{fontSize}px; flex-direction:{flexDirection}" 
				 id={`group-${uniqueID}`}>
        <div class="legend" 
						 id={`label-${uniqueID}`}>{legend}
				</div>
			
        {#each options as {value, label, selected}}
			<div class="check" class:row={flexDirection === 'row'}>
				    <input class="sr-only" 
							 type="checkbox" 	
							 id={`${uniqueID}-${slugify(label)}`} 
							 value={value} 
							 bind:group={userSelected}>
        <label for={`${uniqueID}-${slugify(label)}`}>
            {label}
        </label>
			</div>

    {/each}
    </div>	


<style>
	
	.group-container{
			display: flex;
			align-items: baseline;
	}
	
	.legend {
        margin: 0;
        padding: 0;
        font-weight: bold;
    }
	
    label {
        user-select: none;
        line-height: 1.2em;
    }
	
	.check.row {
		margin-left: 1em;
	}
	
    .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
    }

    input[type='checkbox'] {
        position: absolute;
    }

    input[type='checkbox'] + label {
        display: block;
        position: relative;
        text-align: left;
    }

    input[type='checkbox'] + label::before {
        content: '';
        position: relative;
        display: inline-block;
        margin-right: 0.5em;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 1px solid var(--gray, #ccc);
        top: 0.2em;
    }

    input[type='checkbox'] + label::after {
        content: '';
        position: absolute;
        top: 0.45em;
        left: 0.25em;
        border-left: 0.15em solid var(--accent-color, #282828);
        border-bottom: 0.15em solid var(--accent-color, #282828);
        width: 0.45em;
        height: 0.24em;
        transform: rotate(-45deg) scale(0);
    }

    input[type='checkbox']:checked + label::after {
        transform: rotate(-45deg) scale(1);
    }

    input[type='checkbox']:focus + label::before {
        outline: var(--accent-color, #282828) solid 1px;
        border-radius: 0.1em;
    }

    input[type='checkbox']:disabled + label {
        color: darken(var(--gray, #ccc), 10);
    }

    input[type='checkbox']:disabled + label::before {
        background: var(--gray, #ccc)
    }

    /* gravy */

    
    input[type='checkbox'] + label::before {
        border-radius: 0.1em;
        transition: background 0.3s ease-out;
    }

    input[type='checkbox']:checked + label::before {
        background: var(--accent-color, #282828);
        border-radius: 0.1em;
        transition: background 0.3s ease-in;
    }

    input[type='checkbox'] + label::after {
        border-left: 0.15em solid white;
        border-bottom: 0.15em solid white;
        transition: transform 0.2s ease-in;
    }

    input[type='checkbox']:checked + label::after {
        transition: transform 0.2s ease-in;
    }

    input[type='checkbox']:focus + label::before {
        outline: var(--accent-color, #282828) solid 1px;
        box-shadow: 0 0px 0.5em var(--accent-color, #282828);
        border-radius: 0.1em;
    }


  </style>