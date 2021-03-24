<script>
	import Radio from './Radio.svelte'
	
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

<Radio {options} fontSize={16} legend='Select a starter Pokemon' bind:userSelected={radioValue}/>
<p>
	{radioValue} is selected
</p>