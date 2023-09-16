<script lang="ts">
  import Button from '../Button/Button.svelte';
  import Text from '../Text/Text.svelte';
  import iconClose from '/icons/close-grey.svg';

  interface $$Props {
    text: String;
    class?: string;
  }

  let isMessage;

  const handleCloseMessage = () => {
    isMessage = false;
  };

  export let text: $$Props['text'];
</script>

<div
  class="flex items-center pl-6 py-4 border border-solid border-green-400 rounded-lg bg-green-200 mb-10"
>
  <Text size="small" class="text-green-400">{text}</Text>
  <Button on:click={handleCloseMessage}>
    <img src={iconClose} alt="icon close" />
  </Button>
</div>
