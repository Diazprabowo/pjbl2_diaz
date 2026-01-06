<template>
    <h3>Completed ✅</h3>
    <div>
      <button v-if="completedTodos.length > 0" @click="clearCompletedTodos" style="margin-bottom: 16px;">Clear All Completed</button>
      <ul>
        <li v-for="completedTodo in completedTodos" :key="completedTodo.id" style="margin: 8px 0">
          {{ completedTodo.text }}
        </li>
      </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useTodos } from '@/stores/todos';

export default {
  computed: {
    ...mapState(useTodos, [
      'completedTodos'
    ])
  },
  methods: {
    ...mapActions(useTodos, [
      'clearCompletedTodos'
    ])
  }
}
</script>
