<script lang="ts">
import { formatDate } from "../utils";

    export let mail: Mail;
    $: events = mail?.mailInfo.events || []
</script>


<section>
    <h2>Package status</h2>
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
</section>


<style>
</style>