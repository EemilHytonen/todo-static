<script>
  import { addTodo } from "$lib/states/todoState.svelte.js";

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    addTodo(data);
    event.target.reset();
  }
</script>

<form onsubmit={handleSubmit}>
  <label for="name">Todo</label>
  <input id="name" name="name" type="text" placeholder="Enter a new todo" />

  <div>
    <input id="done" name="done" type="checkbox" />
    <label for="done">Done</label>
  </div>

  <input type="submit" value="Add Todo" />
</form>