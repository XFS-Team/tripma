<script>
  import Input from '@/components/common/Input/Input.svelte';
  import Text from '@/components/common/Text/Text.svelte';
  import FlightDetail from '../FlightDetail/FlightDetail.svelte';
  import Checkbox from '@/components/common/Checkbox/Checkbox.svelte';
  import Counter from '@/components/common/Counter/Counter.svelte';
  import Button from '@/components/common/Button/Button.svelte';
  import { SELECT_FLIGHT } from '@/constants';
  import src from '/images/luggage.png';

  let isFilled = true;
</script>

<div class="flex justify-between">
  <div class="w-[682px]">
    <Text>Passenger 1 (Adult)</Text>
    <form on:submit|preventDefault={() => {}} action="">
      <div class="flex gap-6 flex-wrap items-start mb-6">
        <Input class="w-[200px]" placeholder="First name*" required />
        <Input class="w-[200px]" placeholder="Middle" />
        <Input class="w-[200px]" placeholder="Last name*" required />
        <Input class="w-[200px]" placeholder="Suffix" required />
        <div>
          <Input placeholder="Date of birth*" required />
          <Text class="text-xs mt-1.5">MM/DD/YY</Text>
        </div>
      </div>
      <div class="flex gap-6 flex-wrap mb-12">
        <Input class="w-[300px]" placeholder="Email address*" required />
        <Input class="w-[300px]" placeholder="Phone number*" required />
        <Input class="w-[300px]" placeholder="Redress number" />
        <Input
          class="w-[300px]"
          placeholder="Known traveller number*"
          required
        />
      </div>
      <Text color="secondary" class="mb-6">Emergency contact information</Text>
      <Checkbox label="Same as Passenger 1" />
      <div class="flex gap-6 flex-wrap mt-6 mb-12">
        <Input class="w-[300px]" placeholder="First name*" required />
        <Input class="w-[300px]" placeholder="Last name*" required />
        <Input class="w-[300px]" placeholder="Email address*" />
        <Input class="w-[300px]" placeholder="Phone number*" required />
      </div>
      <Text color="secondary" class="mb-2.5">Bag information</Text>
      <Text class="mb-9"
        >Each passenger is allowed one free carry-on bag and one personal item.
        First checked bag for each passenger is also free. Second bag check fees
        are waived for loyalty program members. See the <span
          class="text-primary">full bag policy.</span
        ></Text
      >
      <div class="flex mb-4">
        <Text class="w-1/2">Passenger 1</Text>
        <Text class="w-1/2">Passenger 1</Text>
      </div>
      <div class="flex mb-[75px]">
        <Text class="w-1/2">First Last</Text>
        <Counter class="w-1/2" />
      </div>
      <Button class="mr-6 px-5 py-[9px]" intent="secondary"
        >Save and close</Button
      >
      <a
        href="/seatplace"
        intent="disabled"
        class={`rounded px-5 py-3 text-lg ${
          isFilled
            ? 'bg-primary text-grey-100 hover:bg-purple-dark'
            : 'bg-grey-200/[.3] text-grey-400 cursor-not-allowed'
        }`}>Select seats</a
      >
    </form>
  </div>
  <div class="flex items-end flex-col">
    <FlightDetail listSelectedFlight={SELECT_FLIGHT} />
    <a
      href="/seatplace"
      intent="disabled"
      class={`rounded px-5 py-2.5 mt-8 mb-[104px] text-lg ${
        isFilled
          ? 'bg-primary text-grey-100 hover:bg-purple-dark'
          : 'bg-grey-200/[.3] text-grey-400 cursor-not-allowed'
      }`}>Select seats</a
    >
    <img {src} alt="img luggage" />
  </div>
</div>
