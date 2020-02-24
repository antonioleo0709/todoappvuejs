<template>
  <div>
    <div id="formContainer">
      <form v-on:submit="submitNewTodo">
        <div class="form-group">
          <label for="todoitem col-form-label-lg" id="label">What is your task today ?</label>
          <div class="maxInfo">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter your todo"
              v-model="name"
              v-bind:maxLength="max"
            />

            <div class="maxInfoItem">{{`${name.length}/40`}}</div>
          </div>
        </div>
        <button
          type="submit"
          value="Add"
          class="btn btn-primary btn-lg"
          v-bind:disabled="name.length === 0"
        >Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      name: "",
      max: 40
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitNewTodo(e) {
      e.preventDefault();
      this.addTodo(this.name);
      this.name = "";
      //move to TodoListPage when submit the form
      this.$router.push("/todolist");
    }
  }
};
</script>

<style scoped>
.formContainer {
  background-color: yellow;
  position: relative;
}
#label {
  font-size: 2em;
}
.btn {
  font-weight: 700;
}
input[type="text"] {
  font-weight: 600;
}

.maxInfo {
  display: flex;
}

.maxInfoItem {
  height: 48px;
  width: 50px;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>