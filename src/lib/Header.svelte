<header>
	<div class="container header-grid">
		<h1>Deathmatch<br />Island</h1>
		<aside>
			<div class="tagline">Production<br />Arbitrator</div>
			<div class="credits">
				The game
				<a href="https://www.deathmatchis.land/">Deathmatch Island</a> is created by
				<a href="http://olddog.games/">Old Dog Games</a>
			</div>
		</aside>
	</div>
</header>

<style>
	header {
		background: var(--primary);
		padding-block: 2rem 1rem;
		padding-inline: 1rem;
		margin-block-end: 1rem;
		container-name: page-header;
		container-type: inline-size;
	}
	@container page-header (width > 800px) {
		.header-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@container page-header (width < 800px) {
		.header-grid {
			grid-template-columns: 1fr 1fr;
			font-size: 0.7em;
		}
	}
	@container page-header (width < 580px) {
		.header-grid {
			grid-template-columns: 1fr;
		}
		aside {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	}
	h1 {
		line-height: 0.75;
		font-size: 5em;
	}
	.header-grid {
		display: grid;

		gap: 1rem;
	}

	.tagline {
		font-size: 2em;
		font-weight: 500;
		line-height: 0.9;
	}
	header a {
		color: #000;
		&:hover {
			text-decoration: underline;
		}
	}
	.credits {
		width: 15em;
	}
	aside {
		justify-self: end;
		display: grid;
		gap: 1em;
	}
</style>
