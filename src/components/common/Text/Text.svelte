<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';

  const text = cva('text', {
    variants: {
      color: {
        default: 'text-grey-400',
        secondary: 'text-grey-600',
        primary: 'text-primary',
      },
    },
  });

  interface $$Props extends VariantProps<typeof text> {
    color?: 'default' | 'secondary' | 'primary';
  }

  export let color: $$Props['color'] = 'default';
</script>

<p {...$$props} class={text({ color, class: $$props.class })}>
  <slot />
</p>
