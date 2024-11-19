<script lang="ts">
	import type { Snippet } from 'svelte';
	let { hidden = true, children }: { hidden?: boolean; children?: Snippet } = $props();

	let showPassword = $state(false);
	let showHint = $state(false);
	let showHint2 = $state(false);
	let showAnswer = $state(false);
	let fillInPassword = $state(false);
	import { slide, fade } from 'svelte/transition';

	function submitPassword(e: Event) {
		e.preventDefault();
		// @ts-expect-error
		const enteredPassword = e.target.password.value;
		if (enteredPassword === 'P14Y70W1N' || enteredPassword === 'P14Y 70 W1N') {
			hidden = false;
		} else if (showHint === false) {
			showHint = true;
		} else if (showHint2 === false) {
			showHint2 = true;
		} else if (showAnswer === false) {
			showAnswer = true;
		} else {
			fillInPassword = true;
		}
	}
</script>

<div class="wrapper">
	{@render children?.()}
	{#if hidden}
		<div class="cover">
			{#if showPassword}
				<!-- content here -->
				<form onsubmit={submitPassword} transition:fade>
					<div>
						<label for="password">Enter Production Password</label>
						{#if showHint}
							<div transition:slide class="hint">Hint: 1337 for the Deathmatch slogan</div>
							<!-- content here -->
						{/if}
						{#if showHint2}
							<div transition:slide class="hint italic">Remember? 'PLAY TO WIN' in 1337</div>
							<!-- content here -->
						{/if}
						{#if showAnswer}
							<div transition:slide class="hint italic">Ugh, fine it's: 'P14Y 70 W1N'</div>
							<!-- content here -->
						{/if}
						{#if fillInPassword}
							<div transition:slide class="hint italic">Wow lazy too?! Let me fill it in for you.</div>
							<input type="text" id="password" value="P14Y 70 W1N" />
						{:else}
							<input type="text" id="password" />
						{/if}
					</div>
					<button type="submit">LOGIN</button>
				</form>
			{:else}
				<button type="button" onclick={() => (showPassword = !showPassword)}>PRODUCTION ONLY</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	.cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		display: grid;
		place-items: center;
	}
	.wrapper {
		position: relative;
		min-height: 16rem;
	}
	button {
		background: none;
		border: none;
		color: #fff;
		font-weight: 700;
		font-size: 1.2em;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}
	label {
		color: #fff;
		font-weight: 700;
		display: block;
		font-size: 1.2em;
	}
	.hint {
		font-size: 1em;
		margin-block-end: 0.25em;
	}
	input {
		width: 100%;
		padding: 0.5em;
		font-size: 1.2em;
		box-sizing: border-box;
	}
	.italic {
		font-style: italic;
	}
	form {
		display: flex;
		gap: 0.5rem;
		align-items: end;
		flex-wrap: wrap;
		padding-inline: 1rem;
		padding-block: 1rem;
		color: #fff;
	}
</style>
