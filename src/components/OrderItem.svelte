<script lang="ts">
import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let order: Mail;

    let hovering = false;
</script>

<div
    on:mouseenter={() => hovering = true}
    on:mouseleave={() => hovering = false}
    >
    <div class="label" on:click={() => dispatch('showTracking', { packageId: order.number })}>
        {order.number}
    </div>
    {#if hovering}
        <button on:click={() => dispatch('deleteTracking', { packageId: order.number })}>
            Delete
        </button>
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2em;
        
        .label {
            flex-grow: 1;
            cursor: pointer;
        }
    }
</style>