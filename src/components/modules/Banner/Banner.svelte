<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';
  import closePrimaryIcon from '/icons/close-primary.svg';
  import closeWhiteIcon from '/icons/close-white.svg';
  import Button from '@/components/common/Button/Button.svelte';

  const banner = cva(
    'relative px-3 py-4 w-full text-base lg:text-lg lg:text-center lg:px-8 lg:py-4',
    {
      variants: {
        type: {
          warning: 'text-purple-dark bg-warning',
          danger: 'text-grey-100 bg-danger',
          promotion: 'text-purple-white bg-primary',
        },
      },
    },
  );

  interface $$Props extends VariantProps<typeof banner> {
    type?: 'warning' | 'danger' | 'promotion';
  }

  export let type: $$Props['type'] = 'promotion';
</script>

<div {...$$props} class={banner({ type, class: $$props.class })}>
  <slot />
  <Button class="absolute right-4 top-1/2 -translate-y-1/2 md:right-8">
    {#if type === 'warning'}
    <img src={closePrimaryIcon} alt="icon close">
    {:else}
    <img src={closeWhiteIcon} alt="icon close" />
    {/if}
  </Button>
</div>
