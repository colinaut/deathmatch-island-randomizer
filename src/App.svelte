<script lang="ts">
  import { generateRandomCharacter } from "./lib/character-gen";

  let character = generateRandomCharacter();
</script>

<main>
  <h1>Deathmatch Island Randomizer</h1>
  <h2>Character</h2>
  <div>
    <p>Occupation: {character.occupation}</p>
    <p>Capability: {character.capability}</p>
    <p>Eyes: {character.eyes}</p>
    <p>Build: {character.build}</p>
    <p>Hair: {character.hair}</p>
    <p>Detail: {character.detail}</p>
  </div>
</main>

<style>
</style>
