import { defineStore } from "pinia"

export const useTodos = defineStore('useTodos', {
  state: () => ({
    nextId: 0,
    todos: [],
  }),
  getters: {
    pendingTodos: (state) => {
      return state.todos.filter(todo => !todo.isCompleted)
    },
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.isCompleted)
    }
  },
  actions: {
    storeTodo(payload) {
      this.todos.push({ id: this.nextId++, text: payload.text, isCompleted: false })
    },
    updateTodo(payload) {
      const index = this.todos.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        this.todos.splice(index, 1, payload);
      }
    },
    destroyTodo(id) {
      const index = this.todos.findIndex(item => item.id == id)

      if (index > -1 && index < this.todos.length) {
        this.todos.splice(index, 1)
      }
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.isCompleted)
    }
  },
})