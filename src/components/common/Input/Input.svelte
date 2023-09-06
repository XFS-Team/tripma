<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';
  import type { HTMLInputAttributes } from 'svelte/elements';

  const input = cva('px-3 py-2', {
    variants: {
      intent: {
        default: 'rounded outline-none text-lg font-normal',
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
