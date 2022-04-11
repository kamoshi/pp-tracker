<script lang="ts">
import { fetchPackage } from "./api";
import EventBox from "./EventBox.svelte";
import Order from "./Order.svelte";

	export let name: string;
	const trackedOrders = ['D', 'F'];
	let orderData: Mail[] = [];
	let selected;

	$: mailEvents = orderData.find(item => item.number === selected)?.mailInfo.events || [];

	function getPackageData(packages: string[]) {
		Promise.all(packages.map(fetchPackage))
			.then(res => orderData = res)
			.catch(err => console.error(err));
	}

	function onOrderSelected(packageId: string) {
		selected = packageId;
	}

	getPackageData(trackedOrders);
	
</script>

<aside>
	{#each orderData as order (order.number)}
		<Order {order} on:click={()=>onOrderSelected(order.number)}/>
	{/each}
</aside>
	
<main>
	{#if selected !== undefined}
		{#each mailEvents as mailEvent}
			<EventBox {mailEvent}/>
		{/each}
	{:else}
		<p>Please select an order to display events!</p>
	{/if}
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