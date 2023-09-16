<script>
  import HeaderInfoSeat from "@/components/modules/BookSeat/HeaderInfoSeat/HeaderInfoSeat.svelte";
  import DetailInfoSeat from "@/components/modules/BookSeat/DetailInfoSeat/DetailInfoSeat.svelte";
  import ActionSeat from "@/components/modules/BookSeat/ActionSeat/ActionSeat.svelte";
</script>

<div class={$$props.class} >
    <HeaderInfoSeat/>
    <DetailInfoSeat/>
    <ActionSeat />
</div>
