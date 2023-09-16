<script>
  import Text from '@/components/common/Text/Text.svelte';
  import { DATA_FLIGHT_DETAIL } from '@/constants';
</script>

<div class="max-w-[300px]">
  <h2 class="mb-6 text-2xl font-bold text-grey-600">Price breakdown</h2>
  <ul class="flex flex-col gap-y-3 mb-4">
    {#each DATA_FLIGHT_DETAIL as itemBill}
      <li class="flex justify-between">
        <Text color="secondary">{itemBill.description}</Text>
        <Text color="secondary">${itemBill.price}</Text>
      </li>
    {/each}
  </ul>
  <div class="flex justify-between py-3 border-y border-solid border-grey-200">
    <Text class="text-grey-800 font-semibold">Amount paid</Text>
    <Text class="text-grey-800 font-semibold">$768</Text>
  </div>
</div>
