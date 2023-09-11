<script>
  import { cx } from 'class-variance-authority';
  import Text from '@/components/common/Text/Text.svelte';
  import src from '/images/avt-flight.png';
</script>

<div
  class="flex items-center px-4 py-1.5 cursor-pointer hover:bg-purple-white mb-1 rounded"
>
  <img class="mr-6" {src} alt="avt" />
  <div class="flex justify-between flex-1">
    <div class="flex flex-col gap-y-1">
      <Text class="text-grey-900">16h 45m</Text>
      <Text class="text-grey-400">Hawaiian Airlines</Text>
    </div>
    <Text class="text-grey-900">7:00AM - 4:15PM</Text>
    <div class="flex flex-col gap-y-1">
      <Text class="text-grey-900">1 stop</Text>
      <Text class="text-grey-400">2h 45m in HNL</Text>
    </div>
    <div class="flex flex-col gap-y-1">
      <Text class="text-grey-900">$624</Text>
      <Text class="text-grey-400">round trip</Text>
    </div>
  </div>
</div>
