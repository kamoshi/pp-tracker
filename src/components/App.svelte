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
	

{#if mail !== undefined}
	<MailInfo {mail} />
	<EventHistory {mail} />
{:else}
	<p>Please select an order to display events!</p>
{/if}


<style lang="scss">
	:global(.card) {
		margin-bottom: 1em;
		padding: 1em;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
</style>