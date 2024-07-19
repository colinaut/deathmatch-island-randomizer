<script lang="ts">
	import Randomizer from './lib/Randomizer.svelte';
	import Attr from './lib/Attr.svelte';
	import { getRandomCompetitor, getRandomMotivation, getRandomReaction } from './lib/competitor-gen';
	import { getRandomNpc } from './lib/npc-gen';
	import type { Npc } from './lib/npc-gen';
	import type { Motivation } from './lib/competitor-gen';
	import { getRandomInjury } from './lib/injuries-gen';
	import { getRandomHostLook, getRandomHostLines, getRandomExternalSignage, getRandomInternalSignage, getRandomFlashbackDetails } from './lib/production-gen';
	import Card from './lib/Card.svelte';
	import Header from './lib/Header.svelte';
	import DiceSvg from './lib/DiceSvg.svelte';
	import { getRandomRedactedItem } from './lib/redacted-gen';
	import Redacted from './lib/Redacted.svelte';

	let competitor = getRandomCompetitor();
	let reaction = '';
	let motivation!: Motivation;
	let npc: Npc = getRandomNpc();
	let hostLook = getRandomHostLook();
	let hostLines = getRandomHostLines();

	function generateNewCompetitor() {
		competitor = getRandomCompetitor();
		reaction = '';
		motivation = {};
	}
</script>

<Header />
<div class="container">
	<main>
		<div>
			<h2>Competitor Lotto</h2>
			<Card>
				<Attr label="Name" value={competitor.name} />
				<Attr label="Occupation" value={competitor.occupation} />
				<Attr label="Capability" value={competitor.capability} />
				<Attr label="Eyes" value={competitor.eyes} />
				<Attr label="Build" value={competitor.build} />
				<Attr label="Hair" value={competitor.hair} />
				<Attr label="Detail" value={competitor.detail} />
				<div class="subcard">
					<h3>Initial Reaction</h3>
					{#if reaction}
						<p>{reaction}</p>
					{:else}
						<button type="button" class="outline" on:click={() => (reaction = getRandomReaction())}><DiceSvg /> Pick For Me</button>
					{/if}
				</div>
				<div class="subcard motivation">
					<h3>Motivation</h3>
					{#if motivation?.type}
						<p><strong>{motivation.type}</strong> {motivation.description}</p>
					{:else}
						<button type="button" class="outline" on:click={() => (motivation = getRandomMotivation())}><DiceSvg /> Pick For Me</button>
					{/if}
				</div>
			</Card>
			<button type="button" class="primary" on:click={generateNewCompetitor}><DiceSvg color="black" /> New Lucky Competitor</button>
		</div>
		<div>
			<Randomizer func={getRandomInjury} title="Notable Injury" />
		</div>
		<div>
			<Randomizer func={getRandomNpc} title="Opponent" />
			<Randomizer func={getRandomInternalSignage} title="Competitor Comms" description="posters, billboards, and pre-recorded messages found throughout the island" />
		</div>

		<div>
			<Redacted>
				<h2>Host</h2>
				<Card>
					<Attr label="Look" value={hostLook} />
					<Attr label="Line" value={hostLines} />
				</Card>
				<div class="flex gap-2">
					<button type="button" class="primary" on:click={() => (hostLook = getRandomHostLook())}><DiceSvg color="black" /> New Look</button>
					<button type="button" class="primary" on:click={() => (hostLines = getRandomHostLines())}><DiceSvg color="black" /> New Line</button>
				</div>
				<Randomizer func={getRandomFlashbackDetails} title="Flashback Detail" />
			</Redacted>
		</div>
		<div>
			<Redacted>
				<Randomizer func={getRandomExternalSignage} title="Restricted Comms" description="posters, signage, and pre-recorded messages found in restricted areas" />
				<Randomizer func={getRandomRedactedItem} title="Redacted Item" />
			</Redacted>
		</div>
	</main>
</div>

<style>
	.container {
		container-name: page;
		container-type: inline-size;
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
		gap: 2rem;
		justify-items: center;
		margin: 0 auto;
	}
	.subcard h3 {
		margin-block-end: 0.5em;
		font-size: 1em;
	}
	.subcard p {
		margin: 0;
		font-size: 0.9em;
	}
	.motivation strong::after {
		content: '.';
	}
</style>
