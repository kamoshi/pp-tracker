<script lang="ts">
    export let mail: Mail;
</script>

<div class="card">
    <h2>Package information</h2>
    {#if mail && mail.mailStatus !== -1}
        <table>
            <tr>
                <td>Number:</td>
                <td>{mail.number}</td>
            </tr>
            <tr>
                <td>Type:</td>
                <td>{mail.mailInfo.typeOfMailName}</td>
            </tr>
            <tr>
                <td>Dispatch country:</td>
                <td>{mail.mailInfo.dispatchCountryName}</td>
            </tr>
            <tr>
                <td>Recipient country:</td>
                <td>{mail.mailInfo.recipientCountryName}</td>
            </tr>
            <tr>
                <td>Format:</td>
                <td>{mail.mailInfo.format || '-'}</td>
            </tr>
            <tr>
                <td>Weight:</td>
                <td>{mail.mailInfo.weight}</td>
            </tr>
        </table>
    {:else}
        The package couldn't be found!
    {/if}
</div>

<style lang="scss">
    h2 {
        margin-top: 0;
    }
</style>