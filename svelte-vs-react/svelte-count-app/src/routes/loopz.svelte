<script>
  let items = [
    {id: 1, name: "one"},
    {id: 2, name: "two"},
    {id: 3, name: "three"},
  ];
</script>

{#each items as item}
  <div>{item.name}</div>
{/each}


