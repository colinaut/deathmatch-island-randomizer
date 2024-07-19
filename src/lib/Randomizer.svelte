<script lang="ts">
	import Card from './Card.svelte';
	import Attr from './Attr.svelte';
	import DiceSvg from './DiceSvg.svelte';

	export let func: () => Record<string, any> | string = () => {
		return {};
	};
	export let title = '';
	export let description = '';

	let attrs: Record<string, any> | string = func();
</script>

<h2>{title}</h2>
{#if description}
	<!-- content here -->
	<p>{description}</p>
{/if}
<Card>
	{#if typeof attrs === 'string'}
		<!-- content here -->
		{attrs}
	{:else}
		{#each Object.keys(attrs) as key}
			<!-- content here -->
			<Attr label={key} value={attrs[key]} />
		{/each}
	{/if}
</Card>
<button type="button" class="primary" on:click={() => (attrs = func())}><DiceSvg color="black" /> New {title}</button>

<style>
	h2 {
		margin-block-end: 0;
	}
	p {
		margin-block: 0;
		font-size: 0.85em;
	}
</style>
