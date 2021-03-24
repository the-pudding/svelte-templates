<script>
    import Table from './Table.svelte'

let tableHeaders = ['name', 'color', 'element', 'id'];

let data = [{
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
    
$: tableData = data.map(d => ([d.name, d.color, d.element, d.id]))

</script>

<Table headers={tableHeaders} rows={tableData} rowBorder={true}/>