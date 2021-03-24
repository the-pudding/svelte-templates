<script>
  import Templates from "./Templates.svelte";
</script>

<main>
  <h1>Hi friend!</h1>
  <p>These templates are yours to grab and modify as you need!</p>
  <p>Just copy the source code & paste into a new .svelte file.</p>
  <p>
    These can do basic color theming, if you set the css variables in a parent
    component:
  </p>
  <ul>
    <li>
      <b style="color: var(--accent-color)">--accent-color</b>
    </li>
    <li>
      <b style="color: var(--gray)">--gray</b>
    </li>
  </ul>

  <!-- <Templates /> -->
</main>

<style>
  main {
    padding: 1em 3em;
    --accent-color: #5758bb;
    --gray: #95afc0;
  }

  h1 {
    font-size: 3em;
    font-weight: 100;
  }

  main :global(a) {
    color: var(--accent-color);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
