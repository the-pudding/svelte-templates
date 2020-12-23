<script>
    // based on suggestions from: 
    // A11y with Lindsey https://www.a11ywithlindsey.com/blog/create-custom-keyboard-accesible-checkboxes
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

    export let checks;
    export let legend;
    export let value = checks.filter(d => d.selected === true).map(d => d.label);

    export const slugify = (str = "") =>
        str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>


<!-- hiding default checkbox to style our own -->


{#if checks.length > 1}
    <fieldset>
        <legend>{legend}</legend>
        {#each checks as {name, label, selected}}
        <input class="sr-only" type="checkbox" id={slugify(name)} name={name} value={label} bind:group={value} bind:checked={selected}>
        <label for={slugify(name)}>
            {label}
        </label>
    {/each}
    </fieldset>
{:else}
    {#each checks as {name, label, selected}}
        <input class="sr-only" type="checkbox" id={slugify(name)} name={name} bind:group={value} bind:checked={selected}>
        <label for={slugify(name)}>
            {label}
        </label>
    {/each}
{/if}


<style>
    fieldset {
        max-width: 25%;
        border-radius: 2px;
        border: 1px solid var(--gray-darker)
    }

    legend {
        margin: 0 1em;
        padding: 0 1em;
        font-weight: bold;
    }
    label {
        user-select: none;
        line-height: 1.2em;
    }

    .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
    }

    input[type='checkbox'] {
        position: absolute;
    }

    input[type='checkbox'] + label {
        display: block;
        position: relative;
        padding: 0 1em;
        text-align: left;
    }

    input[type='checkbox'] + label::before {
        content: '';
        position: relative;
        display: inline-block;
        margin-right: 0.5em;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 1px solid var(--gray);
        top: 0.2em;
    }

    input[type='checkbox'] + label::after {
        content: '';
        position: absolute;
        top: 0.45em;
        left: calc(1em + 4px);
        border-left: 2px solid var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
        width: 0.75em;
        height: 0.3em;
        width: 0.5em;
        transform: rotate(-45deg) scale(0);
    }

    input[type='checkbox']:checked + label::after {
        transform: rotate(-45deg) scale(1);
    }

    input[type='checkbox']:focus + label::before {
        outline: var(--accent-color) solid 1px;
        border-radius: 0.1em;
    }

    input[type='checkbox']:disabled + label {
        color: darken(var(--gray), 10);
    }

    input[type='checkbox']:disabled + label::before {
        background: var(--gray)
    }

    /* gravy */

    
    input[type='checkbox'] + label::before {
        border-radius: 0.1em;
        transition: background 0.3s ease-out;
    }

    input[type='checkbox']:checked + label::before {
        background: var(--accent-color);
        border-radius: 0.1em;
        transition: background 0.3s ease-in;
    }

    input[type='checkbox'] + label::after {
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transition: transform 0.2s ease-in;
    }

    input[type='checkbox']:checked + label::after {
        transition: transform 0.2s ease-in;
    }

    input[type='checkbox']:focus + label::before {
        outline: var(--accent-color) solid 1px;
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 0.1em;
    }

    

  </style>