<script>
  import Text from '@/components/common/Text/Text.svelte';
  import src from '/icons/arrow-right.svg';
  import { cx } from 'class-variance-authority';

  let isActive = true;
</script>

<div class="flex bg-grey-900">
  <div class="py-5 pl-6 pr-5">
    <h1 class="text-grey-100 font-extrabold text-2xl">SFO</h1>
    <Text class="text-xs">California, US</Text>
  </div>
  <img {src} alt="icon next" />
  <div class="py-5 pl-6 pr-5">
    <h1 class="text-grey-100 font-extrabold text-2xl">NRT</h1>
    <Text class="text-xs">California, US</Text>
  </div>
  <div
    class={cx('text-2xl relative p-6 flex-1', {
      'bg-primary border-x border-solid border-grey-200': isActive,
    })}
  >
    <Text class="text-white mb-1" size="small"
      >Feb 25 <span class="text-grey-400">|</span> 7:00AM</Text
    >
    <Text class="text-xs">Departing</Text>
    {#if isActive}
      <span
        class="absolute -translate-x-1/2 bottom-0 left-1/2 w-0 h-0
    border-l-[10px] border-l-transparent
    border-b-8 border-b-white
    border-r-[10px] border-r-transparent"
      />
    {/if}
  </div>
  <div class="text-2xl relative p-6 flex-1">
    <Text class="text-white mb-1" size="small"
      >Feb 25 <span class="text-grey-400">|</span> 7:00AM</Text
    >
    <Text class="text-xs">Departing</Text>
  </div>
</div>
