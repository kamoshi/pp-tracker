<script lang="ts">
import { createEventDispatcher } from "svelte";
import OrderItem from "./OrderItem.svelte";
    const dispatch = createEventDispatcher();
    
    export let packageIds: string[] = [];
    let inputModel = '';

    const trackPackage = () => {
        dispatch('addTracking', { packageId: inputModel });
        inputModel = '';
    }
</script>

<div class="card">
    <h2>Tracked packages</h2>
    <div class="order-list">
        {#each packageIds as packageId (packageId)}
		    <OrderItem {packageId} on:showTracking on:deleteTracking />
	    {/each}
    </div>
    <div class="order-field">
        <input type="text" bind:value={inputModel}>
        <button on:click={trackPackage}>Track package!</button>
    </div>
</div>

<style lang="scss">
    h2 {
        margin-top: 0;
    }
    .order-field {
        margin-top: 1em;
    }
</style>