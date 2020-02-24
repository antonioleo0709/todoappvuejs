<template>
  <div id="sidebar">
    <div id="nav">
      <div class="router">
        <router-link to="/">Create Todo</router-link> | 
        <router-link to="/todolist">View Todos</router-link>
      </div>
    </div>

    <div id="info">
      <p>Total : {{allTodos.length}}</p>
      <p>Done : {{todosDone}}</p>
      <p>Remaining : {{todosRemaining}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheSideBar",
  computed: mapGetters(["allTodos", "todosDone", "todosRemaining"])
};
</script>

<style scoped>
#sidebar {
  background: beige;
  width: 25vw;
  height: 100vh;
}

.router {
  font-size: 30px;
}

#nav {
  display: "flex";
  flex-direction: column;
}

#info {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight : 700;
  margin-top: 50px;
  align-items: center;
  justify-content:space-around
}
</style>