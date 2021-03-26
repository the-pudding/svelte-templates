<script>
	import Autocomplete from './Autocomplete.svelte'
	
	let selected = '';
	
	const data = [{
		value: 'green',
		label: 'Bulbasaur',
	}, {
		value: 'red',
		label: 'Charmander',
	}, {
		value: 'blue',
		label: 'Squirtle',
	}, {
		value: 'purple',
		label: 'Ivysaur',
	}, {
		value: 'brown',
		label: 'Charmeleon',
	}, {
		value: 'yellow',
		label: 'Wartortle',
	}]
</script>

<Autocomplete {data} name='select a pokemon' bind:selected/>

<p>
	{#if selected.length}
		{selected} was selected
	{/if}
</p>