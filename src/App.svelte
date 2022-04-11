<script lang="ts">
import { fetchPackage } from "./api";
import EventBox from "./EventBox.svelte";


	export let name: string;

	let eventHistory = [];
	fetchPackage('D').then(res => {
		console.log(res);
		eventHistory = (<any>res)?.mailInfo.events || [];
	});
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	{#each eventHistory as item}
		<EventBox mailEvent={item} />
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>