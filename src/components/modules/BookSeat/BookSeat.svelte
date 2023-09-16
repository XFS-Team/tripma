<script>
  import InfoSeat from '@/components/modules/BookSeat/InfoSeat/InfoSeat.svelte';
  import SelectSeat from '@/components/modules/BookSeat/SelectSeat/SelectSeat.svelte';
</script>

<div
  class="relative bg-[url('/images/bg-place.png')] bg-no-repeat bg-[-860px_center] h-[2700px] mb-[150px]"
>
  <SelectSeat />
  <InfoSeat
    class="fixed h-screen top-0 right-0 w-1/2 bg-white/[.5] border-l border-solid border-grey-300/[.5] z-50"
  />
</div>
