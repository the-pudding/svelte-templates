<script>
    import Switch from './Switch.svelte'

    let switchValue;
    let sliderValue;
    let multiValue;
</script>

<Switch bind:value={switchValue} label="Enable dark mode" design="inner" />
<p>Switch is {switchValue}</p>

<Switch bind:value={sliderValue} label="Enable dark mode" fontSize={24} design="slider" />
<p>Switch is {sliderValue}</p>

<Switch bind:value={multiValue} label="Choose a theme" design="multi" options={['light', 'dark']} fontSize={12}/>
<p>Switch is {multiValue}</p>
 