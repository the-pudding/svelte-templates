<script>
  import Template from "./Template.svelte";

  import Icon from "./../templates/Icon.svelte";
  import iconPaths from "./../templates/icon-paths";
  const icons = Object.keys(iconPaths);
  import Toggle from "./../templates/Toggle.svelte";
  import ProgressDots from "./../templates/ProgressDots.svelte";
  import InView from "./../templates/InView.svelte";
</script>

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
      <li>
        <b>id</b>
        : what gets set as the `value`
      </li>
      <li>
        <b>label</b>
        : what gets displayed in the toggle
      </li>
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
      Is {isInView ? '' : 'not '}in view
    </div>
  </InView>
</Template>

<style>

</style>
