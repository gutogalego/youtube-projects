<script>
  let count = 0;
</script>

{#if count < 1}
  <p>empty</p>
{:else}
  <p>not empty</p>
{/if}






{#if count < 1}
  <p>empty</p>
{:else if count > 10}
  <p>still not empty</p>
{:else if count > 100}
  <p>full</p>
{:else}
  <p>not empty</p>
{/if}


