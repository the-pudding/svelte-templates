<script>
    import DocTemplate from './../DocTemplate.svelte'
    import ProgressDots from './../../../templates/ProgressDots.svelte'
    import DotExample from '!!raw-loader!./../../examples/ProgressDotExample.svelte'
    import Pagination from './../../../templates/Pagination.svelte'
    import PaginationExample from '!!raw-loader!./../../examples/PaginationExample.svelte'

    let dotValue;

    let propDescriptionsDots = [
        ['numberOfItems', 'number', 'Total number of steps in the sequence'],
        [ 'activeIndex', 'number', 'Bindable value for accessing the selected button index'], 
        ['fontSize', 'number', 'Size of dots and text, defaults to 16']]

    let paginationText = 'The Pudding is a digital publication that explains ideas debated in culture with visual essays.'.split(' ')
    let paginationValues;

    let propDescriptionsPage = [
        ['rows', 'array', 'The data to be paginated'],
        [ 'perPage', 'number', 'The number of items that you want to be displayed on each page'], 
        ['trimmedRows', 'array', 'Bindable value containing the trimmed data to be displayed for the current page']]

</script>


<h2>Pagination</h2>


<!-- Progress Dots -->

<DocTemplate componentLabel={'progress dots'} propNumber='3' propDesc={propDescriptionsDots} code={DotExample} name='ProgressDots'>
    <p slot='description'>A component to create a series of circular buttons. These are, by default, presented as a way to navigate through a stepper or paginated content. Ideal for processes with a few steps where steps can be skipped.</p>
    <a slot='view' href='https://svelte.dev/repl/628fde0a479546879dfb01dd99fd14ae?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <div class='example'>
            <ProgressDots numberOfItems={4} bind:activeIndex={dotValue}/>
            <p>Step <span>{dotValue + 1}</span> is selected</p>
        </div>

    </div>
    <p slot='bound'>This component exposes the variable <code>activeIndex</code> to the parent component. A string containing the selected button's index can be accessed in the parent component using <code>bind:activeIndex</code></p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. This component uses individual <code>button</code> elements for navigation, so they can each be individually accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>.</p>

</DocTemplate>

<!-- Progress Dots -->

<DocTemplate componentLabel={'content pagination'} propNumber='3' propDesc={propDescriptionsPage} code={PaginationExample} name='Pagination'>
    <p slot='description'>A component to automaically split and paginate data or content. This can be used to paginate any sort of output, including data tables. </p>
    <p slot='other'>⚠️ This component also requires the <a href=https://github.com/the-pudding/svelte-templates/blob/master/templates/Icon.svelte>Icon.svelte</a> component (not automatically copied from the above buttons).</p>
    <a slot='view' href='https://svelte.dev/repl/84a8d64a6f1e49feba8f6a491ecc55f5?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
            {#if paginationValues}
            {#each paginationValues as value}
            <p class='pagEx'>
                {value}
            </p>
            {/each}
            {/if}
            <Pagination rows={paginationText} perPage={5} bind:trimmedRows={paginationValues} />
    </div>

    <p slot='bound'>This component exposes the variable <code>trimmedRows</code> to the parent component. An array containing the trimmed data to be displayed on the selected "page" can be accessed in the parent component using <code>bind:trimmedRows</code>.</p>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. This component uses individual <code>button</code> elements for navigation, so they can each be individually accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>.</p>

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

    .pagEx {
        text-align: center;
    }
</style>