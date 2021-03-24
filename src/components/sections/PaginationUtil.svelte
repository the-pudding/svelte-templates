<script>
    import DocTemplate from './../DocTemplate.svelte'
    import ProgressDots from './../../../templates/ProgressDots.svelte'
    import DotExample from '!!raw-loader!./../../examples/ProgressDotExample.svelte'

    let dotValue;

    let propDescriptionsDots = [
        ['numberOfItems', 'number', 'Total number of steps in the sequence'],
        [ 'activeIndex', 'number', 'Bindable value for accessing the selected button index'], 
        ['fontSize', 'number', 'Size of dots and text, defaults to 16']]
</script>


<h2>Pagination Utilities</h2>


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