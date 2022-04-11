<script lang="ts">
import { onMount } from "svelte";
import { fetchPackage } from "./api";
import EventBox from "./components/EventBox.svelte";
import OrderList from "./components/OrderList.svelte";
import { loadTracked, saveTracked } from "./memory";

	export let name: string;
	let trackedOrders = loadTracked();
	let orderData: Mail[] = [];
	let selected;

	$: mailEvents = orderData.find(item => item.number === selected)?.mailInfo.events || [];
	$: getPackageData(trackedOrders);

	function getPackageData(packages: string[]) {
		Promise.all(packages.map(fetchPackage))
			.then(res => orderData = res)
			.catch(err => console.error(err));
	}

	function onShowTracking(event) {
		selected = event.detail?.packageId;
	}

	function onAddTracking(event) {
		const packageId = event.detail?.packageId;
		if (!packageId || trackedOrders.includes(packageId))
			return;
		trackedOrders = [...trackedOrders, packageId];
		saveTracked(trackedOrders);
	}

	function onDeleteTracking(event) {
		const packageId = event.detail?.packageId;
		trackedOrders = trackedOrders.filter(pId => pId !== packageId);
	}
</script>

<OrderList orders={orderData} on:addTracking={onAddTracking} on:showTracking={onShowTracking} on:deleteTracking={onDeleteTracking} />
	
<main>
	{#if selected !== undefined}
		{#each mailEvents as mailEvent}
			<EventBox {mailEvent}/>
		{/each}
	{:else}
		<p>Please select an order to display events!</p>
	{/if}
</main>