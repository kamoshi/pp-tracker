<script lang="ts">
import { fetchPackage, loadTracked, saveTracked } from "../utils";
import EventHistory from "./EventHistory.svelte";
import MailInfo from "./MailInfo.svelte";
import OrderList from "./OrderList.svelte";

	let trackedOrders = loadTracked();
	let orderData: Mail[] = [];
	let selected;

	$: mail = orderData.find(item => item.number === selected);
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
	}

	function onDeleteTracking(event) {
		const packageId = event.detail?.packageId;
		trackedOrders = trackedOrders.filter(pId => pId !== packageId);
	}

	$: saveTracked(trackedOrders);
</script>

<OrderList orders={orderData} on:addTracking={onAddTracking} on:showTracking={onShowTracking} on:deleteTracking={onDeleteTracking} />
	
<main>
	{#if mail !== undefined}
		<MailInfo class="mail-info" {mail} />
		<EventHistory {mail} />
	{:else}
		<p>Please select an order to display events!</p>
	{/if}
</main>

<style lang="scss">
	:global(#root) {
		display: flex;
		flex-direction: column;

		@media (min-width: 720px) {
			flex-direction: row;
		}
	}

	main {
		flex-grow: 1;
		padding: 1em;

		:global(.mail-info) {
			margin-bottom: 1em;
		}
	}
</style>