import { writable } from "svelte/store";
import { browser } from "$app/environment";

const TODOS_KEY = "todos";

const initialTodos = browser && localStorage.getItem(TODOS_KEY)
  ? JSON.parse(localStorage.getItem(TODOS_KEY))
  : [];

export const todos = writable(initialTodos);

todos.subscribe((value) => {
  if (browser) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(value));
  }
});

export function addTodo(data) {
  const todo = {
    id: crypto.randomUUID(),
    name: data.name,
    done: data.done === "on",
  };
  todos.update((list) => [...list, todo]);
}

export function removeTodo(todo) {
  todos.update((list) => list.filter((t) => t.id !== todo.id));
}

export function toggleDone(todo) {
  todos.update((list) =>
    list.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
  );
}