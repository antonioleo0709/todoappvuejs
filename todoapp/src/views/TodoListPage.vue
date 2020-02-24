<template>
  <div class="home container-fluid">
    <h1 id="header">Todo List </h1>
    <div class="container">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "TodoListPage",
  components: {
    TodoList
  }
};
</script>

<style scoped>
.home {
  background: powderblue;
  width: 100%;
  padding: 10rem;
}

#header{
  font-weight: 700;
}


</style>
