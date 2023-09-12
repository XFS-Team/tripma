<script lang="ts">
  import { cva } from 'class-variance-authority';
  import Text from '@/components/common/Text/Text.svelte';
  import type { IFlightDealsItem } from '@/model';

  const flightDealsItem = cva('px-2 py-2 lg:py-5 lg:px-5');

  interface $$Props {
    class?: string;
    dataFlight: IFlightDealsItem;
  }

  export let dataFlight: $$Props['dataFlight'];
</script>

<div class={flightDealsItem({ class: $$props.class })}>
  <div class="flex flex-col shadow-card rounded-xl overflow-hidden">
    <img
      class="w-full h-[240px] lg:h-[397px]"
      src={dataFlight.image}
      alt="cart"
    />
    <div class="px-6 py-4">
      <div class="flex flex-wrap lg:flex-nowrap justify-between">
        <Text
          class="font-semibold text-grey-600 text-base lg:text-lg mb-2 lg:mb-0"
          >{dataFlight.name}<span class="text-primary">, {dataFlight.place}</span></Text
        >

        <Text class="font-semibold mb-1 text-base lg:text-lg lg:text-grey-600">
          <span class="lg:hidden">Flights from</span>
          ${dataFlight.price}</Text
        >
      </div>
      <Text class="hidden lg:block">{dataFlight.description}</Text>
    </div>
  </div>
</div>
