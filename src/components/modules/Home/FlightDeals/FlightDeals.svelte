<script>
  import CartPlace from '@/components/modules/CardPlace/CardPlace.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import arrowNextImage from '/icons/arrow-right.svg';
  import { LIST_FLIGHT_DEALS } from '@/constants';
</script>

<section class="container px-8 py-10 mb-10">
  <div class="flex justify-between mb-4 md:mb-6 flex-wrap">
    <Text
      class="text-lg md:text-2xl"
      color="secondary"
      style="bold"
      size="large"
      >Find your next adventure with these <span class="text-primary"
        >flight deals</span
      ></Text
    >
    <a class="text-grey-300 text-lg md:text-2xl flex items-center" href="/"
      >All
      <img src={arrowNextImage} alt="icon next" />
    </a>
  </div>
  <div class="flex flex-wrap -mx-2 lg:-mx-5">
    {#each LIST_FLIGHT_DEALS as itemFlightDeals}
      <CartPlace  
        dataCard={itemFlightDeals}
        class="w-full sm:w-1/2 md:w-1/3 last:sm:w-1/2 last:md:w-full"
      />
    {/each}
  </div>
</section>
