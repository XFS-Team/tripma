<script lang="ts">
  import { cva } from 'class-variance-authority';
  import Text from '../Text/Text.svelte';
  import Button from '../Button/Button.svelte';
  import type { IItemDropdown, IListDropdown } from '@/model/dropdown';
  import Counter from '../Counter/Counter.svelte';

  const dropDown = cva(
    'border-2 border-solid border-primary rounded max-w-[256px] relative py-1 inline-block',
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

  const handleDropdownChange = (itemSelected: IItemDropdown) => {
    selectedValue = itemSelected;
    isDropdownShow = false;
  };

  const handleToggleDropdown = () => {
    isDropdownShow = !isDropdownShow;
  };

  const handleClickOutside = () => {
    isDropdownShow = false;
  };

  interface $$Props {
    type?: 'default' | 'checkbox' | 'counter';
    placeholder?: string;
    icon?: string;
    listDropdown: IListDropdown;
    class?:string
  }

  export let type: $$Props['type'] = 'default';
  export let placeholder: $$Props['placeholder'] = 'Placeholder';
  export let icon: $$Props['icon'] = '';
  export let listDropdown: $$Props['listDropdown'] = [];
</script>

<div class={dropDown({ class: $$props.class })}>
  <Button
    on:click={handleToggleDropdown}
    size="small"
    class="flex items-center w-full text-lg"
  >
    <img class="mr-2" src={icon} alt="icon fly" />
    {#if selectedValue}
      <p>{selectedValue.name}</p>
    {:else}
      <Text>{placeholder}</Text>
    {/if}
  </Button>
  {#if isDropdownShow}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={handleClickOutside}
        class="fixed inset-0 z-10"
      />
    <ul
      class="absolute top-[calc(100%+2px)] w-[230px] left-6 bg-white border border-solid border-grey-200 rounded-lg shadow-dropDown p-4 max-h-[312px] overflow-y-auto scroll-hidden z-20"
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
            <Counter valueCounter={itemDropdown.value} class="mb-2" name={itemDropdown.name} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
