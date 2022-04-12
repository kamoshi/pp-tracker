<script lang="ts">
    export let mail: Mail;
</script>

<section>
    <h2>Package information</h2>
    <div>
        Number: {mail.number}
    </div>
    <div>
        Type: {mail.mailInfo.typeOfMailName}
    </div>
    <div>
        Dispatch country: {mail.mailInfo.dispatchCountryName}
    </div>
    <div>
        Recipient country: {mail.mailInfo.recipientCountryName}
    </div>
    <div>
        Format: {mail.mailInfo.format || '-'}
    </div>
    <div>
        Weight: {mail.mailInfo.weight}
    </div>
</section>