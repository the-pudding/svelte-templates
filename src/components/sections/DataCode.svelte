<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Table from './../../../templates/Table.svelte'
    import TableExample from '!!raw-loader!./../../examples/TableExample.svelte'
    import CodeBlock from './../../../templates/CodeBlock.svelte'
    import CodeExample from '!!raw-loader!./../../examples/CodeExample.svelte'
    import DataDownload from './../../../templates/DataDownload.svelte'
    import DataDownloadExample from '!!raw-loader!./../../examples/DataDownloadExample.svelte'
    import { onMount } from 'svelte'
    import Scatterplot from '../../../templates/Scatterplot.svelte';
    import ScatterplotExample from '!!raw-loader!./../../examples/ScatterplotExample.svelte'
    
    let propDescriptionsTable = [
        ['headers', 'array', 'Array of column header strings (as will be presented on the table)'],
        ['rows', 'array of arrays', 'Array of data to fill each row in the table'],
        ['rowHeaders', 'boolean', 'If true, the first column of values will be designated as row headers. Defaults to false'],
        ['sort', 'boolean', 'If true, all columns are sortable. Defaults to true.'],
        ['rowBorder', 'boolean', 'If true, visual borders will be drawn along table rows. Defaults to false'],
        ['caption', 'string', 'Table caption that doubles as a title.']]

    let tableHeaders = ['name', 'color', 'element', 'id'];
	let rawTableData = [{
		color: 'green',
		name: 'Bulbasaur',
		element: 'plant',
		id: 1
	}, {
		color: 'red',
		name: 'Charmander',
		element: 'fire',
		id: 2
	}, {
		color: 'blue',
		name: 'Squirtle',
		element: 'water',
		id: 3
	}];
		
    $: tableData = rawTableData.map(d => ([d.name, d.color, d.element, d.id]))

    let propDescriptionsCode = [
        ['code', 'string', 'Code to syntax highlight as a string'],
        ['language', 'string', 'Indicator of programming language (e.g., js or svelte)']]

    let exampleCode = `let x = 25 + y`

    let propDescriptionsData = [
        ['data', 'array of objects', 'Flat data to be exported to csv'],
        ['title', 'string', 'string to be converted into file name']]

    let propDescriptionsScatter = [
        ['data', 'array of objects', 'Flat data to be used to create a scatterplot'],
        ['xAccessor', 'function', 'indicator of which data variable should be used on the x-axis. Defaults to d[0]'],
        ['yAccessor', 'function', 'indicator of which data variable should be used on the y-axis. Defaults to d[1]'],
        ['rAccessor', 'function', 'indicator of which data variable should be used for the radius. Defaults to d[2]']
    ]

    const generateScatterplotData = () =>
        new Array(100).fill(0).map(_ => [Math.random(), Math.random(), 3]);
    let scatterplotData = generateScatterplotData();

    const onRegenerateScatterplotData = () => {
        scatterplotData = generateScatterplotData();
    };
    onMount(onRegenerateScatterplotData);
</script>

<h2>Data & Code</h2>

<!-- Sortable Table -->

<DocTemplate componentLabel={'sortable table'} propNumber='6' 
    propDesc={propDescriptionsTable} 
    code={TableExample} name='Table'>
    <p slot='description'>A component to create sortable, semantic HTML tables. </p>
    <a slot='view' href='https://svelte.dev/repl/9f6c397a6dc642c6838ce932bfc01040?version=3.35.0'>on Svelte REPL</a>
    <p slot='other'>⚠️ This component also requires the <a href=https://github.com/the-pudding/svelte-templates/blob/master/templates/Icon.svelte>Icon.svelte</a> component (not automatically copied from the above buttons).</p>
    <div slot="examples">
        <Table headers={tableHeaders} rows={tableData} rowBorder={true}/>
    </div>

    <p slot='a11y'>This component uses semantic HTML tables and <code>button</code> elements to make it as keyboard and screen reader navigable as possible. The sort buttons can be accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>.</p>

</DocTemplate>

<!-- Code Block -->

<DocTemplate componentLabel={'code block'} propNumber='2' 
    propDesc={propDescriptionsCode} 
    code={CodeExample} name='CodeBlock'>
    <p slot='description'>A component to create syntax highlighted code.</p>

    <p slot='other'>⚠️ This component also requires the <a href="https://highlightjs.org/download/">Highlight.js</a>,  <a href="https://www.npmjs.com/package/highlightjs-svelte">Highlight JS Svelte</a>, and <a href="https://www.npmjs.com/package/raw-loader">raw loader</a> packages to be installed to your project. </p>
    <div slot="examples">
        <CodeBlock code={exampleCode} language='js'/>
    </div>

</DocTemplate>


<!-- Data Download -->

<DocTemplate componentLabel={'data download'} propNumber='2' 
    propDesc={propDescriptionsData} 
    code={DataDownloadExample} name='DataDownload'>
    <p slot='description'>A component to create a button that, when clicked, downloads a .csv file of data. </p>

    <div slot="examples">
        <DataDownload data={rawTableData} title='my data' />
    </div>

    <p slot='a11y'>This component uses a semantic <code>button</code> element to trigger the download to make it as keyboard and screen reader navigable as possible. The button can be accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>.</p>

    <p slot='a11y'>To improve accessibility even further, the data should be exported in a format that is human readable (e.g., a value of <code>8743804</code> could be exported as <code>8.7 million</code>). The raw values could be retained in a second column, if preferred.</p>

</DocTemplate>


<!-- Scatterplot -->

<DocTemplate componentLabel={'basic scatterplot'} propNumber='4' 
    propDesc={propDescriptionsScatter} 
    code={ScatterplotExample} name='Scatterplot'>
    <p slot='description'>The basics for a scatterplot. This uses svelte <code>spring</code>, which animates the dots on change, but requires a consistent number of items in the <code>data</code> array.</p>

    <div slot="examples">
        <button on:click={onRegenerateScatterplotData}>Get new data</button>
        <Scatterplot data={scatterplotData} />
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

    .example  span {
        font-size: 1.5em;
        font-family: monospace;
    }

    .example > p {
        text-align: center;
    }
</style>