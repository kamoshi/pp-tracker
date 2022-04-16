<script lang="ts">
import { formatDate } from "../utils";

    export let mail: Mail;
    $: events = mail?.mailInfo?.events || []
</script>


<div class="card">
    <h2>Package status</h2>
    {#if mail && mail.mailStatus !== -1 && events}
        <table>
            <thead>
                <tr>
                    <th>Event name</th>
                    <th>Date and time</th>
                    <th>Post office</th>
                </tr>
            </thead>
            <tbody>
                {#each events as mailEvent}
                    <tr>
                        <td>{mailEvent.name}</td>
                        <td>{formatDate(mailEvent.time)}</td>
                        <td>{mailEvent.postOffice?.name || '-'}</td>
                    </tr>
                {/each}
            </tbody>
        </table> 
    {:else}
        Package doesn't exist!
    {/if}
</div>


<style lang="scss">
    h2 {
        margin-top: 0;
    }

    table {
        width: 100%;
    }
</style>