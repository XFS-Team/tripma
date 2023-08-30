<script lang="ts">
  import { VariantProps, cva } from 'class-variance-authority';

  const text = cva('', {
    variants: {
      color: {
        default: 'text-grey-400',
        secondary: 'text-grey-600',
        primary: 'text-primary',
      },
      size: {
        default: 'text-lg',
        small: 'text-base',
        large: 'text-2xl',
      },
      style: {
        default: 'font-normal',
        bold: 'font-bold',
      },
    },
  });

  interface $$Props extends VariantProps<typeof text> {
    color?: 'default' | 'secondary' | 'primary';
    size?: 'default' | 'small' | 'large';
    style?: 'default' | 'bold';
  }

  export let color: $$Props['color'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let style: $$Props['style'] = 'default';
</script>

<p {...$$props} class={text({ color, size, style, class: $$props.class })}>
  <slot />
</p>
