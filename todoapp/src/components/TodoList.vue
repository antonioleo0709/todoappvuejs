<template>
  <div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr class="tablerow">
            <th scope="col" style="width:5%">No.</th>
            <th scope="col" style="width:50%">Things to Do</th>
            <th scope="col" style="width:5%">Status</th>
            <th scope="col" style="width:40%">Options</th>
          </tr>
        </thead>
        <tbody v-for="todo in allTodos" v-bind:key="todo.id">
          <tr class="todoItem">
            <th scope="row">{{allTodos.indexOf(todo) + 1}}</th>
            <td v-bind:class="{'isCompleted' : todo.completed}">{{todo.name}}</td>
            <td>{{todo.completed ? 'Completed' : 'Uncompleted'}}</td>
            <td>
              <button
                type="button"
                class="btn"
                v-bind:class="[todo.completed ? 'btn-warning' : 'btn-success']"
                v-on:click="completeTodo(todo.id)"
              >{{todo.completed ? 'Mark Uncomplete' : 'Mark Complete'}}</button>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#editTodo"
                v-on:click="editTodo(todo)"
                v-bind:disabled="todo.completed"
              >Edit</button>
              <button
                type="button"
                class="btn btn-danger"
                v-bind:disabled="!todo.completed"
                v-on:click="removeTodo(todo.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

    <!--Edit Todo Modal/Dialog-->
    <div
      class="modal fade"
      id="editTodo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">Edit Todo</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              id="editForm"
              class="form-control"
              type="text"
              v-bind:value="selectedTodo.name"
              v-bind:maxLength="max"
            />
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              v-on:click="markAsChange(selectedTodo)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      selectedTodo: "",
      max: 40
    };
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["updateStatus", "deleteTodo", "saveChange"]),
    completeTodo(id) {
      this.updateStatus(id);
    },

    editTodo(todo) {
      this.selectedTodo = todo;
    },

    removeTodo(id) {
      this.deleteTodo(id);
    },

    markAsChange(selectedTodo) {
      let name = document.querySelector("#editForm").value;
      console.log("Name after change", name);
      selectedTodo.name = name;
      this.saveChange(selectedTodo);
    }
  }
};
</script>

<style scoped>

.isCompleted {
  text-decoration: line-through;
}

.btn {
  margin: 0 0.5rem;
  font-weight: 700;
}
.tablerow {
  font-size: 25px;
}
.todoItem {
  font-size: 23px;
  font-weight: 600;
  color: #707070;
}
.modal-title {
  font-weight: 700;
}
</style>