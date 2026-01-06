<template>
  <h3>Edit To-Do</h3>
  <form @submit.prevent="submitForm">
    <input v-model="todo.text" type="text" name="text" />
    <button type="submit" style="margin: 0 8px;">Update</button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useTodos } from '@/stores/todos';

export default {
  data() {
    return {
      todo: {
        id: null,
        text: '',
        isCompleted: false
      }
    };
  },
  computed: {
    ...mapState(useTodos, ['todos'])
  },
  created() {
    const todoId = Number(this.$route.params.id);
    const existingTodo = this.todos.find(t => t.id === todoId);
    if (existingTodo) {
      this.todo = { ...existingTodo };
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(useTodos, ['updateTodo']),
    submitForm() {
      this.updateTodo(this.todo);
      this.$router.push('/');
    }
  }
};
</script>
