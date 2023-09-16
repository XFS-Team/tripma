<script>
  import CardPlace from '@/components/modules/CardPlace/CardPlace.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import arrowNextImage from '/icons/arrow-right.svg';
  import Button from '@/components/common/Button/Button.svelte';
  import { LIST_PLACES_STAY } from '@/constants';
</script>

<section class="container">
  <div class="px-8 py-10">
    <div class="flex justify-between mb-6">
      <Text color="secondary" style="bold" size="large"
        >Explore unique <span class="text-secondary">places to stay</span></Text
      >
      <a class="text-grey-300 text-2xl flex" href="/"
        >All
        <img src={arrowNextImage} alt="icon next" />
      </a>
    </div>
    <div class="flex flex-wrap -mx-2 lg:-mx-5">
      {#each LIST_PLACES_STAY as itemPlaceStay}
        <CardPlace
          type="explore"
          dataCard={itemPlaceStay}
          class="w-full sm:w-1/2 md:w-1/3"
        />
      {/each}
    </div>
  </div>
  <Button intent="primary" class="my-10 flex mx-auto px-4 py-2.5"
    >Explore more stays</Button
  >
</section>
