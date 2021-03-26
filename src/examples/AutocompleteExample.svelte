<script>
	import Autocomplete from './Autocomplete.svelte'
	
	let selected = '';
	
	const data = [{
		value: 'green',
		label: 'Bulbasaur',
		selected: false
	}, {
		value: 'red',
		label: 'Charmander',
		selected: true
	}, {
		value: 'blue',
		label: 'Squirtle',
		selected: true
	}, {
		value: 'purple',
		label: 'Ivysaur',
		selected: false
	}, {
		value: 'brown',
		label: 'Charmeleon',
		selected: true
	}, {
		value: 'yellow',
		label: 'Wartortle',
		selected: true
	}]
</script>

<Autocomplete {data} name='select a pokemon' bind:selected/>

<p>
	{#if selected.length}
		{selected} was selected
	{/if}
</p>