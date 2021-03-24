<script>
	import ButtonSet from './ButtonSet.svelte';
	
	let radioValue;
	
	const options = [{
		value: 'green',
		label: 'Bulbasaur',
	}, {
		value: 'red',
		label: 'Charmander',
	}, {
		value: 'blue',
		label: 'Squirtle',
	}]
</script>

<ButtonSet {options} legend='Select a starter Pokemon' bind:userSelected={radioValue} />
<p>
	{radioValue} is selected
</p>