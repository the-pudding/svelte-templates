<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Checkbox from './../../../templates/Checkbox.svelte'
    import CheckExample from '!!raw-loader!./../../examples/CheckboxExample.svelte'
    import Radio from './../../../templates/Radio.svelte'
    import RadioExample from '!!raw-loader!./../../examples/RadioExample.svelte'
    import Switch from './../../../templates/Switch.svelte'
    import ToggleExample from '!!raw-loader!./../../examples/SwitchExample.svelte'


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

    let switchValue;
	let sliderValue;
	let multiValue;

    let propDescriptionsCheck = [['options', 'array of objects', 'Specifies label and value of each checkbox'],
    [ 'legend', 'string', 'Brief description of the group of checkboxes'], ['userSelected', 'Array', 'Bindable value for accessing selected checkbox values'],
    ['fontSize', 'number', 'Size of checkbox and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]

    let propDescriptionsRadio = [['options', 'array of objects', 'Specifies label and value of each radio button'],
    [ 'legend', 'string', 'Brief description of the group of checkboxes'], ['userSelected', 'array', 'Bindable value for accessing selected radio button value'],
    ['fontSize', 'number', 'Size of radio button and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]

    let propDescriptionsToggle = [[ 'label', 'string', 'Brief description of the group of the toggle switch'], ['design', 'inner, slider, or multi ', 'Indicator of which style of toggle switch should be drawn'], 
    ['options', 'array of strings', 'Only necessary for "multi" design option'],
    ['value', 'string', 'Bindable value for accessing selected switch value'],
    ['fontSize', 'number', 'Size of switch and text, defaults to 16'], ]
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
    <p slot='bound'>This component exposes the variable <code>value</code> to the parent component. An array of selected check values can be accessed in the parent component using <code>bind:value</code></p>

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

<!-- Toggle Switches -->

<DocTemplate componentLabel={'toggle switches'} propNumber='5' propDesc={propDescriptionsToggle} code={ToggleExample} name='switch'>
    <a slot='view' href='https://svelte.dev/repl/d65a4e9f0ae74d1eb1b08d13e428af32?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <p class='desc'><code>Inner</code> style option</p>
        <div class='example'>
            <Switch bind:value={switchValue} label="Enable dark mode" design="inner" />
            <p>Switch is {switchValue}</p>
        </div>
        <p class='desc'><code>Slider</code> style option</p>
        <div class='example'>
            <Switch bind:value={sliderValue} label="Enable dark mode" design="slider" />
            <p>Switch is {sliderValue}</p>
        </div>
        <p class='desc'><code>Multi</code> style option</p>
        <div class='example'>
            <Switch bind:value={multiValue} label="Choose a theme" design="multi" options={['light', 'dark']}/>
            <p>Switch is {multiValue}</p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. An array of selected radio values can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>These components are keyboard and screen-reader accessible by default. On the back-end, the <code>Inner</code> and <code>Slider</code> designs are <code>switch</code> elements. You can <code>TAB</code> to the element and press either <code>SPACE</code> or <code>ENTER</code> to toggle. The <code>Multi</code> design, is a series of radio buttons, and thus can be accessed via <code>TAB</code> and toggled with <code>Arrow keys</code>.</p>

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
