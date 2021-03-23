<script>
    import UI from './sections/UI.svelte'
    import DocTemplate from './DocTemplate.svelte'
    import Checkbox from './../../templates/Checkbox.svelte'

    let checkValue;
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

<UI />
<DocTemplate componentLabel={'checkboxes'}>
    <div slot="examples">
        <p class='description'>Default options</p>
        <Checkbox {options} bind:userSelected={checkValue} legend='Choose your starter'/>
        <p>{checkValue} is selected</p>
    </div>

</DocTemplate>