<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Checkbox from './../../../templates/Checkbox.svelte'
    import Example from '!!raw-loader!./../../examples/CheckboxExample.svelte'



    $: console.log({Example})

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


    let propDescriptions = [['options', 'Array of Objects', 'Specifies label and value of each checkbox'],
    [ 'legend', 'string', 'Brief description of the group of checkboxes'], ['userSelected', 'Array', 'Bindable value for accessing selected checkbox values'],
    ['fontSize', 'number', 'Size of checkbox and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]
</script>


<h2>UI Elements</h2>

<!-- Checkboxes -->

<DocTemplate componentLabel={'checkboxes'} propNumber='5' propDesc={propDescriptions} code={Example}>
    <div slot="examples">
        <p class='description'>Default options</p>
        <Checkbox {options} bind:userSelected={checkValue} legend='Choose your starter'/>
        <p>{checkValue} is selected</p>
    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. An array of selected check values can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default.</p>

</DocTemplate>

<style>
    code {
        font-weight: bold;
    }
</style>
