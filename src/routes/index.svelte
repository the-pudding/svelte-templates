<script>
  import Templates from "./../components/Templates.svelte"
  import TemplatesNew from "./../components/TemplatesNew.svelte"
  import CodeBlock from "../../templates/CodeBlock.svelte"

  const cssCode = `:root {
    --accent-color: #3E3454;
    --gray: #ccc;
}`
</script>

<article>
  <h1>Hey friend!</h1>
<p>These templates are yours to grab and modify as you need!</p>
<p>Just copy the source code & paste into a new <code>.svelte</code> file.</p>
<p>
  These can do basic color theming, if you set the css variables in a parent
  component:
</p>
<CodeBlock language="css" code={cssCode} />

<p>
If you don't define an <code>--accent-color</code> and <code>--gray</code>, the accent defaults to <code>#282828</code> and gray defaults to <code>#ccc</code>.
</p>

<p>
  Whenever possible, component code is available both with opinionated styling (e.g., animations, rounded corners etc.) and without it. Choose whichever better suits your purpose!
  </p>
</article>

<TemplatesNew />
<!-- <Templates /> -->

<style>
  article {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  h1 {
    font-size: 5em;
    font-weight: 100;
    font-family: 'Tiempos Headline'
  }

  p {
    font-family: 'National 2 Web';
    font-size: 1.5em;
    font-weight: regular;
  }
</style>
