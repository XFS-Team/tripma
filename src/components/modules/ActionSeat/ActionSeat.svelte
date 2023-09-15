<script>
  import Button from '@/components/common/Button/Button.svelte';
  import Text from '@/components/common/Text/Text.svelte';
</script>

<div class="flex items-center px-7 py-4">
  <div class="flex-1 flex flex-col p-2">
    <h2 class="text-grey-400 text-sm">Passenger 1</h2>
    <Text color="secondary">Sofia Knowles</Text>
  </div>
  <div class="flex-1 flex flex-col p-2">
    <h2 class="text-grey-400 text-sm">Seat number</h2>
    <Text color="secondary">--</Text>
  </div>
  <Button class="mr-4" intent="secondary" size="large">Save and close</Button>
  <Button intent="disabled" size="large">Next flight</Button>
</div>
