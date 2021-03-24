<script>
	import ProgressDots from './ProgressDots.svelte'
	
	let dotValue;
</script>

<ProgressDots numberOfItems={4} bind:activeIndex={dotValue}/>

<p>
	Step {dotValue + 1} is selected.
</p>