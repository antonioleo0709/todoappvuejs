import Vue from "vue";
import VueRouter from "vue-router";
import TodoListPage from "../views/TodoListPage.vue"
import AddTodoPage from "../views/AddTodoPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AddTodoPage",
    component: AddTodoPage
  },
  {
    path: "/todolist",
    name: "TodoListPage",
    component: TodoListPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
