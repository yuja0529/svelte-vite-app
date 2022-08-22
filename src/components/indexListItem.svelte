<script>
    export let todoList;

    let listItemRemove = () => {

    }
</script>
{#each todoList as item }
<div class="hbox space-between pointer">
    <p>{item.text}</p>
    <i class="fa-solid fa-circle-xmark c(#B6ABAB)"></i>  
</div>
{/each}