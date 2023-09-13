<script lang="ts">
  import { cva } from 'class-variance-authority';
  import Button from '../Button/Button.svelte';
  import Text from '../Text/Text.svelte';

  const checkbox = cva('', {
    variants: {
      size: {
        default:
          'w-4 h-4 flex justify-center items-center border border-solid border-grey-600 mr-2 rounded-[2px] cursor-pointer',
      },
    },
  });

  let isCheck = false;

  interface $$Props {
    label?: string;
    size?: 'default';
  }

  const handleToggleCheck = () => {
    isCheck = !isCheck;
  };

  export let size: $$Props['size'] = 'default';
  export let label: $$Props['label'] = '';
</script>

<div class="flex items-center">
  <Button
    class={checkbox({ size, class: $$props.class })}
    on:click={handleToggleCheck}
  >
    {#if isCheck}
      <span class="w-2 h-2 bg-primary rounded-[1px]" />
    {/if}
  </Button>
  <Text>{label}</Text>
</div>
