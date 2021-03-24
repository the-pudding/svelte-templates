<script>
    import CodeBlock from './CodeBlock.svelte'
    // importing code from a file requires the raw-loader npm package
    import codeFromFile from '!!raw-loader!./example.svelte'

    const inlineCode = `let x = 25`
</script>

<CodeBlock code={inlineCode} language='js' />
<CodeBlock code={codeFromFile} language='svelte' />