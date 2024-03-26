<script lang="ts">
  import { onMount } from 'svelte';

  let circles: HTMLDivElement, innerCircles: HTMLDivElement, outerCircles: HTMLDivElement;

  let colors = [
    'border-red-500',
    'border-red-500',
    'border-orange-500',
    'border-orange-500',
    'border-amber-500',
    'border-amber-500',
    'border-yellow-500',
    'border-yellow-500',
    'border-lime-500',
    'border-lime-500',
    'border-green-500',
    'border-green-500',
    'border-emerald-500',
    'border-emerald-500',
    'border-teal-500',
    'border-teal-500',
    'border-cyan-500',
    'border-cyan-500',
    'border-sky-500',
    'border-sky-500',
    'border-blue-500',
    'border-blue-500',
    'border-indigo-500',
    'border-indigo-500',
    'border-violet-500',
    'border-violet-500',
    'border-purple-500',
    'border-purple-500',
    'border-fuchsia-500',
    'border-fuchsia-500',
    'border-pink-500',
    'border-pink-500',
    'border-rose-500',
    'border-rose-500'
  ];

  onMount(() => {
    // Reset opacity onMount to prevent flicker.
    outerCircles.style.setProperty('opacity', '1');
    circles.style.setProperty('opacity', '1');
    innerCircles.style.setProperty('opacity', '1');

    // Circle Groups
    outerCircles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 40000,
      iterations: Infinity,
      direction: 'normal'
    });

    circles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 30000,
      iterations: Infinity,
      direction: 'normal'
    });

    innerCircles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 20000,
      iterations: Infinity,
      direction: 'normal'
    });

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
          delay: 500 + index * 30,
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
            transform: `translate(-50%, -50%) scale(1.75) rotateZ(${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          delay: 1500 + index * 30,
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
            transform: `translate(-50%, -50%) scale(1) rotateZ(${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          delay: 2500 + index * 30,
          duration: 4000,
          iterations: 1,
          direction: 'alternate',
          easing: 'cubic-bezier(0.75,0,0,1)',
          fill: 'both'
        }
      );
    });

    // Circle Shuffle Animation
    [...outerCircles.children].forEach((circle, index) => {
      circle.animate(
        [
          {
            offset: 0
          },
          {
            offset: 0.05,
            transform: `translate(-50%, -50%) scale(4) rotateZ(${
              (index + 1) * (90 / colors.length) * -1
            }deg)`
          },
          {
            offset: 0.06
          }
        ],
        {
          delay: 7500 + index * 50,
          duration: 10000,
          iterations: Infinity,
          easing: 'cubic-bezier(0.75,0,0,1)',
          direction: 'alternate'
        }
      );
    });

    [...circles.children].forEach((circle, index) => {
      circle.animate(
        [
          {
            offset: 0
          },
          {
            offset: 0.05,
            transform: `translate(-50%, -50%) scale(4) rotateZ(${
              (index + 1) * (90 / colors.length) * -1
            }deg)`
          },
          {
            offset: 0.06
          }
        ],
        {
          delay: 7000 + index * 50,
          duration: 10000,
          iterations: Infinity,
          easing: 'cubic-bezier(0.75,0,0,1)',
          direction: 'alternate'
        }
      );
    });

    [...innerCircles.children].forEach((circle, index) => {
      circle.animate(
        [
          {
            offset: 0
          },
          {
            offset: 0.05,
            transform: `translate(-50%, -50%) scale(4) rotateZ(${
              (index + 1) * (90 / colors.length) * -1
            }deg)`
          },
          {
            offset: 0.06
          }
        ],
        {
          delay: 6500 + index * 50,
          duration: 10000,
          iterations: Infinity,
          easing: 'cubic-bezier(0.75,0,0,1)',
          direction: 'alternate'
        }
      );
    });
  });
</script>

<div bind:this={outerCircles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-64 h-64 {color} border block absolute" />
  {/each}
</div>

<div bind:this={circles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-64 h-64 {color} border block absolute" />
  {/each}
</div>

<div bind:this={innerCircles} class="absolute opacity-0">
  {#each colors as color}
    <span class="w-64 h-64 {color} border block absolute" />
  {/each}
</div>
