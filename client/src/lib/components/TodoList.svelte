<script>
  import { todos } from "$lib/states/todoState.svelte.js";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul>
  {#each $todos as todo (todo.id)}
    <TodoItem todo={todo} />
  {/each}
</ul>