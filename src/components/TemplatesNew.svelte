<script>
    import UI from './sections/UI.svelte'
    import PaginationUtil from './sections/PaginationUtil.svelte'
    import PageStructure from './sections/PageStructure.svelte'
   
</script>


<div class='c'>
   <UI /> 
   <PaginationUtil />
   <PageStructure />
</div>

<style>
    .c {
        max-width: 700px;
        margin: 0 auto;
    }
</style>

