<script>
    import { Confetti } from "svelte-confetti"
    import { tick } from "svelte"

    export let toggleOnce = false;

    let active = false;

    async function click() {
        if (toggleOnce) {
            console.log("야");
            active = !active;
            return;
        }

        active = false;
        await tick();
        active = true;

    };
</script>
<div class="hbox space-between h(80) bg(#E6F0EF) c(#4B3C2D) p(0/20) font(20) m(0/0/10)">
    <h1>오늘의 할일</h1>
    <i class="fa-solid fa-carrot c(#4B3C2D)" on:click={click}><Confetti /></i>
</div>