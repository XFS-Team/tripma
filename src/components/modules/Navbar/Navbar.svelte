<script>
  const MENU_LIST = [
    {
      name: 'Flights',
      href: '/flights',
    },
    {
      name: 'Hotels',
      href: '/hotels',
    },
    {
      name: 'Packages',
      href: '/packages',
    },
  ];
</script>

<nav class="hidden lg:flex list-none items-center gap-x-4">
  {#each MENU_LIST as menuItem}
    <li>
      <a class="p-2.5 text-grey-400 text-base" href={menuItem.href}>
        {menuItem.name}
      </a>
    </li>
  {/each}
</nav>
