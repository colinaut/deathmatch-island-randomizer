<script lang="ts">
	import Card from './Card.svelte';
	import Attr from './Attr.svelte';
	import DiceSvg from './DiceSvg.svelte';

	const isObject = (obj: unknown) => obj === Object(obj);

	export let func: () => Record<string, string> | string | Array<string> = () => {
		return {};
	};
	export let title = '';
	export let description = '';

	let attrs: Record<string, string> | string | Array<string> | undefined = undefined;
	console.log(attrs);
</script>

<h2>{title}</h2>
{#if description}
	<!-- content here -->
	<p>{description}</p>
{/if}
<!-- TODO: move Card out of Randomizer -->
<Card>
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
			<button type="button" class="plain die" on:click={() => (attrs = func())} title={`New ${title}`}><DiceSvg color="inherit" /></button>
		</div>
	{:else}
		<button type="button" class="outline" on:click={() => (attrs = func())}><DiceSvg color="black" /> New {title}</button>
	{/if}
</Card>

<style>
	h2 {
		margin-block-end: 0;
	}
	p {
		margin-block: 0;
		font-size: 0.85em;
	}
	.die {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0;
		border-radius: 0;
	}
	.die:hover {
		background-color: transparent;
		color: var(--primary);
	}
	div {
		position: relative;
		padding-inline-end: 1.5em;
	}
</style>
