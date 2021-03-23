<script>
    import Icon from "./Icon.svelte"
    import { ascending, descending } from 'd3-array'

    export let headers;
    export let rows;
		export let rowHeaders = false;
		export let sort = true;
		export let rowBorder = false;
		export let caption;

    $: sortStatus = [];
    $: sortDirection = 'ascending'
		$: sortNumber = rows[0].map(d => !isNaN(d))

    function updateSortStatus(column, index){
        // reset all to "none"
        headers.forEach(d => {
            sortStatus[d] = "none"
        })

        sortDirection === 'ascending' ? sortDirection = 'descending' : sortDirection = 'ascending'
        sortStatus[column] = sortDirection
    }

    $: sortIcons = {'none' : {
        direction: 'n',
        icon: 'list'
    }, 'ascending' : {
        direction: 'w',
        icon: 'arrow'
    }, 'descending' : {
        direction: 'e',
        icon: 'arrow'
    }}

    $: headers.forEach(d => {
        sortStatus[d] = "none"
    })

    $: sortBy = 'none'

    $: sortedRows = rows


    $: if (sortBy !== 'none' && sortNumber[sortBy] === false){
        if (sortDirection === 'ascending') sortedRows = rows.sort((a, b) => ascending(a[sortBy].toLowerCase(), b[sortBy].toLowerCase())) 
        else sortedRows = rows.sort((a, b) => descending(a[sortBy].toLowerCase(), b[sortBy].toLowerCase()) ) 
    }

    $: if (sortBy !== 'none' && sortNumber[sortBy] === true){
        if (sortDirection === 'ascending') sortedRows = rows.sort((a, b) => ascending(a[sortBy], b[sortBy])) 
        else sortedRows = rows.sort((a, b) => descending(a[sortBy], b[sortBy]) ) 
    }


</script>

<div>
    <table class:rowBorder>
			{#if caption}
			<caption>{caption}</caption>
			{/if}
    <tbody>
        <tr>
            {#each headers as header, i (header)}
                <th aria-sort={sortStatus[header]} role="columnheader" scope="col">
                    {header}
									{#if sort}
                    <button class={i === sortBy ? 'sort selected' : 'sort'} 
                        on:click="{() => {
                            sortBy = i
                            updateSortStatus(header, i)
                        }}"
                    >
                        <Icon name={sortIcons[sortStatus[header]].icon} direction={sortIcons[sortStatus[header]].direction}
                            stroke = {i === sortBy ? 'white' : 'gray'} />
                        <span class='sr-only'>Sort by {header}</span>
                    </button>
									{/if}
                </th>
            {/each}
        </tr>

        {#each sortedRows as row (row)}
            <tr>
                {#each row as column, i}
									{#if rowHeaders && i === 0}
										<th scope="row">
											{column}
										</th>
									{:else}
                    <td>{column}</td>
									{/if}
                {/each}
            </tr>
	
        {/each}
    </tbody>
</table>
</div>


<style>
    .sr-only {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
    
    table {
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
  table-layout: fixed;
}
table caption,
td,
th {
  text-align: left;
}
	caption {
		font-size: 1.2em;
		font-weight: bold;
	}
	td,
th {
  padding: 6px;
  vertical-align: top;
  word-wrap: break-word;
	border-bottom: none;
}
	.rowBorder td {
		border-bottom: 1px solid #eee
	}
	td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

}
thead {
  border-bottom: 1px solid var(--border);
}
tfoot {
  border-top: 1px solid var(--border);
}
tbody tr:nth-child(2n) {
  background-color: var(--background-alt);
}

    .selected {
        background-color: var(--accent-color)
    }

</style>