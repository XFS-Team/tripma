<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  const button = cva('rounded', {
    variants: {
      intent: {
        default: 'text-grey-400',
        primary: 'bg-primary text-grey-100 hover:bg-purple-dark',
        secondary: 'border border-primary text-primary hover:bg-purple-light',
        disabled: 'bg-grey-200/[.3] text-grey-400 cursor-not-allowed',
      },
      size: {
        default: 'text-[18px] px-5 py-3',
        small: 'px-2 py-0.5 text-base',
      },
    },
  });

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {
    intent?: 'default' | 'primary' | 'secondary' | 'disabled';
    size?: 'default' | 'small';
  }

  export let intent: $$Props['intent'] = 'default';
  export let size: $$Props['size'] = 'default';
</script>

<button {...$$props} class={button({ intent, size, class: $$props.class })}>
  <slot />
</button>
