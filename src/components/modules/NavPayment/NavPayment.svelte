<script lang="ts">
  import Button from '@/components/common/Button/Button.svelte';
  import type { IListMenuPayment } from '@/model';
  import { cx } from 'class-variance-authority';

  interface $$Props {
    listMenu: IListMenuPayment;
  }

  let selectIdMenu = 1;

  const handleSelectMenu = (id: number) => {
    selectIdMenu = id;
  };

  export let listMenu: $$Props['listMenu'] = [];
</script>

{#each listMenu as menuItem}
  <Button
    on:click={() => handleSelectMenu(menuItem.key)}
    size="large"
    intent={menuItem.key === selectIdMenu ? 'primary' : 'default'}
    class={cx('flex items-center gap-0.5 last:flex-1', {
      'hover:bg-purple-light': menuItem.key !== selectIdMenu,
    })}
  >
    <img src={menuItem.icon} alt="" />
    <span>{menuItem.name}</span>
  </Button>
{/each}
