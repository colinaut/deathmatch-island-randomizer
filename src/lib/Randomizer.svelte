<script lang="ts">
	import App from './../App.svelte';
	import Attr from './Attr.svelte';
	import DiceSvg from './DiceSvg.svelte';
	import { slide } from 'svelte/transition';

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
	<h2>
		<button type="button" on:click={() => (attrs = func())}><DiceSvg /> {title}</button>
		{#if attrs !== undefined}
			<button class="reset" type="button" on:click={() => (attrs = undefined)}
				><!-- xmark icon by Free Icons (https://free-icons.github.io/free-icons/) -->
				<svg xmlns="http://www.w3.org/2000/svg" height="0.8em" fill="currentColor" viewBox="0 0 512 512">
					<title>Reset</title>
					<path
						d="M 463.609756097561 497.9512195121951 Q 480.780487804878 512 497.9512195121951 497.9512195121951 Q 512 480.780487804878 497.9512195121951 463.609756097561 L 291.9024390243902 256 L 291.9024390243902 256 L 497.9512195121951 49.951219512195124 L 497.9512195121951 49.951219512195124 Q 512 31.21951219512195 497.9512195121951 14.048780487804878 Q 480.780487804878 0 463.609756097561 14.048780487804878 L 256 220.09756097560975 L 256 220.09756097560975 L 49.951219512195124 14.048780487804878 L 49.951219512195124 14.048780487804878 Q 31.21951219512195 0 14.048780487804878 14.048780487804878 Q 0 31.21951219512195 14.048780487804878 49.951219512195124 L 220.09756097560975 256 L 220.09756097560975 256 L 14.048780487804878 463.609756097561 L 14.048780487804878 463.609756097561 Q 0 480.780487804878 14.048780487804878 497.9512195121951 Q 31.21951219512195 512 49.951219512195124 497.9512195121951 L 256 291.9024390243902 L 256 291.9024390243902 L 463.609756097561 497.9512195121951 L 463.609756097561 497.9512195121951 Z"
					/>
				</svg>
			</button>
		{/if}
	</h2>
{/if}
{#if description}
	<p>{description}</p>
{/if}
{#if attrs !== undefined}
	<div transition:slide>
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
		margin: 0.5em 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h2 button:focus-visible {
		outline: 2px solid var(--primary);
		outline-offset: 2px;
	}
	h2 button:focus {
		outline: none;
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
	.reset {
		color: #999;
		&:hover {
			color: var(--primary);
		}
	}
</style>
