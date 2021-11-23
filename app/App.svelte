<style>
  .test {
    background-color: lightcoral;
  }
</style>

<script lang="ts">
  let count: number = 0;
  function handleClick(): void {
    count++;
  }
</script>

<div class="test">
  <p>Hello World!</p>
  <p>
    <button on:click={handleClick}>Clicked {count} times!</button>
  </p>
</div>