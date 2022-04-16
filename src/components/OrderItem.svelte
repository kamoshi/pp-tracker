<script lang="ts">
import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let order: Mail;
</script>

<div class="row-wrap">
    <button
        class="label"
        on:click={() => dispatch('showTracking', { packageId: order.number })}>
        {order.number}
    </button>
    <button
        class="delete"
        on:click={() => dispatch('deleteTracking', { packageId: order.number })}>
        Delete
    </button>
</div>

<style lang="scss">
    .row-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2em;
        padding-left: 1em;

        button {
            margin: 0;
            cursor: pointer;
        }
        
        .label {
            flex-grow: 1;
            text-align: left;
            background-color: unset;
            
            &:not(:focus) {
                border: unset;
            }
        }
    }
</style>