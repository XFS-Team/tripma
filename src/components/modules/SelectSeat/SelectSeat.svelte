<script>
  import Seat from '@/components/common/Seat/Seat.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import src from '/icons/information.svg';
  import { LIST_DATA_SEAT_BUSINESS, LIST_DATA_SEAT_ECONOMY } from '@/constants';
</script>

<div class="w-[200px] ml-[253px] translate-y-[480px]">
  <div class="bg-white px-2 py-5 rounded-lg mb-4">
    {#each LIST_DATA_SEAT_BUSINESS as itemRowSeat}
      <div class="flex justify-between items-center mb-4 last:mb-0">
        <div class="flex items-center gap-2">
          <Seat isDisable={itemRowSeat.seat1} type="business" />
          <Seat isDisable={itemRowSeat.seat2} type="business" />
        </div>
        <Text class="text-sm">{itemRowSeat.row}</Text>
        <div class="flex items-center gap-2">
          <Seat isDisable={itemRowSeat.seat3} type="business" />
          <Seat isDisable={itemRowSeat.seat4} type="business" />
        </div>
      </div>
    {/each}
  </div>
  <div class="bg-white px-2 py-5 rounded-lg">
    {#each LIST_DATA_SEAT_ECONOMY as groupSeat}
      <div class="flex items-center mb-2">
        <img {src} alt="icon info" />
        <Text class="text-xs">Exit row</Text>
      </div>
      {#each groupSeat as itemRowSeat}
        <div class="flex justify-between items-center mb-2 last:mb-0">
          <div class="flex items-center gap-1">
            <Seat isDisable={itemRowSeat.seat1} type="economy" />
            <Seat isDisable={itemRowSeat.seat2} type="economy" />
            <Seat isDisable={itemRowSeat.seat3} type="economy" />
          </div>
          <Text class="text-sm">{itemRowSeat.row}</Text>
          <div class="flex items-center gap-1">
            <Seat isDisable={itemRowSeat.seat4} type="economy" />
            <Seat isDisable={itemRowSeat.seat5} type="economy" />
            <Seat isDisable={itemRowSeat.seat6} type="economy" />
          </div>
        </div>
      {/each}
    {/each}
  </div>
</div>
