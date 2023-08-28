<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  const button = cva('button', {
    variants: {
      intent: {
        default: 'rounded',
        primary: ' bg-primary text-grey-100 rounded hover:bg-purple-dark',
        secondary:
          'rounded border border-primary text-primary hover:bg-purple-light',
      },
    },
  });

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {
    intent?: 'default' | 'primary' | 'secondary';
  }

  export let intent: $$Props['intent'] = 'default';
</script>

<button {...$$props} class={button({ intent, class: $$props.class })}>
  <slot />
</button>
