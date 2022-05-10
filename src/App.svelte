<script>
  import { ButtonSocialMedia } from './components';
  import { Share } from './components/icons';
  import { Popover, PopoverButton } from 'malachite-ui/components';
  import { avatar, drawers } from './assets';
  import { fade, fly } from 'svelte/transition';
  import { useWindowListener } from 'malachite-ui/hooks';
  import { onMount } from 'svelte';

  let x = 0;

  onMount(() => {
    x = window.innerWidth;
    return useWindowListener('resize', () => {
      x = window.innerWidth;
    });
  });
</script>

<main class="max-w-xs mx-auto my-8 | md:max-w-md lg:max-w-4xl">
  <article
    class="grid gap-y-8 bg-white rounded-lg overflow-hidden | lg:(grid-cols-2 gap-0 overflow-visible)">
    <img src={drawers} alt="Drawers" />
    <div class="lg:(flex flex-col justify-center)">
      <div class="px-8 pb-2 space-y-4">
        <h1 class="font-manrope font-bold | md:text-lg lg:text-2xl">
          Shift the overall look and feel by adding these wonderful touches to furniture in your
          home
        </h1>
        <p class="text-sm | md:text-base">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
          uninviting. I've got some simple tips to help you make any room feel complete.
        </p>
      </div>
      <footer class="relative h-20 px-8 | flex items-center gap-6 lg:(h-auto mt-4)">
        <img class="h-12 max-w-12 w-12 rounded-full" src={avatar} width="48" height="48" alt="" />
        <div class="flex flex-col">
          <h2 class="font-bold text-sm | md:text-base">Michelle Appleton</h2>
          <span class="text-xs | md:text-sm"> 28 Jun 2020 </span>
        </div>

        <Popover as="slot" let:isOpen let:panel>
          <div class="ml-auto lg:relative">
            <PopoverButton
              class={{
                base: 'relative h-8 min-w-8 w-8 z-10 | bg-slate-100 rounded-full outline-none transition duration-250',
                open: {
                  on: 'bg-slate-500 focus-visible:(ring ring-slate-100)',
                  off: 'bg-slate-100 focus-visible:(ring ring-slate-600)',
                },
              }}>
              <span class="sr-only"> Share </span>
              <Share
                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                fill={isOpen ? '#ecf2f8' : '#6E8098'} />
            </PopoverButton>
            {#if isOpen}
              {#if x > 1024}
                <!-- DESKTOP -->
                <section
                  class="absolute px-10 h-14 | flex items-center gap-6 | bg-slate-600 rounded-xl rounded-br-none transform lg:(-top-24 right-0) xl:(left-1/2 -translate-x-1/2 right-auto rounded-br-2xl)"
                  use:panel
                  transition:fade>
                  <h3 class="uppercase text-slate-300 tracking-[0.2em]">Share</h3>
                  <div class="flex gap-4 | text-2xl text-slate-100">
                    <ButtonSocialMedia media="Facebook" icon="facebook-square" />
                    <ButtonSocialMedia media="Pinterest" />
                    <ButtonSocialMedia media="twitter" />
                  </div>
                  <div
                    aria-hidden="true"
                    class="arrow-down absolute top-full transform right-0 xl:(left-1/2 -translate-x-1/2)" />
                </section>
              {:else}
                <!-- MOBILE -->
                <section
                  class="absolute inset-0 px-8 | flex items-center gap-6 | bg-slate-600"
                  use:panel
                  transition:fly={{ x: 400 }}>
                  <h3 class="uppercase text-slate-300 tracking-[0.2em]">Share</h3>
                  <div class="flex gap-4 | text-2xl text-slate-100">
                    <ButtonSocialMedia media="Facebook" icon="facebook-square" />
                    <ButtonSocialMedia media="Pinterest" />
                    <ButtonSocialMedia media="twitter" />
                  </div>
                  <div
                    aria-hidden="true"
                    class="arrow-down absolute top-full left-1/2 transform -translate-x-1/2" />
                </section>
              {/if}
            {/if}
          </div>
        </Popover>
      </footer>
    </div>
  </article>
</main>

<style>
  .arrow-down {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid hsl(217, 19%, 35%);
  }
</style>
