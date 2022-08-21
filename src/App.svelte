<script>
  import IndexHeader from "~/components/indexHeader.svelte";
  import IndexSeachBox from "~/components/indexSeachBox.svelte";

  function mainTodoAdd (event){
    console.log(event.detail.text)
  }
</script>

<IndexHeader/>
<main class="p(0/20) hbox">
  <IndexSeachBox on:sayTodo={mainTodoAdd}/>
</main>
