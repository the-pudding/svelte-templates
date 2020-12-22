<script>
    // based on suggestions from: 
    // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
    // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

    export let data;
    export let legend;
    let selected;

    export const slugify = (str = "") =>
        str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<fieldset>
    <legend>{legend}</legend>
    {#each data as {name, label}}
        <input class="sr-only" type="radio" id={slugify(name)} bind:group={selected} value={slugify(name)}>
        <label for={slugify(name)}>
            {label}
        </label> 
    {/each}
</fieldset>

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

    input[type='radio'] {
        position: absolute;
    }

    input[type='radio'] + label {
        display: block;
        position: relative;
        padding: 0 1em;
        text-align: left;
    }

    input[type='radio'] + label::before {
        content: '';
        position: relative;
        display: inline-block;
        margin-right: 0.5em;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 1px solid var(--gray);
        border-radius: 50%;
        transition: background 0.3s ease-out;
        top: 0.2em;
    }

    input[type='radio']:checked + label::before {
        border: 1px solid var(--gray, #ddd);
        border-radius: 50%;
        transition: background 0.3s ease-in;
    }

    input[type='radio'] + label::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        top: 0.45em;
        left: 1.25em;
        background: var(--accent-color);
        border: 1px solid var(--accent-color);
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.2s ease-out;
    }

    input[type='radio']:checked + label::after {
        opacity: 1;
        transform: scale(1);
        transition: transform 0.2s ease-in;
    }

    input[type='radio']:focus + label::before {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 50%;
    }

    input[type='radio']:disabled + label {
        color: darken(var(--gray), 10);
    }

    input[type='radio']:disabled + label::before {
        background: var(--gray)
    }

  </style>