<script lang="ts">
import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    export let order: Mail;
</script>

<section>
    <div on:click={() => dispatch('showTracking', { packageId: order.number })}>
        {order.number}
    </div>
    <button on:click={() => dispatch('deleteTracking', { packageId: order.number })}>
        Delete
    </button>
</section>

<style>
section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 20em;
}
</style>