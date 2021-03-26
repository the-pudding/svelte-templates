<script>
	// based on suggestions from: 
	// Adam Silver https://adamsilver.io/blog/building-an-accessible-autocomplete-control/
	import { ascending } from 'd3-array'
	import Icon from './Icon.svelte'
	export let data;
	export let name;
	export let fontSize = 16
	export let selected;
	export let clearButton = true;
	
	let filteredData = data.sort((a, b) => ascending(a.label, b.label))
	let uniqueID = Math.floor(Math.random() * 100)
	
	let resultCount = filteredData.length;
	let textInput;
	let menuOpen = false;
	
	let inputElement;
	let optionElements = []
	let highlightedIndex;
	let takeoverKeys = true;
	
	$: if (selected === '') textInput = '';
	
	const keysToIgnore = ['Escape', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Space', 'Enter', 'Tab', 'Shift']
	
	function handleKeyUp(event){
		if (!keysToIgnore.includes(event.key) && textInput.length){
			filteredData = data.filter(d => {
				// filter the data to include any where the label includes the text string typed so far
				return d.label.toLowerCase().includes(textInput.toLowerCase())
			})
			
			// open the menu
			menuOpen = true;

			resultCount = filteredData.length

		}
		
		if (event.key === 'Tab') {menuOpen = false};
		
		// if the down arrow is pressed, highlight the first option
		if (event.key === 'ArrowDown'){
				menuOpen = true;
				highlightedIndex = 0;
				optionElements[0].focus()
			}
	}
	
	function handleKeyDown(event){
		// hide menu if you tab away from input
		if (event.key === 'Tab') menuOpen = false;
		if (textInput.length === 1 && event.key === 'Backspace') {
			filteredData = data
			selected = null}
		if (event.key === 'Escape') menuOpen = false;
	}
	
	function handleInputFocus(){
		menuOpen != menuOpen
		console.log({menuOpen})
	}
	
	function handleOptionSelect(value, label){
		selected = value;
		textInput = label;
		menuOpen = false;
		inputElement.focus();
	}
	
	function handleOptionKeydown(event, value, label){
		const key = event.key
		const watchKeys = ['Enter', 'ArrowDown', 'ArrowUp', 'Escape']

		if (watchKeys.includes(key)){
				if (key === 'Enter') {
				handleOptionSelect(value, label)
				takeoverKeys = false
			}
			if (key === 'ArrowDown') {
				highlightedIndex = highlightedIndex < filteredData.length -1 ? highlightedIndex + 1 : filteredData.length - 1
				optionElements[highlightedIndex].focus()
				takeoverKeys = true;
			}

			if (key === 'Escape') {
				menuOpen = false;
				inputElement.focus();
			}
			
			if (key === 'ArrowUp' && highlightedIndex === 0) {
				inputElement.focus()
				highlightedIndex = null;
				takeoverKeys = true;
			} else if (key === 'ArrowUp' && highlightedIndex != 0){
				highlightedIndex -= 1
				optionElements[highlightedIndex].focus()
				takeoverKeys = true;
			} 
		}

		else takeoverKeys = false;
		
				console.log({takeoverKeys})

// prevent page down behavior on arrow down
				if (takeoverKeys === true) event.preventDefault();
		
	}
	
	function handleInputClick(){
		textInput = ''
		menuOpen = true;
		filteredData = data;
		highlightedIndex = null;
	}
	
	function handleBodyClick(node){
		const target = node.target
		if (target != inputElement && !optionElements.includes(target)){
			menuOpen = false
		}
	}
	
	function clearAutocomplete(){
		textInput = ''
		selected = ''
	}
	

</script>

<svelte:window on:click={handleBodyClick} />

<div class='field' style="font-size:{fontSize}px">
	<label for={`${uniqueID}-${name}`} >
		<span class='field-label'>{name}</span>
	</label>
	
	<select {name} 
					bind:value={selected}
					aria-hidden='true'
					tabindex="-1"
					class='visually-hidden'>
		{#each data as {label, value}}
			<option {value}>{label}</option>
		{/each}
	</select>
	
	<div class='autocomplete'>
		<input aria-owns={`autocomplete-options--${uniqueID}-${name}`}
					autocapitalize="none"
					 type="text"
					 autocomplete="off"
					 aria-autocomplete="list"
					 role="combobox"
					 id={`${uniqueID}-${name}`}
					 aria-expanded="false"
					 on:keyup={handleKeyUp}
					 on:keydown={handleKeyDown}
					 on:focus={handleInputFocus}
					 bind:value={textInput}
					 bind:this={inputElement}
					 on:click={handleInputClick}>

	
	<ul id={`autocomplete-options--${uniqueID}-${name}`}
			role="listbox"
			class:hidden={!menuOpen}>
		{#each filteredData as {label, value}, i}
			<li role="option"
					tabindex="-1"
					aria-selected={i === highlightedIndex}
					data-option-value={value}
					id={`autocomplete_{i}`}
					bind:this={optionElements[i]}
					on:click={() => {handleOptionSelect(value, label)}}
					on:keydown={(event) => handleOptionKeydown(event, value, label)}
					>{label}</li>
		{/each}
	</ul>
	
	<div aria-live='polite'
			 role='status'
			 class='visually-hidden'>
		{resultCount} results available
	</div>
		{#if clearButton === true}
		<button on:click={clearAutocomplete} aria-label='clear autocomplete search'>
			<Icon name='x' stroke='#fff' />
		</button>
		{/if}
	</div>
</div>

<style>
	.field {
		width: 95%;
	}
.autocomplete [role=listbox] {
  max-height: 12em;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
	
	.hidden {
		display: none;
	}
	
	label {
		font-size: 1em;
		font-weight: bold;
	}
	
	.visually-hidden {
			border: 0!important;
			clip: rect(0 0 0 0)!important;
			height: 1px!important;
			margin: -1px!important;
			overflow: hidden!important;
			padding: 0!important;
			position: absolute!important;
			width: 1px!important;
	}

	.autocomplete {
		position: relative;
		display: flex;
	}
	
	.autocomplete [type=text]{
		-webkit-appearance: none;
    border-radius: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.25;
    padding: .5em;
    border: 1px solid var(--gray, #ccc);
	}
	
	.autocomplete [role=listbox]{
		margin: 0;
    max-height: 12em;
    overflow-y: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    font-size: 100%;
    padding: 0;
    position: absolute;
    top: 2.4em;
    width: 100%;
    background-color: #fff;
    border-radius: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    z-index: 2;
    border: 1px solid var(--gray, #ccc);
	}
	
	.autocomplete [role=option]{
			line-height: 1.5em;
			padding: .5em;
			display: block;
			border-bottom: 1px solid var(--gray, #ccc);
			outline: 0;
			margin: 0;
	}
	
	.autocomplete [role=option][aria-selected="true"] {
  background-color: var(--accent-color, #282828);
  border-color: var(--gray, #ccc);
  color: #ffffff;
}

button {
	border-radius: 0;
	border: 1px solid var(--gray, #ccc);
	background-color: var(--gray-dark, #8b8b8b)
}
	</style>