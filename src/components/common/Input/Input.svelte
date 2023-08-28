<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';
  import type { HTMLInputAttributes } from 'svelte/elements';

  const input = cva('input', {
    variants: {
      intent: {
        default: 'rounded outline-none',
      },
    },
  });

  interface $$Props extends HTMLInputAttributes, VariantProps<typeof input> {
    intent?: 'default';
  }

  export const intent: $$Props['intent'] = 'default';
</script>

<input
  type="text"
  {...$$props}
  class={input({ intent, class: $$props.class })}
/>
