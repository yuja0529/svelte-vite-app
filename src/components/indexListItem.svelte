<script>
    export let todoList;
    export let mainTodoDelete;
</script>
{#each todoList as item }
<div class="hbox space-between pointer">
    <p> <input type="checkbox" bind:checked={item.completed} class="m(0/4/0)">{item.text}</p>
    <i class="fa-solid fa-circle-xmark c(#B6ABAB)" on:click="{() => mainTodoDelete(item.id)}"></i>
</div>
{/each}