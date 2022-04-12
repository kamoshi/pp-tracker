<script lang="ts">
import { createEventDispatcher } from "svelte";
import OrderItem from "./OrderItem.svelte";
    const dispatch = createEventDispatcher();
    
    export let orders: Mail[] = [];
    let inputModel = '';

    const trackPackage = () => {
        dispatch('addTracking', { packageId: inputModel });
        inputModel = '';
    }
</script>

<aside>
    <h2>Tracked packages</h2>
    <div class="order-list">
        {#each orders as order (order.number)}
		    <OrderItem {order} on:showTracking on:deleteTracking />
	    {/each}
    </div>
    <div class="order-field">
        <input type="text" bind:value={inputModel}>
        <button on:click={trackPackage}>Track package!</button>
    </div>
</aside>

<style lang="scss">
    aside {
        flex-shrink: 0;
    }
</style>