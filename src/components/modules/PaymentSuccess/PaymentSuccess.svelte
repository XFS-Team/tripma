<script>
  import mapImage from '/images/map-large.png';
  import RecommendPlace from './RecommendPlace/RecommendPlace.svelte';
  import FlightSummary from './FlightSummary/FlightSummary.svelte';
  import OrderBill from './OrderBill/OrderBill.svelte';
  import ShareItinerary from './ShareItinerary/ShareItinerary.svelte';
  import TypePayment from './TypePayment/TypePayment.svelte';
  import InfoFlight from './InfoFlight/InfoFlight.svelte';
</script>

<section class="container px-24 mt-16 mb-1">
  <div class="flex">
    <div class="w-3/5 mr-[92px] flex flex-col gap-y-14">
      <InfoFlight />
      <FlightSummary />
      <OrderBill />
      <TypePayment />
      <ShareItinerary />
      <div>
        <h2 class="mb-6 text-2xl font-bold text-grey-600">
          Share your travel itinerary
        </h2>
        <img src={mapImage} alt="map" />
      </div>
    </div>
    <div class="flex-1">
      <RecommendPlace />
    </div>
  </div>
</section>
