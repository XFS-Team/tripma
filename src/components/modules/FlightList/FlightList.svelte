<script>
  import Text from '@/components/common/Text/Text.svelte';
  import FlightItem from '../FlightItem/FlightItem.svelte';
  import Button from '@/components/common/Button/Button.svelte';
  import { LIST_DATA_FLIGHT_FLIGHT } from '@/constants';
</script>

<Text class="text-grey-600 font-semibold text-lg mb-4 ml-1">
  Choose a <span class="text-primary">departing</span> flight
</Text>
<div class="border border-solid border-purple-extra rounded-xl">
  <ul class="p-4 max-h-[456px] overflow-scroll scroll-hidden">
    {#each LIST_DATA_FLIGHT_FLIGHT as  itemFlight}
    <li class="border-b border-solid border-purple-extra">
      <FlightItem />
    </li>
    {/each}
  </ul>
</div>
<Button class="float-right mt-6" size="large" intent="secondary">Show all flights</Button>