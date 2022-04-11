<script lang="ts">
    export let mailEvent: MailEvent;
</script>


<section>
    <h2>{mailEvent.name}</h2>
    <div>{mailEvent.postOffice?.name || ''}</div>
    <div>{mailEvent.postOffice?.description?.city}</div>
    <div>{mailEvent.postOffice?.description?.street}</div>
</section>


<style>
    section {
        padding: 1em;
        background-color: white;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;;
    }
</style>