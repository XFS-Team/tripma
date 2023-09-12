<script lang="ts">
    import CustomerReviewItem from "../CustomerReviewItem/CustomerReviewItem.svelte";
    import { LIST_CUSTOMER_REVIEW } from "@/constants";
</script>

<section class="contanier px-8 py-16 mb-10">
    <h2 class="text-2xl font-bold text-grey-600 text-center mb-6">
        What <span class="text-primary">Tripma</span> users are saying
    </h2>
    <div class="flex flex-wrap gap-y-5 -mx-5">
        {#each LIST_CUSTOMER_REVIEW as itemCustomerReview }
        <CustomerReviewItem dataReview={itemCustomerReview}  />
        {/each}
    </div>
</section>