<script>
  import { LIST_FOOTER, LIST_SOCIAL } from './constants.svelte';
  import Text from '@/components/common/Text/Text.svelte';
</script>

<footer class="container">
  <div class="flex flex-wrap mx-auto xl:flex-nowrap px-8 pt-[60px] pb-10">
    <div class="lg:w-full xl:w-auto xl:mr-16">
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
    </div>
    {#each LIST_FOOTER as item}
      <div class="py-4 w-full lg:w-1/2 xl:w-1/4">
        <h4 class="text-lg text-grey-600 font-bold mb-2">{item.heading}</h4>
        <ul>
          {#each item.children as child}
            {#if child.icon}
              <li class="my-3">
                <img src={child.icon} alt={child.name} />
              </li>
            {:else}
              <li class="p-1 my-1">
                <a class="text-base text-grey-400" href={child.href}
                  >{child.name}</a
                >
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <div class="flex justify-between items-center px-8 py-4 border-t border-grey-200 border-solid">
      <div class="flex">
        {#each LIST_SOCIAL as item}
          <div class="p-2">
            <img src={item.icon} alt="icon" />
          </div>
        {/each}
      </div>
    <Text class="text-xs">© 2020 Tripma inc</Text>
  </div>
</footer>
