<script>
  import Text from "@/components/common/Text/Text.svelte";
  import { DATA_RECOMMEND_HOTEL, DATA_UNIQUE_EXPERIENCES } from "@/constants";
  import CardPlace from "../../CardPlace/CardPlace.svelte";
  import Button from "@/components/common/Button/Button.svelte";

</script>
<div class="mb-16">
  <Text size="large" color="secondary" style="bold">
    Shop <span class="text-primary">hotels</span>
  </Text>
  <Text
    >Tripma partners with thousands of hotels to get you the best deal. Save up
    to 30% when you add a hotel to your trip.</Text
  >
  {#each DATA_RECOMMEND_HOTEL as itemPlace}
    <CardPlace class="lg:px-0" isSmallThumb dataCard={itemPlace} />
  {/each}
  <div class="text-center">
    <Button class="mt-5" intent="secondary" size="large">Shop all hotels</Button
    >
  </div>
</div>
<div>
  <Text size="large" color="secondary" style="bold">
    Find unique <span class="text-primary">experiences</span>
  </Text>
  <Text
    >Find events and authentic cultrual experiences available exclusively to
    Tripma users.</Text
  >
  {#each DATA_UNIQUE_EXPERIENCES as itemPlace}
    <CardPlace class="lg:px-0" isSmallThumb dataCard={itemPlace} />
  {/each}
  <div class="text-center">
    <Button class="mt-5" intent="secondary" size="large">Shop all hotels</Button
    >
  </div>
</div>
