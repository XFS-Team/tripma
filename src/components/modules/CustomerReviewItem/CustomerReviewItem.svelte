<script lang="ts">
  import Avatar from '@/components/common/Avatar/Avatar.svelte';
  import Button from '@/components/common/Button/Button.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import Rate from '@/components/common/Rate/Rate.svelte';
  import type { ICustomerReview } from '@/model';

  interface $$Props {
    dataReview: ICustomerReview;
  }

  let showFullReview = false;

  function truncateTextToCharacterLimit(text: string) {
    const limit = 200;
    if (text.length <= limit) {
      return text;
    } else {
      const truncatedText = text.slice(0, limit);
      return truncatedText;
    }
  }

  function toggleShowFullReview() {
    showFullReview = !showFullReview;
  }

  export let dataReview: $$Props['dataReview'];
</script>

<div class="w-full md:w-1/2 lg:w-1/3 px-5">
  <div class="flex flex-col lg:flex-row">
    <Avatar class="mr-4 mb-4 lg:mb-0" src={dataReview.avatar} />
    <div>
      <h3 class="text-lg font-semibold text-grey-600">{dataReview.name}</h3>
      <div>
        <Text class="text-lg text-grey-500">{dataReview.place}</Text>
        <Text class="text-lg text-grey-500">| {dataReview.date}</Text>
      </div>
      <Rate start={dataReview.rating} class="pt-2 pb-3"/>
      <Text class="line-clamp-6 text-grey-900 inline">
        {#if showFullReview}
          {dataReview.review}
        {:else}
          {truncateTextToCharacterLimit(dataReview.review)}
        {/if}
      </Text>
      <Button on:click={toggleShowFullReview} class="text-primary">
        {#if showFullReview}
          show less
        {:else}
          read more...
        {/if}
      </Button>
    </div>
  </div>
</div>
