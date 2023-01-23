export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "ROMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
});

export const editTodo = (text, index) => ({
  type: EDIT_TODO,
  text,
  index
});
