import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo, index) => index !== action.index);

    case EDIT_TODO:
      return state.map((todo, index) =>
        index === action.index
          ? {
              ...todo,
              text: action.text
            }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
