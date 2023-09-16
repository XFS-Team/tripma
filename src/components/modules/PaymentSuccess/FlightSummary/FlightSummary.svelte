<script>
  import Text from '@/components/common/Text/Text.svelte';
  import FlightItem from '../../FlightItem/FlightItem.svelte';
  import { LIST_DATA_RETURN } from '@/constants';
</script>

<div>
  <h2 class="mb-6 text-2xl font-bold text-grey-600">Flight summary</h2>
  <div class="mb-10">
    <Text class="mb-4" color="secondary">Departing February 25th, 2021</Text>
    <div class="border border-solid border-grey-200 rounded mb-3">
      <FlightItem infoFlight={LIST_DATA_RETURN[0]} />
    </div>
    <Text size="small">Seat 9F (economy, window), 1 checked bag</Text>
  </div>
  <div>
    <Text class="mb-4" color="secondary">Arriving March 21st, 2021</Text>
    <div class="border border-solid border-grey-200 rounded mb-3">
      <FlightItem infoFlight={LIST_DATA_RETURN[0]} />
    </div>
    <Text size="small">Seat 4F (business, window), 1 checked bag</Text>
  </div>
</div>
