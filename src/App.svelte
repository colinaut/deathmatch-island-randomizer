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
			<Randomizer func={getRandomCompetitor} title="Competitor" />
		</div>
		<div>
			<Randomizer func={getRandomReaction} title="Initial Reaction" />
			<Randomizer func={getRandomMotivation} title="Motivation" />
			<!-- TODO: Add ice breaker questions -->
		</div>
		<div>
			<Randomizer func={getRandomInjury} title="Notable Injury" />
		</div>
		<div>
			<Randomizer func={getRandomNpc} title="Opponent" />
			<Randomizer func={getRandomInternalSignage} title="Competitor Comms" />
		</div>

		<div>
			<Redacted>
				<Randomizer func={getRandomHostLook} title="Host Look" />
				<Randomizer func={getRandomHostLines} title="Host Line" />
				<Randomizer func={getRandomFlashbackDetails} title="Flashback Detail" />
			</Redacted>
		</div>
		<div>
			<Redacted>
				<Randomizer func={getRandomExternalSignage} title="Restricted Comms" />

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
		/* justify-items: center; */
		margin: 0 auto;
	}
</style>
