<script lang="ts">
  // Components
  import Name from '$lib/Name.svelte';
  import Visualizer from '$lib/Visualizer.svelte';
</script>

<svelte:head>
  <title>V. A. Kaiser</title>
</svelte:head>

<main
  class="flex flex-col items-center justify-center h-screen overflow-hidden bg-black text-white"
>
  <Visualizer />
  <Name />
</main>
