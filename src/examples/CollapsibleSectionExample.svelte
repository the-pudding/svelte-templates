<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
</script>

<section>
<CollapsibleSection headerText={'Collapse or expand me!'} >
	<div class="content">
			Look at all this fun content
	</div>
</CollapsibleSection>
	
<CollapsibleSection headerText={'I can collapse or expand too!'} >
		<div class="content">
			Look at all this fun content
	</div>
</CollapsibleSection>
</section>

<style>
	section {
		width: 400px;
	}
	
	.content {
		background-color: #f4f4f4;
		padding: 0.5em;
	}
</style>