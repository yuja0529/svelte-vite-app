<script>
  import IndexHeader from "~/components/indexHeader.svelte";
  import IndexAddBox from "~/components/indexAddBox.svelte";
  import IndexListItem from "~/components/indexListItem.svelte";

  // 할일 추가
  const mainTodoAdd = (event) => {
    let newTodoTxt = event.detail.text;
    let lastID = todoList[todoList.length - 1]['id']; 
    
    // todoList 마지막에 새 아이템 추가
    if (newTodoTxt) {
      const newItem = {
        id  : ++lastID,
        text: newTodoTxt,
        completed: false,
      }
    
      todoList[todoList.length] = newItem;
      console.log(todoList);
      newTodoTxt = "";
    } else {
      alert("할일을 적어주세요!")
    }
  };

  const todoList = [
      {
          id: 1,
          text: "스벨트 비트로 개발환경 구축하기",
          completed: false,
      },
  ];
</script>

<!-- ============================================================================ -->

<IndexHeader/>

<main class="p(0/20) hbox">
  <IndexAddBox on:sayTodo={mainTodoAdd}/>
</main>

<div class="p(0/20) vbox m(10/0)">
  <IndexListItem {todoList}/>
</div>