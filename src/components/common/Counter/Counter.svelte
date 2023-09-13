<script lang="ts">
  import { cva } from 'class-variance-authority';
  import Text from '../Text/Text.svelte';
  import Button from '../Button/Button.svelte';
  import minusImage from '/icons/minus.svg';
  import plusImage from '/icons/plus.svg';

  const counter = cva('flex items-center', {
    variants: {},
  });

  interface $$Props {
    name?: string;
    class?: string;
    valueCounter: string;
  }

  const handleIncrease = () => {
    const valueNumber = parseInt(valueCounter) + 1;
    valueCounter = valueNumber.toString();
  };
  
  const handleDecrease = () => {
    if (parseInt(valueCounter) > 1) {
      const valueNumber = parseInt(valueCounter) - 1;
      valueCounter = valueNumber.toString();
    }
  };

  export let valueCounter = '1';
  export let name: $$Props['name'] = '';
</script>

<div class={counter({ class: $$props.class })}>
  {#if name}
    <Text class="w-20">{name}:</Text>
  {/if}
  <div class="flex items-center gap-x-2">
    <Button
      on:click={handleDecrease}
      class="w-8 h-8 flex items-center justify-center"
    >
      <img src={minusImage} alt="icon minus" />
    </Button>
    <Text class="w-8 h-8 flex items-center justify-center">{valueCounter}</Text>
    <Button
      on:click={handleIncrease}
      class="w-8 h-8 flex items-center justify-center"
    >
      <img src={plusImage} alt="icon plug" />
    </Button>
  </div>
</div>
