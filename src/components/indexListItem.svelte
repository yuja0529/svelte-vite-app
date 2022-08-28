<script>
    export let todoList;
    export let mainTodoDelete;
</script>
{#each todoList as item }
<div class="hbox space-between pointer">
    <p>{item.text}</p>
    <i class="fa-solid fa-circle-xmark c(#B6ABAB)" on:click="{() => mainTodoDelete(item.id)}"></i>
</div>
{/each}