<script>
    import Scatterplot from './Scatterplot.svelte'
    import {onMount} from 'svelte'

    const generateScatterplotData = () =>
        new Array(100).fill(0).map(_ => [Math.random(), Math.random(), 3]);
    let scatterplotData = generateScatterplotData();

    const onRegenerateScatterplotData = () => {
        scatterplotData = generateScatterplotData();
    };

    onMount(onRegenerateScatterplotData);
</script>

<Scatterplot data={scatterplotData} />