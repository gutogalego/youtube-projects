<script>
    let count;

    $: double = count * 2
    $: document.title = `double is ${double}`
</script>




