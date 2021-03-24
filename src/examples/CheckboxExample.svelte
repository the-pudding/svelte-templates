<script>
	import Checkbox from './Checkbox.svelte'
	
	let value;
	
	const options = [{
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
	}]
</script>

<Checkbox {options} legend = 'Choose your starter' fontSize={16} bind:userSelected={value}/>

<p>
	Selected are: {value};
</p>