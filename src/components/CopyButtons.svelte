<script>
    import BriefMessage from "./../../templates/BriefMessage.svelte"
    import templatesCode from "./templates-code"

    export let name = ""

    $: code = templatesCode[name] || "couldn't find code"

    const grabRawCode = str => {
    const [base, gravy] = str.split("/* gravy */")
    return gravy ? base + "</style>" : base
  }


  $: baseCode = grabRawCode(code)
  $: isRawCodeDifferent = code.length != baseCode.length

  let successMessageIteration1 = 0
  let successMessageIteration2 = 0

  const onCopy = (code, index) => {
    try {
      navigator.clipboard.writeText(code).then(
        () => {
          if (index == 1) {
            successMessageIteration1 += 1
          } else {
            successMessageIteration2 += 1
          }
        },
        e => {
          throw new Error(e)
        },
      )
    } catch (e) {
      console.log("error when copying code", e)
    }
  }
</script>

  <button
    on:click="{() => {
      onCopy(code, 1)
    }}">
    <div class="message">
      {#if successMessageIteration1}
        <BriefMessage
          text="copied to clipboard! 😺🐱‍🏍"
          iteration="{successMessageIteration1}" />
      {/if}
    </div>
    Copy code with styles
  </button>
  {#if isRawCodeDifferent}
    <button
      on:click="{() => {
        onCopy(baseCode, 2)
      }}">
      <div class="message">
        {#if successMessageIteration2}
          <BriefMessage
            text="copied to clipboard! 😺🐱‍🏍"
            iteration="{successMessageIteration2}" />
        {/if}
      </div>
      Copy code without styles
    </button>
  {/if}

  <style>
      button {
          background-color: #C7E4F2;
          color: #3E3454;
          border-color: #3E3454;
          margin: 0.5rem 0.5rem 0.5rem 0;
      }
  </style>