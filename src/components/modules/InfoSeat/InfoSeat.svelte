<script>
  import HeaderInfoSeat from "../HeaderInfoSeat/HeaderInfoSeat.svelte";
  import DetailInfoSeat from "../DetailInfoSeat/DetailInfoSeat.svelte";
  import ActionSeat from "../ActionSeat/ActionSeat.svelte";
</script>

<div class={$$props.class} >
    <HeaderInfoSeat/>
    <DetailInfoSeat/>
    <ActionSeat />
</div>
