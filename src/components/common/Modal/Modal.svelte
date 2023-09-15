<script lang="ts">
  import Button from '../Button/Button.svelte';
  import Text from '../Text/Text.svelte';

  interface $$Props {
    heading: string;
    description: string;
    okSubmitText: string;
  }

  export let heading: $$Props['heading'];
  export let description: $$Props['description'];
  export let okSubmitText: $$Props['okSubmitText'];
</script>

<div
  class="fixed flex items-center justify-center bg-grey-300/[.4] inset-0 z-50"
>
  <div
    class="bg-white text-grey-600 text-2xl font-bold border border-solid border-grey-200 rounded-xl w-[548px] p-10"
  >
    <h2 class="mb-3 text">{heading}</h2>
    <Text class="mb-5">{description}</Text>
    <div class="flex justify-end gap-x-4">
      <Button size="large" intent="secondary">Cancel</Button>
      <a
        class="rounded border border-primary text-primary hover:bg-purple-light text-lg px-5 py-3"
        href="/payment">{okSubmitText}</a
      >
    </div>
  </div>
</div>
