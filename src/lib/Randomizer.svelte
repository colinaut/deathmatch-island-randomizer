<script lang="ts">
	import Attr from './Attr.svelte';
	import DiceSvg from './DiceSvg.svelte';

	const isObject = (obj: unknown) => obj === Object(obj);

	export let func: () => Record<string, string> | string | Array<string> = () => {
		return {};
	};
	export let title = '';
	export let description = '';
	export let attrs: Record<string, string> | string | Array<string> | undefined = undefined;
	export let autoRoll = false;
	if (autoRoll) attrs = func();
</script>

{#if title}
	<!-- content here -->
	<h2><button type="button" on:click={() => (attrs = func())}><DiceSvg /> {title}</button></h2>
{/if}
{#if description}
	<p>{description}</p>
{/if}
{#if attrs !== undefined}
	<div>
		{#if typeof attrs === 'string'}
			<!-- content here -->
			<Attr value={attrs} />
		{:else if Array.isArray(attrs)}
			<!-- content here -->
			{#each Object.keys(attrs) as attr}
				<!-- content here -->
				<Attr value={attr} />
			{/each}
		{:else if isObject(attrs)}
			{#each Object.keys(attrs) as key}
				<!-- content here -->
				<Attr label={key} value={attrs[key]} />
			{/each}
		{/if}
	</div>
{/if}

<style>
	h2 {
		margin: 0;
	}
	p {
		font-size: 0.9em;
		margin: 0.25em 0;
	}
	div {
		display: grid;
		gap: 0.5rem;
		margin-block: 1em;
	}
</style>
