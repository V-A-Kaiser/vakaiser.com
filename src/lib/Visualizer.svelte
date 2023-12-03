<script lang="ts">
  import { onMount } from 'svelte';

  let circles: HTMLDivElement;
  let colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-yellow-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-purple-500',
    'bg-fuchsia-500',
    'bg-pink-500',
    'bg-rose-500'
  ];

  onMount(() => {
    // Circle Group
    circles.animate([{ offset: 0 }, { offset: 1, rotate: '360deg' }], {
      duration: 60000,
      iterations: Infinity,
      direction: 'normal',
    });

    // Individual Circles
    [...circles.children].forEach((circle, index) => {
      circle.animate(
        [
          { offset: 0, transform: 'translate(-50%, -50%) scale(0.0001)' },
          {
            offset: 1,
            transform: `translate(-50%, -50%) scale(1.5) rotateZ(${
              (index + 1) * (90 / colors.length)
            }deg)`
          }
        ],
        {
          duration: 4000,
          iterations: 1,
          direction: 'alternate',
          easing: 'cubic-bezier(.8,0,.2,1)',
          fill: 'both'
        }
      );
    });
  });
</script>

<div bind:this={circles} class="absolute">
  {#each colors as color}
    <span class="w-64 h-64 {color} border opacity-90 block absolute" />
  {/each}
</div>
