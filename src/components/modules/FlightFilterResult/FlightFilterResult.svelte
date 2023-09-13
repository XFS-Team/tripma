<script lang="ts">
  import Text from '@/components/common/Text/Text.svelte';
  import FlightDetail from '../FlightDetail/FlightDetail.svelte';
  import PriceGrid from '../PriceGrid/PriceGrid.svelte';
  import PriceHistory from '../PriceHistory/PriceHistory.svelte';
  import PriceRating from '../PriceRating/PriceRating.svelte';
  import Button from '@/components/common/Button/Button.svelte';
  import FlightItem from '../FlightItem/FlightItem.svelte';
  import src from '/images/map.png';
  import type { IFlightInfo } from '@/model/flight';
  import { LIST_DATA_DEPARTURE, LIST_DATA_RETURN } from '@/constants';

  let listSelectedFlight: IFlightInfo[] = [];
  let selectedFlight: IFlightInfo | null;
  let isFlightDeparture = false;
  let listDataFlight = LIST_DATA_DEPARTURE;

  $: {
    if (selectedFlight && isFlightDeparture) {
      listSelectedFlight[1] = selectedFlight;
    }

    if (selectedFlight && !isFlightDeparture) {
      listDataFlight = LIST_DATA_RETURN;
      listSelectedFlight[0] = selectedFlight;
      isFlightDeparture = true;
    }
  }
</script>

<div class="flex">
  <div class="w-[882px] mr-10 flex-shrink-0">
    <Text class="text-grey-600 font-semibold text-lg mb-4 ml-1">
      {#if !selectedFlight}
        Choose a <span class="text-primary">departing</span> flight
      {:else}
        Choose a <span class="text-primary">returning</span> flight
      {/if}
    </Text>
    <div class="border border-solid border-purple-extra rounded-xl">
      <ul class="p-4 max-h-[456px] overflow-scroll scroll-hidden">
        {#each listDataFlight as itemFlight}
          <li class="border-b border-solid border-purple-extra last:border-b-0">
            <FlightItem infoFlight={itemFlight} bind:selectedFlight />
          </li>
        {/each}
      </ul>
    </div>
    <Button class="float-right mt-6 mb-12" size="large" intent="secondary"
      >Show all flights</Button
    >
    <img {src} alt="map flight" />
  </div>
  <div class="w-full">
    {#if listSelectedFlight.length > 0}
      <FlightDetail {listSelectedFlight} />
      <div class="flex justify-end">
        {#if listSelectedFlight.length > 1}
          <a
            class="bg-primary text-grey-100 hover:bg-purple-dark text-lg px-5 py-3 rounded"
            href="/info">Passenger information</a
          >
        {:else}
          <Button size="large" intent="secondary">Save and close</Button>
        {/if}
      </div>
    {:else}
      <PriceGrid />
      <PriceHistory />
      <PriceRating />
    {/if}
  </div>
</div>
