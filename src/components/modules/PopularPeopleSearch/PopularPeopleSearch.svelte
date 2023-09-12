<script>
    import CardPlace from '../CardPlace/CardPlace.svelte';
    import Text from '@/components/common/Text/Text.svelte';
    import arrowNextImage from '/icons/arrow-right.svg';
    import Button from '@/components/common/Button/Button.svelte';
    import { POPULAR_PEOPLE_SEARCH } from '@/constants';
  </script>
  
  <section class="container mb-10">
      <div class="flex justify-between mb-6">
         <Text
         class="text-lg md:text-2xl"
         color="secondary"
         style="bold"
         size="large"
         >People in <span class="text-primary">San Francisco </span>also searched for</Text>
        <a class="text-grey-300 text-2xl flex" href="/"
          >All
          <img src={arrowNextImage} alt="icon next" />
        </a>
      </div>
      <div class="flex flex-wrap -mx-2 lg:-mx-5">
        {#each POPULAR_PEOPLE_SEARCH as itemPlaceStay}
          <CardPlace
            type="deal"
            dataCard={itemPlaceStay}
            class="w-full sm:w-1/2 md:w-1/3"
          />
        {/each}
      </div>
  </section>
  