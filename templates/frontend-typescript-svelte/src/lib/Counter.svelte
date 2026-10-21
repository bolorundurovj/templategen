<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button type="button" class="counter" on:click={increment}>
  Count is {count}
</button>
