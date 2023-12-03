<script lang="ts">
  import { onMount } from 'svelte';

  let circles: HTMLDivElement, innerCircles: HTMLDivElement, outerCircles: HTMLDivElement;

  let colors = [
    'border-red-500',
    'border-orange-500',
    'border-amber-500',
    'border-yellow-500',
    'border-lime-500',
    'border-green-500',
    'border-emerald-500',
    'border-teal-500',
    'border-cyan-500',
    'border-sky-500',
    'border-blue-500',
    'border-indigo-500',
    'border-violet-500',
    'border-purple-500',
    'border-fuchsia-500',
    'border-pink-500',
    'border-rose-500'
  ];

  onMount(() => {
    // Reset opacity onMount to prevent flicker.
    outerCircles.style.setProperty('opacity', '1');
    circles.style.setProperty('opacity', '1');
    innerCircles.style.setProperty('opacity', '1');

    // Circle Groups
    outerCircles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 100000,
      iterations: Infinity,
      direction: 'normal'
    });

    circles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 80000,
      iterations: Infinity,
      direction: 'reverse'
    });

    innerCircles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 60000,
      iterations: Infinity,
      direction: 'normal'
    });

    outerCircles.animate(
      [
        { offset: 0, scale: 1 },
        { offset: 1, scale: 2 }
      ],
      {
        delay: 2000,
        duration: 20000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
    );

    circles.animate(
      [
        { offset: 0, scale: 1 },
        { offset: 1, scale: 2 }
      ],
      {
        delay: 2000,
        duration: 15000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
    );

    innerCircles.animate(
      [
        { offset: 0, scale: 1 },
        { offset: 1, scale: 2 }
      ],
      {
        delay: 2000,
        duration: 10000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      }
    );

    // Individual Circles
    [...outerCircles.children].forEach((circle, index) => {
      circle.animate(
        [
          { offset: 0, transform: 'translate(-50%, -50%) scale(0.0001)' },
          {
            offset: 1,
            transform: `translate(-50%, -50%) scale(3) rotateZ(${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          delay: 1000 + index * 15,
          duration: 4000,
          iterations: 1,
          direction: 'alternate',
          easing: 'cubic-bezier(0.75,0,0,1)',
          fill: 'both'
        }
      );
    });

    [...circles.children].forEach((circle, index) => {
      circle.animate(
        [
          { offset: 0, transform: 'translate(-50%, -50%) scale(0.0001)' },
          {
            offset: 1,
            transform: `translate(-50%, -50%) scale(2) rotateZ(${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          delay: 750 + index * 15,
          duration: 4000,
          iterations: 1,
          direction: 'alternate',
          easing: 'cubic-bezier(0.75,0,0,1)',
          fill: 'both'
        }
      );
    });

    [...innerCircles.children].forEach((circle, index) => {
      circle.animate(
        [
          { offset: 0, transform: 'translate(-50%, -50%) scale(0.0001)' },
          {
            offset: 1,
            transform: `translate(-50%, -50%) scale(1.25) rotateZ(-${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          delay: 500 + index * 15,
          duration: 4000,
          iterations: 1,
          direction: 'alternate',
          easing: 'cubic-bezier(0.75,0,0,1)',
          fill: 'both'
        }
      );
    });
  });
</script>

<div bind:this={innerCircles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-32 h-32 {color} border-[0.5px] border-dashed block absolute" />
  {/each}
</div>

<div bind:this={circles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-32 h-32 {color} border-[0.5px] block absolute" />
  {/each}
</div>

<div bind:this={outerCircles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-32 h-32 {color} border-[0.5px] border-dotted block absolute" />
  {/each}
</div>
