<script lang="ts">
  import { cva } from 'class-variance-authority';
  import startFillIcon from '/icons/star-filled.svg';
  import startUnFillIcon from '/icons/star-unfilled.svg';

  const rate = cva('flex');

  interface $$Props {
    start: number;
    class?: string;
  }
  
  export let start: $$Props['start'];

  let unfilledStars = 5 - start;
</script>

<div class={rate({ class: $$props.class })}>
    {#each Array(start) as _, i}
        <img src={startFillIcon} alt="icon start" />
    {/each}
    {#each Array(unfilledStars) as _, i}
        <img src={startUnFillIcon} alt="icon start" />
    {/each}
</div>
