<script>
  import Banner from '../Banner/Banner.svelte';
  import logo from '/logo.svg';
  import avatar from '/images/avatar.png';
  import Button from '@/components/common/Button/Button.svelte';
  import Navbar from '../Navbar/Navbar.svelte';

  const isLogin = true;
</script>

<header>
  <Banner type="warning">
    <p class="px-16 hidden md:block">
      Join Tripma today and save up to 20% on your flight using code TRAVEL at
      checkout. Promotion valid for new users only.
    </p>
    <p class="px-16 block md:hidden">Join Tripma now and save 20%</p>
  </Banner>
  <div class="flex items-center justify-between px-6 py-5">
    <div class="flex">
      <Button class="px-0 mr-3 lg:hidden">
        <img src="/icons/menu.svg" alt="menu" />
      </Button>
      <a href="/" class="p-3">
        <img src={logo} alt="logo" />
      </a>
    </div>
    <div class="flex sm:hidden lg:flex">
      <Navbar/>
      {#if isLogin}
        <div class="relative ml-6">
          <img class="rounded-full w-10 h-10" src={avatar} alt="avatar" />
        </div>
      {:else}
        <Button class="px-2.5 mx-4">Sign In</Button>
        <Button intent="primary">Sign Up</Button>
      {/if}
    </div>
  </div>
</header>
