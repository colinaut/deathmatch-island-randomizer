<script>
	export let show = false;
</script>

<div class={show ? '' : 'redacted'}>
	<slot></slot>
	<div class="cover">
		<button type="button" on:click={() => (show = !show)}>REDACTED</button>
	</div>
</div>

<!-- TODO: add password to reveal -->

<style>
	.redacted {
		background: black;
		position: relative;
	}
	.redacted .cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		display: grid;
		place-items: center;
	}
	button {
		background: none;
		border: none;
		color: #fff;
		font-weight: 700;
		font-size: 1.2em;
		text-transform: uppercase;
	}
</style>
