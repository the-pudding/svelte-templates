<script>
    export let id = `switch-${Math.random()}`
    export let label;
    export let design = 'inner label'
    export let options = [];

    let checked = true;
    let selected;

    function handleClick(event){
        const target = event.target
        
        const state = target.getAttribute('aria-checked')

        checked = state === 'true' ? false : true
    }

</script>

{#if design == 'inner'}
<div class="s s--inner">
    <span {id}>{label}</span>
    <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={id}
        on:click={handleClick}>
            <span>on</span>
            <span>off</span>
    </button>
</div>
{:else if design == 'slider'}
<div class="s s--slider">
    <span {id}>{label}</span>
    <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={id}
        on:click={handleClick}>
    </button>
</div>
{:else}
<div class="s s--multi">
    <fieldset>
    <legend>{label}</legend>
        {#each options as option}
            <input type="radio" id={option} name="option" value={option}>
            <label for={option}>
                {option}
            </label> 
        {/each}
    </fieldset>
</div>

{/if}

<style>
    /* Inner Design Option */
    .s--inner button {
        padding: 0.5em;
        background-color: #fff;
        border: 1px solid var(--gray);
    }
    [role='switch'][aria-checked='true'] :first-child,
    [role='switch'][aria-checked='false'] :last-child {
        background: var(--accent-color);
        color: #fff;
        border-radius: 0.25em;
    }

    .s--inner button span {
        user-select: none;
        pointer-events:none;
        padding: 0.25em;
    }

    .s--inner button:focus {
        outline: var(--accent-color) solid 1px;
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 0.1em;
    }

    /* Slider Design Option */

    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        width: 3em;
        height: 1.6em;
        border-radius: 1.5em;
        position: relative;
        margin: 0 0 0 0.5em;
        background: var(--gray);
        border: none;
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 1.25em;
        height: 1.25em;
        background: #fff;
        top: 0.2em;
        right: 1.6em;
        border-radius: 100%;
        transition: transform 0.3s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--accent-color)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(1.4em);
        transition: transform 0.3s;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 1.5em;
    }

    /* Multi Design Option */

    /* Based on suggestions from Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
    and this example from Scott O'hara https://codepen.io/scottohara/pen/zLZwNv */

    .s--multi fieldset {
        border: none;
        padding: 0;
        white-space: nowrap;
    }

    /* .s--multi legend {
    font-size: 2px;
    opacity: 0;
    position: absolute;
    } */

    .s--multi label {
        display: inline-block;
        line-height: 1.6;
        position: relative;
        z-index: 2;
    }

    .s--multi input {
        opacity: 0;
        position: absolute;
    }

    .s--multi label:first-of-type {
        padding-right: 5em;
    }

    .s--multi label:last-child {
        margin-left: -5em;
        padding-left: 5em;
    }

    .s--multi:focus-within label:first-of-type:after {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 1.5em;
    }



    /* making the switch UI.  */
    .s--multi label:first-of-type:before,
    .s--multi label:first-of-type:after {
        content: "";
        height: 1.25em;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        vertical-align: middle;
    }

    .s--multi label:first-of-type:before {
        border-radius: 100%;
        z-index: 2;
        position: absolute;
        width: 1.25em;
        height: 1.25em;
        background: #fff;
        top: 0.175em;
        right: 1.2em;
        transition: transform 0.3s;
    }

    .s--multi label:first-of-type:after {
        background: var(--accent-color);
        border-radius: 1em;
        margin: 0 1em;
        transition: background .2s ease-in-out;
        width: 3em;
        height: 1.6em;
    }

    .s--multi input:first-of-type:checked ~ label:first-of-type:after {
        background: var(--gray);
    }

    .s--multi input:first-of-type:checked ~ label:first-of-type:before {
        transform: translateX(-1.4em);
    }

    .s--multi input:last-of-type:checked ~ label:last-of-type {
        z-index: 1;
    }

    .s--multi input:focus {
        box-shadow: 0 0px 8px var(--accent-color);
        border-radius: 1.5em;
    }


</style>