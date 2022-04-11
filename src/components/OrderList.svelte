<script lang="ts">
import { createEventDispatcher } from "svelte";
import OrderItem from "./OrderItem.svelte";
    const dispatch = createEventDispatcher();
    
    export let orders: Mail[] = [];
    let inputModel = '';

    function onTrack() {
        dispatch('addTracking', { packageId: inputModel });
        inputModel = '';
    }
</script>

<aside>
    <div class="order-list">
        {#each orders as order (order.number)}
		    <OrderItem {order} on:showTracking on:deleteTracking />
	    {/each}
    </div>
    <div class="order-field">
        <input type="text" bind:value={inputModel}>
        <button on:click={onTrack}>Track package!</button>
    </div>
</aside>


<style>
    .order-list {
        display: flex;
        flex-direction: column;
    }
    .order-field {
        display: flex;
        flex-direction: row;
    }
</style>