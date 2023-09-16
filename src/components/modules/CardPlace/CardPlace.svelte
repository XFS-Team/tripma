<script lang="ts">
  import { cva, cx } from 'class-variance-authority';
  import Text from '@/components/common/Text/Text.svelte';
  import type { ICartPlace } from '@/model';

  const cardPlace = cva('px-2 py-2 lg:py-5 lg:px-5');

  interface $$Props {
    class?: string;
    dataCard: ICartPlace;
    type: 'deal' | 'stay' | 'explore';
    isSmallThumb?: boolean;
  }

  export let dataCard: $$Props['dataCard'];
  export let isSmallThumb: $$Props['isSmallThumb'] = false;
  export let type: $$Props['type'] = 'deal';
</script>

<div class={cardPlace({ class: $$props.class })}>
  <div class="flex flex-col shadow-card rounded-xl h-full overflow-hidden">
    <img
      class={`w-full ${isSmallThumb ? 'h-[247px]' : 'h-[240px] lg:h-[397px]'}`}
      src={dataCard.image}
      alt="cart"
    />
    <div class="px-6 py-4">
      <div class="flex flex-wrap lg:flex-nowrap justify-between">
        <Text
          class={cx(
            'font-semibold text-grey-600 text-base lg:text-lg mb-2 lg:mb-0',
            {
              'text-primary': type === 'stay',
            },
          )}
          >{dataCard.name}{#if type !== 'stay' && dataCard.place}
            <span
              class={cx({
                'text-primary': type === 'deal',
                'text-secondary': type === 'explore',
              })}>, {dataCard.place}</span
            >
          {/if}</Text
        >
        {#if type === 'deal'}
          <Text
            class="font-semibold mb-1 text-base lg:text-lg lg:text-grey-600"
          >
            <span class="lg:hidden">Flights from</span>
            ${dataCard.price}</Text
          >
        {/if}
      </div>
      <Text
        class={cx({
          'hidden lg:block': type === 'deal',
        })}>{dataCard.description}</Text
      >
    </div>
  </div>
</div>
