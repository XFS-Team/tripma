<script lang="ts">
  import Text from '@/components/common/Text/Text.svelte';
  import type { IFlightInfo } from '@/model/flight';

  interface $$Props {
    infoFlight: IFlightInfo;
    selectedFlight: IFlightInfo | null;
  }
 
  const handleFlightItemClick = () => {
    selectedFlight = infoFlight;
  };

  export let selectedFlight: $$Props['selectedFlight'];
  export let infoFlight: IFlightInfo;

  const {
    srcImage,
    airline,
    arrival,
    departure,
    duration,
    price,
    stops,
    time,
    trip,
  } = infoFlight;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={`flex items-center px-4 py-1.5 cursor-pointer hover:bg-purple-white my-1 rounded border border-solid ${
    selectedFlight && infoFlight.key === selectedFlight.key
      ? 'bg-purple-white border-primary'
      : 'border-transparent'
  }`}
  on:click={handleFlightItemClick}
>
  <img class="mr-6" src={srcImage} alt="avt" />
  <div class="flex flex-1">
    <div class="flex flex-col gap-y-1 w-[180px]">
      <Text class="text-grey-900">{duration}</Text>
      <Text class="text-grey-400">{airline}</Text>
    </div>
    <Text class="text-grey-900 w-[180px]">{departure} - {arrival}</Text>
    <div class="flex flex-col gap-y-1 flex-1 text-end">
      <Text class="text-grey-900">{stops}</Text>
      <Text class="text-grey-400">{time}</Text>
    </div>
    <div class="flex flex-col gap-y-1 w-[130px] text-end">
      <Text class="text-grey-900">{price}</Text>
      <Text class="text-grey-400">{trip}</Text>
    </div>
  </div>
</div>
