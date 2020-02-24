<template>
  <div class="home container-fluid">
    <div class="container">
      <h1 id="header">Create Todo</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
            <AddTodo />
        </div>  
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "AddTodoPage",
  components: {
    AddTodo
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
