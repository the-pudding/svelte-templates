<script>
    import CustomCollapsible from './CustomCollapsible.svelte';
    import Table from './../../templates/Table.svelte'
    import CodeBlock from './../../templates/CodeBlock.svelte'

    export let componentLabel;
    export let propNumber;
    export let propDesc;
    export let code;

    let tableHeader = ['Prop', 'Expects', 'Description']

</script>

<section>
    <CustomCollapsible headerText={componentLabel} >
        <div class='container'>
            <div class='use'>
                <h3>Use This Component</h3>
            </div>

            <div class='examples'>
                <h3>Examples</h3>
                <slot name='examples'></slot>
            </div>

            <div class='props'>
                <h3>Props</h3>
                <p>This component takes <strong>{propNumber}</strong> props:</p>
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