<script>
    import {csvFormat} from 'd3-dsv'
    import {onMount} from 'svelte'

    let mounted = false;

    onMount(() => {mounted = true})

    export let data;
    export let title;


    let hiddenElement;
    let filename; 
    let url;

    $: if (mounted){
        let formatted = csvFormat(data)
        let blob = new Blob([formatted], { type: 'text/csv;charset=utf-8;' });
        filename = title;
        url = window.URL.createObjectURL(blob);
    }


    function downloadCSV(){
		hiddenElement.click();
	}

</script>

<button on:click={downloadCSV}>Download the data</button>
<a href={url} download={filename} hidden on:click={() => console.log('clicked')} bind:this={hiddenElement}>Download the data</a>

<style>
    a {
        color: var(--gray-text);
        font-family: 'National 2 Narrow Web'
    }
</style>