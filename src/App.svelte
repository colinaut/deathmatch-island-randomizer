<script lang="ts">
	import CharacterAttr from './CharacterAttr.svelte';
	import { generateRandomCharacter } from './lib/character-gen';

	let character = generateRandomCharacter();
</script>

<main>
	<h1>Deathmatch Island Randomizer</h1>
	<h2>Character Randomizer</h2>
	<button type="button" on:click={() => (character = generateRandomCharacter())}>Randomize</button>
	<div class="character">
		<CharacterAttr label="Name" value={character.name} />
		<CharacterAttr label="Occupation" value={character.occupation} />
		<CharacterAttr label="Capability" value={character.capability} />
		<CharacterAttr label="Eyes" value={character.eyes} />
		<CharacterAttr label="Build" value={character.build} />
		<CharacterAttr label="Hair" value={character.hair} />
		<CharacterAttr label="Detail" value={character.detail} />
	</div>
</main>

<style>
	.character {
		margin-block: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.3em;
		width: 18rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: #291c1c;
	}
</style>
