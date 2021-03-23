<script>
    import CustomCollapsible from './CustomCollapsible.svelte';
import CustomColllapsible from './CustomCollapsible.svelte'

    export let componentLabel;

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
        width: 100%;
        padding: 0 1rem;
        background-color: #F1F9FD;
    }
</style>