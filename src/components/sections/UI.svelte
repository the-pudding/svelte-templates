<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Checkbox from './../../../templates/Checkbox.svelte'
    import CheckExample from '!!raw-loader!./../../examples/CheckboxExample.svelte'
    import Radio from './../../../templates/Radio.svelte'
    import RadioExample from '!!raw-loader!./../../examples/RadioExample.svelte'
    import Switch from './../../../templates/Switch.svelte'
    import ToggleExample from '!!raw-loader!./../../examples/SwitchExample.svelte'
    import ButtonSet from './../../../templates/ButtonSet.svelte'
    import SetExample from '!!raw-loader!./../../examples/SetExample.svelte'
    import Icon from './../../../templates/Icon.svelte'
    import IconExample from '!!raw-loader!./../../examples/IconExample.svelte'


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
    [ 'legend', 'string', 'Brief description of the group of radio buttons'], ['userSelected', 'array', 'Bindable value for accessing selected radio button value'],
    ['fontSize', 'number', 'Size of radio button and text, defaults to 16'], ['flexDirection', 'row or column', 'Indicator of which direction the checkboxes should be visually arranged']]

    let propDescriptionsToggle = [[ 'label', 'string', 'Brief description of the group of the toggle switch'], ['design', 'inner, slider, or multi ', 'Indicator of which style of toggle switch should be drawn'], 
    ['options', 'array of strings', 'Only necessary for "multi" design option'],
    ['value', 'string', 'Bindable value for accessing selected switch value'],
    ['fontSize', 'number', 'Size of switch and text, defaults to 16'], ]

    let setValue;
    let propDescriptionsSet = [['options', 'array of objects', 'Specifies label and value of each button'],
    [ 'legend', 'string', 'Brief description of the group of buttons'], ['userSelected', 'array', 'Bindable value for accessing selected radio button value'],
    ['fontSize', 'number', 'Size of button text, defaults to 16']]

    let propDescriptionsIcon = [
    ['name', 'string', 'Icon name as indicated on feathericons.com'],
    ['direction', 'string', 'The direction of the icon (e.g., n, ne, e, se, s, sw, w, nw)'], 
    ['strokeWidth', 'number', 'The width, in pixels of the icon stroke'],
    ['stroke', 'string', 'Color of the icon stroke'],
    ['width', 'string', 'Icon width with unit (e.g., "1em"). Default to 1em'],
    ['height', 'string', 'Icon height with unit (e.g., "1em"). Default to 1em'],
]

</script>


<h2>UI Elements</h2>

<!-- Checkboxes -->

<DocTemplate componentLabel={'checkboxes'} propNumber='5' propDesc={propDescriptionsCheck} code={CheckExample} name='Checkbox'>
    <p slot='description'>A component to create a single checkbox or group of checkboxes. These should be used when a user can select more than one item out of a group of options or to turn a single feature on or off.</p>
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
    <p slot='description'>A component to create a group of radio buttons. These should be used when a user can select one (and only one) item out of a group of options.</p>
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
    <p slot='description'>A component to create a single toggle switch (with 3 style options). The <code>Inner</code> or <code>Slider</code> design options should be used when a user can toggle an option between an on or off (or any other binary) state. The <code>Multi</code> design option should be used when the user is toggling between two possible options that are not binary.</p>
    <a slot='view' href='https://svelte.dev/repl/d65a4e9f0ae74d1eb1b08d13e428af32?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <p class='desc'><code>Inner</code> style option</p>
        <div class='example'>
            <Switch bind:value={switchValue} label="Enable dark mode" design="inner" />
            <p>Switch is <span>{switchValue}</span></p>
        </div>
        <p class='desc'><code>Slider</code> style option</p>
        <div class='example'>
            <Switch bind:value={sliderValue} label="Enable dark mode" design="slider" />
            <p>Switch is <span>{sliderValue}</span></p>
        </div>
        <p class='desc'><code>Multi</code> style option</p>
        <div class='example'>
            <Switch bind:value={multiValue} label="Choose a theme" design="multi" options={['light', 'dark']}/>
            <p>Switch is <span>{multiValue}</span></p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. An array of selected radio values can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>These components are keyboard and screen-reader accessible by default. On the back-end, the <code>Inner</code> and <code>Slider</code> designs are <code>switch</code> elements. You can <code>TAB</code> to the element and press either <code>SPACE</code> or <code>ENTER</code> to toggle. The <code>Multi</code> design, is a series of radio buttons, and thus can be accessed via <code>TAB</code> and toggled with <code>Arrow keys</code>.</p>

</DocTemplate>


<!-- Button Set -->

<DocTemplate componentLabel={'button set'} propNumber='4' propDesc={propDescriptionsSet} code={SetExample} name='ButtonSet'>
    <p slot='description'>A component to create a group of UI elements designed to look like a set of buttons. These should be used when a user can select one (and only one) item out of a group of options.</p>
    <a slot='view' href='https://svelte.dev/repl/b29451697d5142abb588abc77f956520?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <div class='example'>
            <ButtonSet {options} legend='Select a starter Pokemon' bind:userSelected={setValue} />
            <p><span>{setValue}</span> is selected</p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>userSelected</code> to the parent component. A string with the selected button value can be accessed in the parent component using <code>bind:userSelected</code></p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. On the back end, this is using a group of radio buttons. <code>TAB</code> to select element, <code>Arrow Keys</code> to toggle between radio buttons.</p>

</DocTemplate>

<!-- Icon Set -->
<DocTemplate componentLabel={'icons'} propNumber='6' propDesc={propDescriptionsIcon} code={IconExample} name='Icon'>
    <p slot='description'>A component to add and resize icons to other elements. All possible icons can be viewed on the <a href="https://feathericons.com/">Feather Icons Site</a>.</p>
    <p slot='other'>This component requires that you have incorporated <a href="https://www.npmjs.com/package/feather-icons">Feather Icons</a> in your project.</p>

    <p slot='other'>This component is included by default in our <a href="https://github.com/the-pudding/svelte-starter">Pudding Svelte Starter Template</a>. You can find it in <code>src/components/helpers/Icon.svelte</code>.</p>

    <div slot="examples">
        <div class='example icon-example'>
            <Icon name='chevron-up' />
            <Icon name='chevron-down' />
            <Icon name='info' />
            <Icon name='alert-triangle' />
            <Icon name='download' />
            <Icon name='play' />
            <Icon name='pause' />
        </div>

    </div>

</DocTemplate>

<style>
    code {
        font-weight: bold;
    }

    .example {
        display: flex;
        justify-content: space-between;
    }

    .icon-example {
        margin-top: 1rem;
    }

    .example  span {
        font-size: 1.5em;
        font-family: monospace;
    }

    .example > p {
        text-align: center;
    }
</style>
