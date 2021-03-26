<script>
    import CustomCollapsible from './CustomCollapsible.svelte';
    import Table from './../../templates/Table.svelte'
    import CodeBlock from './../../templates/CodeBlock.svelte'
    import CopyButtons from './CopyButtons.svelte'

    export let componentLabel;
    export let propDesc;
		$: propNumber = propDesc.length;
    export let code;
    export let name;

    let tableHeader = ['Prop', 'Expects', 'Description']

</script>

<section id={name.toLowerCase()}>
    <CustomCollapsible headerText={componentLabel} >
        <div class='container'>
            <div class='description'>
                <h3>Component Description</h3>
                <slot name='description'>What you see is what you get!</slot>
            </div>
            <div class='view'>
                <h3>View Code</h3>
                <a href=https://github.com/the-pudding/svelte-templates/blob/master/templates/{name}.svelte>on GitHub</a>
                <slot name='view'></slot>
            </div>
            <div class='use'>
                <h3>Use This Component</h3>
                <CopyButtons {name} />
                <slot name='other'></slot>
            </div>

            <div class='examples'>
                <h3>Examples</h3>
                <slot name='examples'></slot>
            </div>

            <div class='props'>
                <h3>Props</h3>
                <p>This component takes <strong>{propNumber}</strong> {propNumber > 1 ? 'props' : 'prop'}:</p>
                <Table headers={tableHeader} rows={propDesc} rowBorder={true} sort={false}/>
            </div>

            <div class='bound'>
                <h3>Bound Values</h3>
                <slot name='bound'>
                    This component doesn't expose any props for binding.
                </slot>
            </div>

            <div class='code'>
                <h3>Example Use</h3>
                <CodeBlock language="svelte" {code}/>
            </div>

            <div class='a11y'>
                <h3>Accessibility</h3>
                <slot name='a11y'>
                    This component hasn't been evaluated for accessibility concerns.
                </slot>
            </div>
            
        </div>
    </CustomCollapsible>
</section>

<style>
    h3 {
        margin: 0;
        font-weight: bold;
        font-size: 1.2em;
    }
    .view > a {
        margin-right: 0.5rem;
    }

    .container {
        padding: 0 1rem;
    }
    .container > div {
        padding-bottom: 2rem;
    }

    .container > div:first-of-type {
        padding-top: 2rem;
    }

    p {
        margin: 0;
    }
</style>