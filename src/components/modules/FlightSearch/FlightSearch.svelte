<script>
    import Dropdown from '@/components/common/Dropdown/Dropdown.svelte';
    import Button from '@/components/common/Button/Button.svelte';
    import arrivalDownIcon from '/icons/arrival-down.svg';
    import arrivalUpIcon from '/icons/arrival-up.svg';
    import personIcon from '/icons/person.svg';
    import calendarIcon from '/icons/calendar.svg';
    import { LIST_DATA,LIST_DATA_ADULT } from '@/constants';
  </script>
  
  <section class="container">
    <div
      class="bg-[url('/images/world-map.png')] bg-cover bg-no-repeat h-[500px] lg:h-[700px] "
    >
      <div class="flex flex-col items-center justify-center px-8 mt-4 md:mt-16 lg:mt-24">
        <h1
          class="font-extrabold text-center max-w-[756px] bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent py-10 text-6xl my-8 lg:text-8xl xl:my-12"
        >
          It’s more than just a trip
        </h1>
        <div
          class="w-full sm:w-[420px] xl:w-auto flex items-center justify-center xl:border-2 border-solid border-grey-200 flex-wrap"
        >
          <div class="flex flex-wrap border-2 border-solid border-grey-200 rounded xl:border-none xl:rounded-none">
            <Dropdown
              listDropdown={LIST_DATA}
              icon={arrivalUpIcon}
              placeholder="From where?"
              class="w-[calc(50%-1px)] xl:w-[325px]"
            />
            <span class="inline-block h-[49px] w-0.5 bg-grey-200" />
            <Dropdown
              listDropdown={LIST_DATA}
              icon={arrivalDownIcon}
              placeholder="Where to?"
              class="w-[calc(50%-1px)] xl:w-[325px]"
            />
            <span class="w-full h-0.5 xl:h-[49px] xl:w-0.5 bg-grey-200" />
            <Dropdown
              icon={calendarIcon}
              placeholder="Date - return"
              class="w-full xl:w-[252px]"
            />
          </div>
          <span class="hidden xl:inline-block h-[49px] w-0.5 bg-grey-200" />
          <Dropdown
            listDropdown={LIST_DATA_ADULT}
            icon={personIcon}
            placeholder="1 adult"
            class="hidden xl:block w-[200px]"
            type="counter"
          />
          <a class="bg-primary rounded text-grey-100 hover:bg-purple-dark w-full max-w-[420px] xl:w-auto px-5 py-2.5 mt-4 xl:mt-0" href="/search">Search</a>
        </div>
      </div>
    </div>
  </section>
  