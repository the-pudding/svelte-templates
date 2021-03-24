<script>
    import DocTemplate from './../DocTemplate.svelte'
    import BriefMessage from './../../../templates/BriefMessage.svelte'
    import BriefMessageExample from '!!raw-loader!./../../examples/BriefMessageExample.svelte'


    let propDescriptionsBM = [
        ['text', 'string', 'The text that will appear on your message'],
        ['iteration', 'number', 'A number to re-trigger before the message has disappeared'],
        ['duration', 'number', 'The length of time, in milliseconds, the message remains on screen (default 1000)']
    ]

    let messageIteration = 0;
    let messageDuration = 500;
    let message = "This is the message";

</script>

<h2>Decoration</h2>

<!-- Brief Message -->

<DocTemplate componentLabel={'brief message'} propNumber='1' propDesc={propDescriptionsBM} code={BriefMessageExample} name='BriefMessage'>
    <p slot='description'>      
        This is a message that will pop up to give quick user feedback, and
        disappears after a short amount of time. The message shows up whenever the <code>text</code> or <code>iteration</code> changes. Changing the <code>iteration</code> is a good way to make sure the message shows up when needed, even if the <code>text</code> doesn't change.</p>

    <div slot="examples">
        <label>
            <div class="label">text</div>
            <input bind:value={message} style="width: 20em" />
          </label>
          <label>
            <div class="label">duration (milliseconds)</div>
            <input bind:value={messageDuration} type="number" style="width: 6em" />
          </label>
          <button on:click={() => (messageIteration += 1)}>Show message</button>

          <BriefMessage
          text={message}
          iteration={messageIteration}
          duration={messageDuration} />
    </div>

    <p slot='a11y'>Be cautious when using this component with non-decorative content for accessibility reasons. Some users may not be able to read quickly enough to process the information before it disappears. Others may have read it and not retained the information. In its current form, screen reader or assistive technology users aren't identified of the notification at all. Find more information about ensuring these types of messages are as accessible as possible in <a href="https://sheribyrnehaber.medium.com/designing-toast-messages-for-accessibility-fb610ac364be">this article</a>.</p>

</DocTemplate>

<style>
    code {
        font-weight: bold;
    }

    .example {
        display: flex;
        justify-content: space-between;
    }

    .example  span {
        font-size: 1.5em;
        font-family: monospace;
    }

    .example > p {
        text-align: center;
    }

    .pagEx {
        text-align: center;
    }
</style>