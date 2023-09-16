<script>
  import Button from '@/components/common/Button/Button.svelte';
  import Input from '@/components/common/Input/Input.svelte';
  import Text from '@/components/common/Text/Text.svelte';
</script>

<div>
  <h2 class="mb-6 text-2xl font-bold text-grey-600">
    Share your travel itinerary
  </h2>
  <Text class="mb-6">
    You can email your itinerary to anyone by entering their email address here.
  </Text>
  <form class="max-w-[400px] flex flex-col gap-y-6">
    <Input placeholder="Email address" />
    <Input placeholder="Email address" />
    <Input placeholder="Email address" />
    <div class="flex gap-4">
      <Button intent="primary" size="large">Email itinerary</Button>
      <Button class="text-primary hover:bg-purple-light px-4 py-3"
        >Email itinerary</Button
      >
    </div>
  </form>
</div>
