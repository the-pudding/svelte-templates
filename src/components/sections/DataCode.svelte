<script>
    import DocTemplate from './../DocTemplate.svelte'
    import Table from './../../../templates/Table.svelte'
    import TableExample from '!!raw-loader!./../../examples/TableExample.svelte'


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
</script>

<h2>Data & Code</h2>

<!-- Sortable Table -->

<DocTemplate componentLabel={'sortable table'} propNumber='1' 
    propDesc={propDescriptionsTable} 
    code={TableExample} name='Table'>
    <p slot='description'>A component to create sortable, semantic HTML tables. </p>
    <a slot='view' href='https://svelte.dev/repl/9f6c397a6dc642c6838ce932bfc01040?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <Table headers={tableHeaders} rows={tableData} rowBorder={true}/>
    </div>

    <p slot='a11y'>This component uses semantic HTML tables and <code>button</code> elements to make it as keyboard and screen reader navigable as possible. The sort buttons can be accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>.</p>

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