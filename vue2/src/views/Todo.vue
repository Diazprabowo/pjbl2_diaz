<template>
  <h3>To-Do ⏳</h3>
  <form @submit.prevent="storeTodo(todo)">
    <input v-model="todo.text" type="text" name="text" />
    <button :disabled="!todo.text" type="submit" style="margin: 0 8px;">Add</button>
  </form>
  <div>
    <ul>
      <li v-for="pendingTodo in pendingTodos" :key="pendingTodo.id" style="margin: 8px 0">
        <span style="margin: 0 8px;">{{ pendingTodo.text }}</span>
        <router-link :to="`/edit/${pendingTodo.id}`">
          <button style="margin: 0 4px;">✏️</button>
        </router-link>
        <button @click="updateTodo({ ...pendingTodo, isCompleted: true})" style="margin: 0 4px;">✅</button>
        <button @click="destroyTodo(pendingTodo.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useTodos } from '@/stores/todos';

export default {
  data: () => ({
    todo: {
      id: null,
      text: null,
      isCompleted: false
    }
  }),
  computed: {
    ...mapState(useTodos, [
      'pendingTodos', 
      'completedTodos'
    ])
  },
  methods: {
    ...mapActions(useTodos, [
      'storeTodo', 
      'updateTodo',
      'destroyTodo'
    ]),
  }
}
</script>