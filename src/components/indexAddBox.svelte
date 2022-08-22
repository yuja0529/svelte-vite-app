<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher();
    let inputVal = '';

    const todoAddBtn = () => {
        dispatch('sayTodo', {
            text: inputVal,
        })
    };
</script>

<input 
    type="text" 
    class="w(100%) h(40) b(#A9C5B9) r(20) outline(0) p(0/20)"
    placeholder="오늘의 할일을 적어봐!"
    bind:value={inputVal}
    >
<i class="fa-solid fa-plus absolute right(40) pointer font(20) c(#A9C5B9)" on:click={todoAddBtn}></i>