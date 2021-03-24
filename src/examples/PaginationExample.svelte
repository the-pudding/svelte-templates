<script>
	import Pagination from './Pagination.svelte';
	
	const examples = 'The Pudding is a digital publication that explains ideas debated in culture with visual essays.'.split(' ')
	
	let values;
</script>

{#if values}
{#each values as value}
<p>
	{value}
</p>
{/each}
{/if}

<Pagination rows={examples} perPage={3} bind:trimmedRows={values} />