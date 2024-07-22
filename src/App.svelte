<script lang="ts">
	import Randomizer from './lib/Randomizer.svelte';
	import { getRandomCompetitor, getRandomMotivation, getRandomReaction } from './lib/competitor-gen';
	import { getRandomNpc } from './lib/npc-gen';
	import { getRandomInjury } from './lib/injuries-gen';
	import { getRandomHostLook, getRandomHostLines, getRandomExternalSignage, getRandomInternalSignage, getRandomFlashbackDetails } from './lib/production-gen';
	import Header from './lib/Header.svelte';
	import DiceSvg from './lib/DiceSvg.svelte';
	import { getRandomRedactedItem } from './lib/redacted-gen';
	import Redacted from './lib/Redacted.svelte';
</script>

<Header />

<main>
	<div class="main-grid container">
		<div>
			<Randomizer func={getRandomCompetitor} title="Competitor" autoRoll={true} />
		</div>
		<div>
			<Randomizer func={getRandomReaction} title="Initial Reaction" />
			<Randomizer func={getRandomMotivation} title="Motivation" />
			<!-- TODO: Add ice breaker questions -->
		</div>
		<div>
			<Randomizer func={getRandomInjury} title="Notable Injury" />
		</div>
	</div>
	<Redacted>
		<div class="main-grid container">
			<div>
				<Randomizer func={getRandomNpc} title="Opponent" />
				<Randomizer func={getRandomFlashbackDetails} title="Flashback Detail" />
			</div>
			<div>
				<Randomizer func={getRandomHostLook} title="Host Look" />
				<Randomizer func={getRandomHostLines} title="Host Line" />
			</div>
			<div>
				<Randomizer func={getRandomInternalSignage} title="Competitor Comms" />
				<Randomizer func={getRandomExternalSignage} title="Restricted Comms" />
				<Randomizer func={getRandomRedactedItem} title="Redacted Item" />
			</div>
		</div>
	</Redacted>
</main>
<footer>
	<a href="https://www.deathmatchis.land/">Deathmatch Island</a> is copyright of <a href="http://olddog.games/">Tim Denee</a> and <a href="https://evilhat.com/">Evil Hat Productions</a>
</footer>

<style>
	.container {
		container-name: page;
		container-type: inline-size;
	}
	main {
		margin: 0 auto;
	}
	.main-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
		gap: 0 2rem;
		margin: 0 auto 2rem;
	}
	footer {
		padding: 1rem;
		text-align: center;
		background-color: var(--primary);
	}
	footer a {
		color: black;
		font-size: 0.9em;
		&:hover {
			text-decoration: underline;
		}
	}
</style>
