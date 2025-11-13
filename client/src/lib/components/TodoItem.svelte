<script>
  import { removeTodo, toggleDone } from "$lib/states/todoState.svelte.js";
  let { todo } = $props();
</script>

<li>
  <input
    id={todo.id}
    type="checkbox"
    checked={todo.done}
    onchange={() => toggleDone(todo)}
  />
  <label for={todo.id}>
    {todo.name} ({todo.done ? "done" : "not done"})
  </label>
  <button onclick={() => removeTodo(todo)}>Remove</button>
</li>