<script lang="ts">
import { LazyLoader, loadTracked, saveTracked } from "../utils";
import EventHistory from "./EventHistory.svelte";
import MailInfo from "./MailInfo.svelte";
import OrderList from "./OrderList.svelte";

  const loader = new LazyLoader();
  let packageIds: string[] = loadTracked();
  let selectedId;

	$: mail = loader.fetchPackage(selectedId);
	$: saveTracked(packageIds);

	function onShowTracking(event) {
		selectedId = event.detail?.packageId;
	}

	function onAddTracking(event) {
		const packageId = event.detail?.packageId;
		if (!packageId || packageIds.includes(packageId))
			return;
		packageIds = [...packageIds, packageId];
	}

	function onDeleteTracking(event) {
		const packageId = event.detail?.packageId;
		packageIds = packageIds.filter(pId => pId !== packageId);
	}
</script>

<OrderList
	packageIds={packageIds}
	on:addTracking={onAddTracking}
	on:showTracking={onShowTracking}
	on:deleteTracking={onDeleteTracking} />
	

{#if selectedId !== undefined}
	{#await mail}
		<div class="loader-wrap">
			<div class="loader"></div>
		</div>
	{:then mail} 
		<MailInfo {mail} />
		<EventHistory {mail} />
	{:catch err}
		Something went wrong!
	{/await}
{:else}
	<p>Please select an order to display events!</p>
{/if}


<style lang="scss">
	:global(.card) {
		margin-bottom: 1em;
		padding: 1em;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		background-color: white;
	}

	.loader-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 1em;
	}

	.loader {
		border: 8px solid #f3f3f3;
		border-radius: 50%;
		border-top: 8px solid #3498db;
		width: 5em;
		height: 5em;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}

</style>