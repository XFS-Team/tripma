<script lang="ts">
  import { cva } from 'class-variance-authority';
  import type { HTMLImgAttributes } from 'svelte/elements';

  const avatar = cva('w-12 h-12 rounded-full');

  interface $$Props extends HTMLImgAttributes {
    src: string;
    class?: string;
  }

  export let src: $$Props['src'];
</script>

<img {...$$props} class={avatar({ class: $$props.class })} alt="avatar" {src} />
