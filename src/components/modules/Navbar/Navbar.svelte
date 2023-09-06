<script>
  import {MENU_LIST} from "./constants.svelte"
</script>

<nav class="hidden md:flex list-none items-center gap-x-4">
  {#each MENU_LIST as menuItem}
    <li>
      <a class="p-2.5 text-grey-400 text-base" href={menuItem.href}>
        {menuItem.name}
      </a>
    </li>
  {/each}
</nav>
