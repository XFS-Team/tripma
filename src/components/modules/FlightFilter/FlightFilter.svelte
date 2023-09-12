<script>
  import Button from '@/components/common/Button/Button.svelte';
  import Dropdown from '@/components/common/Dropdown/Dropdown.svelte';
  import arrivalDownIcon from '/icons/arrival-down.svg';
  import arrivalUpIcon from '/icons/arrival-up.svg';
  import personIcon from '/icons/person.svg';
  import calendarIcon from '/icons/calendar.svg';
  import { LIST_DATA_ADULT, LIST_DATA, LIST_DATA_FILTER } from '@/constants';
</script>

<form on:submit|preventDefault class="flex flex-col items-center lg:items-start mb-12" action="#">
  <div
    class="w-full sm:w-[420px] lg:w-fit flex justify-center items-center lg:border-2 border-solid border-grey-200 flex-wrap mb-6"
  >
    <div
      class="flex flex-wrap border-2 border-solid border-grey-200 rounded lg:border-none lg:rounded-none"
    >
      <Dropdown
        listDropdown={LIST_DATA}
        icon={arrivalUpIcon}
        placeholder="From where?"
        class="w-[calc(50%-1px)] sm:min-w-[175px] lg:w-auto"
      />
      <span class="inline-block h-[49px] w-0.5 bg-grey-200" />
      <Dropdown
        listDropdown={LIST_DATA}
        icon={arrivalDownIcon}
        placeholder="Where to?"
        class="w-[calc(50%-1px)] sm:min-w-[175px] lg:w-auto"
      />
      <span class="w-full h-0.5 lg:h-[49px] lg:w-0.5 bg-grey-200" />
      <Dropdown
        icon={calendarIcon}
        listDropdown={LIST_DATA}
        placeholder="Date - return"
        class="w-full lg:w-[252px]"
      />
    </div>
    <span class="hidden lg:inline-block h-[49px] w-0.5 bg-grey-200" />
    <Dropdown
      listDropdown={LIST_DATA_ADULT}
      icon={personIcon}
      placeholder="1 adult"
      class="hidden lg:block min-w-[175px] w-auto"
      type="counter"
    />
    <Button
      intent="primary"
      class="max-w-[415px] w-full lg:w-auto px-5 py-2.5 mt-4 lg:mt-0"
      >Search</Button
    >
  </div>
  <div class="max-w-[420px] lg:max-w-none flex gap-4 flex-wrap">
    {#each LIST_DATA_FILTER as itemFilter}
      <Dropdown
        class="py-0"
        border="border-grey-200"
        isLabel
        listDropdown={LIST_DATA}
        placeholder={itemFilter.name}
      />
    {/each}
  </div>
</form>
