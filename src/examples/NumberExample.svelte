<script>
    import Number from './Number.svelte';

    let number = 50;
    let numberDuration = 2000;
    let numberFormat = '.1f'

</script>

<Number {number} duration={numberDuration} format={numberFormat} />