<script lang="ts">
  import { onMount } from 'svelte';

  // Elements
  let firstName: HTMLDivElement, lastName: HTMLDivElement;

  onMount(async () => {
    // Flicker Animation
    let flickerAnimationKeyframes = [
      { opacity: 0 },
      { opacity: 0, offset: 0.24 },
      { opacity: 1, offset: 0.25 },
      { opacity: 0, offset: 0.26 },
      { opacity: 0, offset: 0.49 },
      { opacity: 1, offset: 0.5 },
      { opacity: 0, offset: 0.51 },
      { opacity: 0, offset: 0.74 },
      { opacity: 1, offset: 0.75 },
      { opacity: 0, offset: 0.76 },
      { opacity: 0, offset: 0.99 },
      { opacity: 1 }
    ];

    // Animate Letter Flickering
    for (let letter of [...firstName.children, ...lastName.children]) {
      letter.animate(flickerAnimationKeyframes, {
        delay: 500 + Math.random() * 500,
        duration: 500,
        iterations: 1,
        fill: 'both'
      });
    }

    // Animate Shift & Skew
    let snsOptions: KeyframeAnimationOptions = {
      delay: 1250,
      duration: 1000,
      iterations: 1,
      fill: 'both',
      easing: 'cubic-bezier(1,0,0.1,1)'
    };

    firstName.animate(
      [
        { offset: 0, transform: 'translateX(-3rem)' },
        { offset: 0.75, backgroundColor: 'transparent' },
        { offset: 0.75, backgroundColor: 'black' },
        { offset: 1, transform: 'translateX(0rem) skewX(-15deg)', backgroundColor: 'black' }
      ],
      snsOptions
    );
    lastName.animate(
      [
        { offset: 0, transform: 'translateX(3rem)' },
        { offset: 0.75, color: 'white', backgroundColor: 'transparent' },
        { offset: 0.75, color: 'black', backgroundColor: 'white' },
        {
          offset: 1,
          transform: 'translateX(0) skewX(-15deg)',
          fontWeight: '900',
          color: 'black',
          backgroundColor: 'white'
        }
      ],
      snsOptions
    );
  });
</script>

<div class="flex items-center justify-center">
  <h1
    class="text-5xl tracking-[.5rem] font-thin font-title select-none flex justify-between items-stretch"
  >
    <div bind:this={firstName} class="p-2 rounded-l-lg">
      {#each 'VALERIE' as letter}
        <span>{letter}</span>
      {/each}
    </div>
    <div bind:this={lastName} class="p-2 rounded-r-lg">
      {#each 'KAISER' as letter}
        <span>{letter}</span>
      {/each}
    </div>
  </h1>
</div>
