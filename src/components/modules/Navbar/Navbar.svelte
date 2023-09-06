<script>
  import {LIST_MENU_NAV} from "@/constants";
</script>

<nav class="hidden md:flex list-none items-center gap-x-4">
  {#each LIST_MENU_NAV as menuItem}
    <li>
      <a class="p-2.5 text-grey-400 text-base" href={menuItem.href}>
        {menuItem.name}
      </a>
    </li>
  {/each}
</nav>
