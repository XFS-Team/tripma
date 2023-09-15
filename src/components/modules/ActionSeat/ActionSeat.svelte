<script>
  import Button from '@/components/common/Button/Button.svelte';
  import Modal from '@/components/common/Modal/Modal.svelte';
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
  <Button intent="secondary" size="large">Save and close</Button>
  <Button intent="disabled" size="large">Next flight</Button>
  <Modal
    heading="Upgrade seat"
    description="Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy."
    okSubmitText="Upgrade for $199"
    onSubmit={() => {}}
  />
</div>
