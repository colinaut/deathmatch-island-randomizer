<script>
	export let value = '';
	export let label = '';
</script>

<div>
	{#if label}
		<!-- content here -->
		<strong>{label}</strong>
	{/if}
	<span>{value}</span>
</div>

<style>
	div {
		line-height: 1.2;
	}
	div:has(strong) {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 2fr;
		align-items: start;
	}
</style>
