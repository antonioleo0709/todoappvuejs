import uuid from 'uuid';

const state = {
  todoList: [
    // { id: 1, name: "Do homework", completed: false },
    // { id: 2, name: "Mop floor", completed: true },
    // { id: 3, name: "Cook breakfast", completed: false }
  ]
};

const getters = {
  allTodos: state => state.todoList,
  todosDone: state =>
    state.todoList.filter(todo => todo.completed === true).length,
  todosRemaining: state =>
    state.todoList.filter(todo => todo.completed === false).length
};

const actions = {
    addTodo({commit}, name){
        let todo = {
            id : uuid.v4(),
            name,
            completed:false,
        }
        commit('addTodo', todo)
    },
    updateStatus({commit},id){
        commit('updateStatus', id)
    },
    deleteTodo({commit},id){
        commit('deleteTodo',id);
    },
    saveChange({commit}, selectedTodo){
        commit('saveChange', selectedTodo)
    }
};

const mutations = {
    addTodo : (state,todo)=> state.todoList.unshift(todo),
    updateStatus : (state,id)=>{
        let todo = state.todoList.find(item=>item.id === id)
        todo.completed = !todo.completed
    },
    deleteTodo : (state,id)=> {
        state.todoList =  state.todoList.filter(item=> item.id !== id);
    },
    saveChange : (state, selectedTodo) => {
        let index = state.todoList.findIndex(todo => todo.id === selectedTodo.id)
        state.todoList.splice(index,1,selectedTodo)
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
