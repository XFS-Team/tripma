<script lang="ts">
  import { cva } from 'class-variance-authority';
  import Text from '../Text/Text.svelte';
  import Button from '../Button/Button.svelte';
  import type { IItemDropdown, IListDropdown } from '@/model/dropdown';
  import Counter from '../Counter/Counter.svelte';

  const dropDown = cva(
    'border-2 border-solid rounded xl:max-w-[256px] relative py-1 inline-block',
    {
      variants: {
        size: {
          default: 'text-lg',
          small: 'text-base',
        },
      },
    },
  );

  let isDropdownShow = false;
  let selectedValue: IItemDropdown;
  let container: HTMLDivElement;

  const handleDropdownChange = (itemSelected: IItemDropdown) => {
    selectedValue = itemSelected;
    isDropdownShow = false;
  };

  const handleToggleDropdown = () => {
    isDropdownShow = !isDropdownShow;
  };

  function onWindowClick(e: MouseEvent) {
    if (container.contains(e.target as Node) == false) isDropdownShow = false;
  }

  interface $$Props {
    type?: 'default' | 'checkbox' | 'counter';
    placeholder?: string;
    icon?: string;
    listDropdown: IListDropdown;
    class?: string;
  }

  export let type: $$Props['type'] = 'default';
  export let placeholder: $$Props['placeholder'] = 'Placeholder';
  export let icon: $$Props['icon'] = '';
  export let listDropdown: $$Props['listDropdown'] = [];
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container} class="{dropDown({ class: $$props.class })} {isDropdownShow ? 'border-primary' : 'border-transparent'}">
  <Button
    on:click={handleToggleDropdown}
    size="small"
    class="flex items-center w-full"
  >
    <img class="mr-2" src={icon} alt="icon fly" />
    {#if selectedValue}
      <Text class="text-sm md:text-lg">{selectedValue.name}</Text>
    {:else}
      <Text class="text-sm md:text-lg">{placeholder}</Text>
    {/if}
  </Button>
  {#if isDropdownShow}
    <ul
      class="absolute top-[calc(100%+2px)] w-full xl:w-[230px] xl:left-6 bg-white border border-solid border-grey-200 rounded-lg shadow-dropDown p-4 max-h-[312px] overflow-y-auto scroll-hidden z-20"
    >
      {#each listDropdown as itemDropdown}
        <li>
          {#if type === 'default'}
            <Button
              on:click={() => handleDropdownChange(itemDropdown)}
              class="rounded-md hover:bg-primary hover:text-white mb-2 w-full text-left px-3 py-1 text-base"
            >
              {itemDropdown.name}
            </Button>  
          {/if}
          {#if type === 'counter'}
            <Counter
              valueCounter={itemDropdown.value}
              class="mb-2"
              name={itemDropdown.name}
            />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
