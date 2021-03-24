<script>
    // based on suggestions from:
    // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
  
    export let options;
    export let legend;
    export let userSelected = options[0].value;
    export let fontSize = 16;
    export let flexDirection = 'column'

    const uniqueID = `legend-${Math.floor(Math.random() * 100)}`
  
    const slugify = (str = "") =>
      str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  </script>
  

<div role="radiogroup" 
				 class="group-container"
				 aria-labelledby={`label-${uniqueID}`}
				 style="font-size:{fontSize}px; flex-direction:{flexDirection}" 
				 id={`group-${uniqueID}`}>
        <div class="legend" 
						 id={`label-${uniqueID}`}>{legend}
				</div>
	<div class='options'>
		 {#each options as { value, label } (value)}
	<div class='option'>
		      <input
        class="sr-only"
        type="radio"
        id={`${uniqueID}-${slugify(value)}`}
        bind:group={userSelected}
        value={slugify(value)} />
      <label class='option' for={`${uniqueID}-${slugify(value)}`}> {label} </label>
	</div>

    {/each}
   
	</div>
      
  </div>

  
  <style>
		:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}
    .group-container {
      border-radius: 2px;
      border: 1px solid var(--gray-darker);
      display: flex;
      flex-direction: row;
    }


    .legend {
      margin-right: 0.5rem;
      font-weight: bold;
    }

    label {
      user-select: none;
      line-height: 1.2em;
      font-weight: 400;
      color: var(--gray);
      min-width: 100px;
			max-width: 150px;
      text-align: center;
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
  
    input[type="radio"] {
      position: absolute;
    }
  
    input[type="radio"] + label {
      position: relative;
    }
		
		.options {
			display: flex;
		}
		
    .option > label{
        padding: 0.6em 1em;
        line-height: 1.3em;
        appearance: none;
        background: none;
        font-weight: 600;
        font-size: 0.9em;
        color: var(--accent-color);
        border: 1px solid var(--accent-color);
        border-radius: 0;
        outline: none;
        cursor: pointer;
    }
    .option + .option > label {
        border-left-width: 0;
    }
    .option:first-of-type > label {
        border-radius: 6px 0 0 6px;
    }
    .option:last-of-type > label {
        border-radius: 0 6px 6px 0;
    }
  
  
    input[type="radio"]:checked + label,
		input[type="radio"]:checked:hover + label{
        background: var(--accent-color);
        color: white;
    }
		
		input[type="radio"]:hover + label {
				background: #ececf1;
		}
		
    input[type="radio"]:focus + label {
        box-shadow: 0 0px 8px var(--accent-color);
    }  
    
    input[type="radio"]:disabled + label {
      color: darken(var(--gray), 10);
    }
  
    input[type="radio"]:disabled + label {
      background: var(--gray);
    } 
    </style>