<script>
    import DocTemplate from './../DocTemplate.svelte'
    import CollapsibleSection from './../../../templates/CollapsibleSection.svelte'
    import CollapsibleSectionExample from '!!raw-loader!./../../examples/CollapsibleSectionExample.svelte'


    let propDescriptionsCS = [
        ['headerText', 'string', 'The text visible when the section is not expanded']]
</script>

<h2>Page Structure</h2>

<!-- Collapsible Sections -->

<DocTemplate componentLabel={'collapsible sections'} propNumber='1' propDesc={propDescriptionsCS} code={CollapsibleSectionExample} name='CollapsibleSection'>
    <p slot='description'>A component to create sections of content that can be hidden (visually and to keyboards/screen readers) and made visible again. This component uses unnamed <a href=https://svelte.dev/tutorial/slots>slots</a>, so any content can be wrapped within it and hidden and made visible.</p>
    <a slot='view' href='https://svelte.dev/repl/a5f4d395b15a44d48a6b2239ef705fc4?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <CollapsibleSection headerText={'Collapse or expand me!'} >
            <div class="content">
                Look at all this fun content
            </div>
        </CollapsibleSection>
        	
        <CollapsibleSection headerText={'I can collapse or expand too!'} >
            <div class="content">
                Look at all this fun content
            </div>
        </CollapsibleSection>
    </div>

    <p slot='a11y'>This component is keyboard and screen-reader accessible by default. This component uses a <code>button</code> element for navigation, so they can each be individually accessed via <code>TAB</code>, and selected via <code>SPACE</code> or <code>ENTER</code>. By default, this button is wrapped in an <code>h3</code> element. If that isn't the next heading level for your page, it'll need to be manually changed in the component itself.</p>

</DocTemplate>