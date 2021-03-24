<script>
    import BriefMessage from './BriefMessage.svelte'

    let messageIteration = 0;
    let messageDuration = 500;
    let message = "This is the message";
</script>

<BriefMessage text={message} iteration={messageIteration} duration={messageDuration} />