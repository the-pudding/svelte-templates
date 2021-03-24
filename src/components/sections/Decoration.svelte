<script>
    import DocTemplate from './../DocTemplate.svelte'
    import BriefMessage from './../../../templates/BriefMessage.svelte'
    import BriefMessageExample from '!!raw-loader!./../../examples/BriefMessageExample.svelte'
    import Number from './../../../templates/Number.svelte'
    import NumberExample from '!!raw-loader!./../../examples/NumberExample.svelte'
    import Confetti from './../../../templates/Confetti.svelte'
    import ConfettiExample from '!!raw-loader!./../../examples/ConfettiExample.svelte'


    let propDescriptionsBM = [
        ['text', 'string', 'The text that will appear on your message'],
        ['iteration', 'number', 'A number to re-trigger before the message has disappeared'],
        ['duration', 'number', 'The length of time, in milliseconds, the message remains on screen (default 1000)']
    ]

    let messageIteration = 0;
    let messageDuration = 500;
    let message = "This is the message";
    let number = 60;
    let numberDuration = 500;
    let numberFormat = ".1f";
    let confettiNumberOfElements = 50;
    let confettiDurationInSeconds = 2;
    let confettiTimeout = 10000;

    let propDescriptionsNum = [
        ['number', 'number', 'The final number that the animation should reach'],
        ['duration', 'number', 'The duration, in milliseconds, that the interpolation animation should take.'],
        ['format', 'string', 'Format of the number.']
    ]

    let propDescriptionsConfetti = [
        ['numberOfItems', 'number', 'The number of randomly generated elements in your confetti. Defaults to 50.'],
        ['durationInSeconds', 'number', 'The duration, in seconds, of one animation loop.'],
        ['timeout', 'number', 'The duration, in milliseconds, until the confetti disappears. Leave this blank to keep the party going indefinitely']
    ]

</script>

<h2>Decoration</h2>

<!-- Brief Message -->

<DocTemplate componentLabel={'brief message'} propNumber='3' propDesc={propDescriptionsBM} code={BriefMessageExample} name='BriefMessage'>
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

<!-- Interpolated Numbers -->

<DocTemplate componentLabel={'interpolated number'} propNumber='1' propDesc={propDescriptionsNum} code={NumberExample} name='BriefMessage'>
    <p slot='description'>      
        Displays a number with an interpolated animation when changed.</p>

    <div slot="examples">
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

      
        <Number {number} duration={numberDuration} format={numberFormat} />
    </div>

    <p slot='a11y'>Use this component sparingly. Too much animation can be disorienting or distracting for some users. </p>

</DocTemplate>


<!-- Confetti -->

<DocTemplate componentLabel={'confetti'} propNumber='3' propDesc={propDescriptionsConfetti} code={ConfettiExample} name='BriefMessage'>
    <p slot='description'> Throw in some festive confetti!</p>
    <a slot='view' href='https://svelte.dev/repl/9a3b6aec3b354b7a917fbbd5656c7094?version=3.35.0'>on Svelte REPL</a>
    <div slot="examples">
        <label>
            <div class="label">number of elements</div>
            <input
              bind:value={confettiNumberOfElements}
              type="number"
              style="width: 6em" />
          </label>
          <label>
            <div class="label">duration (seconds)</div>
            <input
              bind:value={confettiDurationInSeconds}
              type="number"
              style="width: 6em" />
          </label>
          <label>
            <div class="label">timeout (milliseconds)</div>
            <input
              bind:value={confettiTimeout}
              type="number"
              style="width: 6em" />
          </label>
      
        <div
          style=" position: relative; height: 10em; padding-left: 50%; padding-top:
          4em;">
          <Confetti numberOfItems={confettiNumberOfElements} timeout={confettiTimeout} durationInSeconds={2.4} />
        </div>
    </div>

    <p slot='a11y'>Use this component sparingly. Too much animation can be disorienting or distracting for some users. </p>

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