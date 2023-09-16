<script>
  import CartPlace from '../../CardPlace/CardPlace.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import arrowNextImage from '/icons/arrow-right.svg';
  import {LIST_FLIGHT_DEALS_DETAIL } from '@/constants';
</script>

<section class="container py-10 mb-10">
  <div class="flex justify-between mb-4 md:mb-6 flex-wrap">
    <Text
      class="text-lg md:text-2xl"
      color="secondary"
      style="bold"
      size="large"
      >places to stay <span class="text-primary">flight deals </span>in Japan</Text
    >
    <a class="text-grey-300 text-lg md:text-2xl flex items-center" href='/public'
      >All
      <img src={arrowNextImage} alt="icon next" />
    </a>
  </div>
  <div class="flex flex-wrap -mx-2 lg:-mx-5">
    {#each LIST_FLIGHT_DEALS_DETAIL as itemFlightDeals}
      <CartPlace
        dataCard={itemFlightDeals}
        type="stay"
        class="w-full sm:w-1/2 md:w-1/3"
      />
    {/each}
  </div>
</section>
