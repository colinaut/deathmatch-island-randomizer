<script>
  export let value = "";
  export let label = "";
</script>

<div><strong>{label}</strong> <span>{value}</span></div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
</style>
