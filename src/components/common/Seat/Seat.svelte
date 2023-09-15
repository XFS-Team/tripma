<script lang="ts">
  import { cva, cx } from 'class-variance-authority';
  import Button from '../Button/Button.svelte';
  import src from '/icons/check.svg';

  const seat = cva(
    'rounded inline-flex items-center justify-center bg-gradient-to-b',
    {
      variants: {
        type: {
          economy:
            'from-[#605DEC] to-[#2A26D9] w-[22px] h-8 hover:from-[#1513A0] hover:to-[#1513A0]',
          business:
            'from-[#5CD6C0] to-[#22C3A6] w-[30px] h-10 hover:from-[#009B7F] hover:to-[#009B7F]',
        },
      },
    },
  );

  interface $$Props {
    type: 'economy' | 'business';
    isDisable?: boolean;
  }

  let isSelected: boolean = false;

  const handleToggleSelectSeat = () => {
    if (!isDisable) {
      isSelected = !isSelected;
    }
  };

  export let isDisable: $$Props['isDisable'] = false;
  export let type: $$Props['type'] = 'economy';
</script>

<Button
  on:click={handleToggleSelectSeat}
  class={seat({
    type,
    class: cx(
      {
        'from-[#EB568C] to-[#ED5E76] hover:from-[#EB568C] hover:to-[#ED5E76]':
          isSelected,
        'bg-none cursor-default bg-purple-extra': isDisable,
      },
      $$props.class,
    ),
  })}
>
  {#if isSelected}
    <img {src} alt="icon check" />
  {/if}
</Button>
