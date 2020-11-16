<script>
  export let name = "";
</script>

<section>
  <div class="heading">
    <h2>{name}</h2>
    <a
      href="https://github.com/the-pudding/svelte-templates/blob/master/templates/{name}.svelte">
      Code
    </a>
  </div>
  <div class="description">
    <slot name="description" />
  </div>

  <slot />
</section>

<style>
  section {
    margin: 5em 0;
  }
  .heading {
    position: relative;
  }
  .heading a {
    position: absolute;
    top: 50%;
    left: -0.7em;
    font-size: 0.8em;
    transform: translate(-100%, -50%);
  }
  .description {
    margin-bottom: 2em;
  }
</style>
