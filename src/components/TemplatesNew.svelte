<script>
    import UI from './sections/UI.svelte'
    import PaginationUtil from './sections/PaginationUtil.svelte'
    import PageStructure from './sections/PageStructure.svelte'
    import DataCode from './sections/DataCode.svelte'
    import Decoration from './sections/Decoration.svelte'
   
</script>


<div class='c'>
   <UI /> 
   <PaginationUtil />
   <PageStructure />
   <DataCode />
   <Decoration />
</div>

<style>
    .c {
        max-width: 700px;
        margin: 0 auto;
    }
</style>

