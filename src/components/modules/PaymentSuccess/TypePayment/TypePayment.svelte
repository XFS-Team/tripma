<script>
  import src from '/icons/visa.svg';
  import Text from '@/components/common/Text/Text.svelte';
</script>

<div>
  <h2 class="mb-6 text-2xl font-bold text-grey-600">Payment method</h2>
  <div class="w-[300px] bg-pinkGradient rounded-xl px-7 py-6">
    <img {src} alt="logo visa" />
    <div class="mt-14">
      <Text class="text-purple-while font-semibold mb-2">Sophia Knowles</Text>
      <div class="flex justify-between">
        <Text class="text-purple-while">••••••••••••3456</Text>
        <Text class="text-purple-while">10/23</Text>
      </div>
    </div>
  </div>
</div>
