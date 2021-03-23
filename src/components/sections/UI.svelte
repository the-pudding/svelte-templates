<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Checkbox from './../../../templates/Checkbox.svelte'
    import CheckExample from '!!raw-loader!./../../examples/CheckboxExample.svelte'
    import Radio from './../../../templates/Radio.svelte'
    import RadioExample from '!!raw-loader!./../../examples/RadioExample.svelte'


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

    let radioValue;
    let radioOptions = [{
		value: 'green',
		label: 'Bulbasaur',
	}, {
		value: 'red',
		label: 'Charmander',
	}, {
		value: 'blue',
		label: 'Squirtle',
	}]


    let propDescriptionsCheck = [['options', 'array of objects', 'Specifies label and value of each checkbox'],
    [ 'legend', 'string', 'Brief description of the group of checkboxes'], ['userSelected', 'Array', 'Bindable value for accessing selected checkbox values'],
    ['fontSize', 'number', 'Size of checkbox and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]

    let propDescriptionsRadio = [['options', 'array of objects', 'Specifies label and value of each radio button'],
    [ 'legend', 'string', 'Brief description of the group of checkboxes'], ['userSelected', 'array', 'Bindable value for accessing selected radio button value'],
    ['fontSize', 'number', 'Size of radio button and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]
</script>


<h2>UI Elements</h2>

<!-- Checkboxes -->

<DocTemplate componentLabel={'checkboxes'} propNumber='5' propDesc={propDescriptionsCheck} code={CheckExample} name='Checkbox'>
    <a slot='view' href='https://svelte.dev/repl/e0a6a6df741c4e8fab764c2eedf3ce31?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <div class='example'>
            <Checkbox {options} bind:userSelected={checkValue} legend='Choose your starter'/>
            <p><span>{checkValue}</span> is selected</p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. An array of selected check values can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. <code>TAB</code> to select element, <code>SPACE</code> to toggle checkbox.</p>

</DocTemplate>


<!-- Radio Buttons -->

<DocTemplate componentLabel={'radio buttons'} propNumber='5' propDesc={propDescriptionsRadio} code={RadioExample} name='radio'>
    <a slot='view' href='https://svelte.dev/repl/a1c9e4be23d746ddba6b7d62d4aad875?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <div class='example'>
            <Radio options={radioOptions} bind:userSelected={radioValue} legend='Choose your starter'/>
            <p><span>{radioValue}</span> is selected</p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. An array of selected radio values can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. <code>TAB</code> to select element, <code>Arrow Keys</code> to toggle between radio buttons.</p>

</DocTemplate>

<style>
    code {
        font-weight: bold;
    }

    .example {
        display: flex;
        justify-content: space-between;
    }

    .example  span {
        font-size: 1.5em;
        font-family: monospace;
    }

    .example > p {
        text-align: center;
    }
</style>
