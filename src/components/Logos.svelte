<script lang="ts">
    import { clReadable, clUnsubscribe } from "../stores/exStore";

    let datas;
    const dataFinal = clReadable.subscribe((item) => datas = item);
    clUnsubscribe();
</script>
