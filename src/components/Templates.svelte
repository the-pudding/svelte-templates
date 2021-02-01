<script>
  import { onMount } from "svelte";

  import Template from "./Template.svelte";

  import Icon from "./../../templates/Icon.svelte";
  import iconPaths from "./../../templates/icon-paths";
  const icons = Object.keys(iconPaths);
  import Toggle from "./../../templates/Toggle.svelte";
  import ProgressDots from "./../../templates/ProgressDots.svelte";
  import InView from "./../../templates/InView.svelte";
  import Number from "./../../templates/Number.svelte";
  import Scatterplot from "./../../templates/Scatterplot.svelte";
  import BriefMessage from "./../../templates/BriefMessage.svelte";
  import Checkbox from "./../../templates/Checkbox.svelte";
  import Radio from "./../../templates/Radio.svelte";
  import Switch from "./../../templates/Switch.svelte";
  import CollapsibleSection from "./../../templates/CollapsibleSection.svelte"

  let number = 60;
  let numberDuration = 500;
  let numberFormat = ".1f";
  let checkValue;
  let radioValue;
  let switchValue;

  const generateScatterplotData = () =>
    new Array(100).fill(0).map((_) => [Math.random(), Math.random(), 3]);
  let scatterplotData = generateScatterplotData();

  const onRegenerateScatterplotData = () => {
    scatterplotData = generateScatterplotData();
  };
  onMount(onRegenerateScatterplotData);

  let messageIteration = 0;
  let messageDuration = 500;
  let message = "This is the message";

  let collapseHTML = `
  <CollapsibleSection headerText = 'How does this work' tag='h3'>
          <p>This is a paragraph</p>
          <p>Here's another one</p>
        </CollapsibleSection>`
</script>

<h1>UI Elements</h1>

<Template name="Icon">
  <div slot="description">
    <p>
      These will inherit the current color, and are sized based on the
      font-size. Choose the specific icon with the attribute `name`.
    </p>
    <p>
      Make sure to also grab the `icon-paths.js` file, which stores svg path `d`
      attribute strings.
    </p>
  </div>

  {#each icons as icon}
    <span style="padding: 0.6em">
      <Icon name={icon} />
    </span>
  {/each}
</Template>

<Template name="Toggle">
  <div slot="description">
    <p>
      The currently selected option is represented in the `value` attribute. Add
      an `options` array with objects that have:
    </p>
    <ul>
      <li><b>id</b> : what gets set as the `value`</li>
      <li><b>label</b> : what gets displayed in the toggle</li>
    </ul>
  </div>

  <Toggle
    value={1}
    options={[{ id: 1, label: 'One' }, { id: 2, label: 'Two' }, { id: 3, label: 'Three' }]} />
</Template>

<Template name="ProgressDots">
  <div slot="description">
    <p />
  </div>

  <ProgressDots numberOfItems="6" activeIndex="1" />
</Template>

<Template name="Number">
  <div slot="description">
    <p>Displays a number with an interpolated animation when changed.</p>
    <label>
      <div class="label">value</div>
      <input bind:value={number} type="number" style="width: 6em" />
    </label>
    <label>
      <div class="label">duration (milliseconds)</div>
      <input bind:value={numberDuration} type="number" style="width: 6em" />
    </label>
    <label>
      <div class="label">format</div>
      <input bind:value={numberFormat} style="width: 6em" />
    </label>
  </div>

  <Number {number} duration={numberDuration} format={numberFormat} />
</Template>

<Template name="BriefMessage">
  <div slot="description">
    <p>
      This is a message that will pop up to give quick user feedback, and
      disappears after a short amount of time.
    </p>
    <p>
      The message shows up whenever the `text` or `iteration` changes. Changing
      the `iteration` is a good way to make sure the message shows up when
      needed, even if the `text` doesn't change.
    </p>

    <label>
      <div class="label">text</div>
      <input bind:value={message} style="width: 20em" />
    </label>
    <label>
      <div class="label">duration (milliseconds)</div>
      <input bind:value={messageDuration} type="number" style="width: 6em" />
    </label>
    <button on:click={() => (messageIteration += 1)}>Show message</button>
  </div>

  <div style="position: relative">
    The message will show up next to this content.
    <BriefMessage
      text={message}
      iteration={messageIteration}
      duration={messageDuration} />
  </div>
</Template>

<Template name="Checkbox">
  <div slot="description">
    <p>
      This will generate a checkbox (or series of related checkboxes) that can
      be custom-styled and still remain accessible to screen readers and
      keyboard navigation.
    </p>
    <p>
      Add a `checks` array with an object for each checkbox. Each object should
      specify:
    </p>
    <ul>
      <li>
        <b>name</b>
        : The name of the checkbox (this will be read out when using screen
        readers but isn't displayed on screen).
      </li>
      <li>
        <b>label</b>
        : This will be displayed on screen and read out when using screen
        readers.
      </li>
      <li>
        <b>selected</b>
        : Whether or not this box should be checked by default (also, this is
        bound to the `checked` state of the checkbox and will automatically
        update when the box is either checked or unchecked)
      </li>
    </ul>
    <p>
      If you have more than one checkbox, also include a `legend` string that
      gives context to what the set of checkboxes refer to.
    </p>
  </div>

  <Checkbox
    bind:value={checkValue}
    checks={[{ name: '1', label: 'Another user logs in', selected: false }, { name: '2', label: 'I receive a message', selected: false }, { name: '3', label: 'Someone logs out', selected: true }]}
    ,
    legend="Notification Preferences" />

    {#if checkValue && checkValue.length === 0}  
     <p>None are checked.</p>
    {:else}
     <p>The selected values are <strong>{checkValue}</strong>.</p>
    {/if}


</Template>

<Template name="Radio">
  <div slot="description">
    <p>
      This will generate a group of radio buttons that can be custom-styled and
      still remain accessible to screen readers and keyboard navigation.
    </p>
    <p>
      Add an `options` array with an object for each button. Each object should
      specify:
    </p>
    <ul>
      <li>
        <b>name</b>
        : The name of the checkbox (this will be read out when using screen
        readers but isn't displayed on screen).
      </li>
      <li>
        <b>label</b>
        : This will be displayed on screen and read out when using screen
        readers.
      </li>
    </ul>
    <p>
      Also include a `legend` string that gives context to what the set of
      buttons refer to.
    </p>
  </div>

  <Radio
    bind:value={radioValue}
    options={[{ name: 'east', label: 'US-East' }, { name: 'central', label: 'US-Central' }, { name: 'west', label: 'US-West' }]}
    legend="Select a Region" />

  <p>The selected value is <strong>{radioValue}</strong>.</p>
</Template>

<Template name="Switch">
  <div slot="description">
    <p>
      Each switch expects a
      <code>label</code>
      element (to describe what the switch is for) and a
      <code>design</code>
      element, described in detail below.
    </p>
    <p>The three design options are:</p>
    <ul>
      <li>
        <b>inner</b>
        : Allows a user to switch something on or off with explicit labelling.
        <div class="switch">
          <Switch 
          bind:value={switchValue}
          label="Enable dark mode" design="inner" />
        </div>
      </li>
      <li>
        <b>slider</b>
        : Allows a user to switch something on or off with no displayed
        labelling. (Make sure your label is very clear for users if using this
        option)
        <div class="switch">
          <Switch 
          bind:value={switchValue}
          label="Enable dark mode" design="slider" />
        </div>
      </li>
      <li>
        <b>multi</b>
        : Allows a user to choose between two options. Acts as an alternative to
        radio buttons. Expects an object with two options (<code>options=(['light',
          'dark'])</code>)

        <div class="switch">
          <Switch
            bind:value={switchValue}
            label="Choose a theme"
            design="multi"
            options={['light', 'dark']} />
        </div>
      </li>
    </ul>

    <p>
      <b>Note:</b>
      The slider and multi options may be styled similarly, but under the hood
      they operate differently so make sure to use the right one for your use
      case. The slider option is a button with a
      <code>role="switch"</code>
      designation, letting users know it can have one of two opposing states
      (e.g., on/off, pressed/unpressed etc.). The multi option requires users to
      choose one of two different options and thus uses a standard radio button
      element.
    </p>
  </div>
</Template>

<Template name="CollapsibleSection">
  <div slot="description">
    <p>Wrap something in this component to make it visible or collapsed on click.</p>
    <p>Each collapsible section expects a `headerText` element. Currently, this creates an `h3` header.</p>
  </div>

  <CollapsibleSection headerText="Make this content visible on click">
    <p>Oh, so fancy.</p>
    <p>Look at you accessibly hiding content.</p>
  </CollapsibleSection>

  <CollapsibleSection headerText="How do I use this?">
    <h4>JavaScript</h4>
      <pre><code>
        import CollapsibleSection from './CollapsibleSection.svelte'
      </code></pre>

    <h4>HTML</h4>
      <script>
      </script>
      <pre><code>
        {collapseHTML}
      </code></pre>
  </CollapsibleSection>

</Template>

<h1>Utilities</h1>

<Template name="InView">
  <div slot="description">
    <p>
      Wrap something in this component, and use the `isInView` variable to know
      whether or not it's in view.
    </p>
    <p>
      You could also `bind` to the `isInViewProp` attribute, if you wanted a
      component-level variable (eg. if you want to change something outside of
      the content).
    </p>
  </div>

  <InView let:isInView>
    <div
      style="transform: translate({isInView ? 0 : '-3em'}); transition: all 1s
      ease-out;">
      Is
      {isInView ? '' : 'not '}in view
    </div>
  </InView>
</Template>

<h1>Charts</h1>

<Template name="Scatterplot">
  <div slot="description">
    <p>
      The basics for a scatterplot. This uses svelte a `spring`, which animates
      the dots on change, but requires a consistent number of items in the
      `data` array.
    </p>
    <button on:click={onRegenerateScatterplotData}>Get new data</button>
  </div>

  <div style="max-width: 30em">
    <Scatterplot data={scatterplotData} />
  </div>
</Template>

<style>
  h1 {
    margin: 2em 0 0;
    padding-top: 1em;
    border-top: 1px solid #d5d6dd;
  }
  label {
    display: flex;
    justify-content: flex-start;
  }
  .label {
    width: 13em;
  }
  .switch {
    margin: 1em 0;
  }
</style>
