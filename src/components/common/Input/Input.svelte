<script lang="ts">
  import { cva } from 'class-variance-authority';
  import type { HTMLInputAttributes } from 'svelte/elements';

  const input = cva('px-3 py-[9px] border border-solid border-grey-300', {
    variants: {
      intent: {
        default: 'rounded outline-none text-lg font-normal text-grey-400',
      }, 
    },
  });

  interface $$Props extends HTMLInputAttributes {
    intent?: 'default';
  }

  export const intent: $$Props['intent'] = 'default';
</script>

<input
on:input
type="text"
{...$$props}
class={input({ intent, class: $$props.class })}
/>