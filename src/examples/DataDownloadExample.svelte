<script>
    import DataDownload from './DataDownload.svelte'

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

</script>

<DataDownload {data} title='my data'/>