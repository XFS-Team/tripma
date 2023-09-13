<script lang="ts">
  import type { IFlightInfo } from '@/model/flight';
  import src from '/images/avt-flight.png';
  import Text from '@/components/common/Text/Text.svelte';

  interface $$Props {
    listSelectedFlight: IFlightInfo[];
  }

  export let listSelectedFlight: $$Props['listSelectedFlight'];
</script>

<div class="border border-solid border-purple-extra rounded-xl mt-11 mb-4">
  <ul class="p-4">
    {#each listSelectedFlight as itemFlight}
      <li class="border-b border-solid border-purple-extra last:border-none">
        <div class="flex items-start p-2 mb-2">
          <img {src} alt="avt flight" />
          <div class="ml-2 min-w-[150px]">
            <h3 class="mb-1">{itemFlight?.airline}</h3>
            <Text>{itemFlight?.code}</Text>
          </div>
          <div class="flex flex-col gap-y-1 max-w-[200px]">
            <Text>{itemFlight?.duration}</Text>
            <Text>{itemFlight?.departure} - {itemFlight?.arrival}</Text>
            <Text>{itemFlight?.time}</Text>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
<div class="flex flex-col mb-12 items-end">
  <div class="flex">
    <div class="text-end mr-10">
      <Text class="text-grey-900 mb-2">Subtotal</Text>
      <Text class="text-grey-900 mb-2">Taxes and Fees</Text>
      <Text class="text-grey-900">Total</Text>
    </div>
    <div>
      <Text class="text-grey-900 mb-2">$503</Text>
      <Text class="text-grey-900 mb-2">$121</Text>
      <Text class="text-grey-900">$624</Text>
    </div>
  </div>
</div>
