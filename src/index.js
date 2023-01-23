import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import todos from "./reducers";
import { addTodo, toggleTodo, removeTodo, editTodo } from "./actions";
import "./index.scss";

const store = createStore(todos);
console.log("Initial State", store.getState());

store.dispatch(addTodo("Dispatch my first todo"));
console.log("State after adding my first todo", store.getState());

store.dispatch(addTodo("Dispatch my second todo"));
console.log("State after adding my second todo", store.getState());

store.dispatch(addTodo("Dispatch my third todo"));
console.log("State after adding my third todo", store.getState());

store.dispatch(editTodo("editing my todo", 2));
console.log("State after editing my first todo", store.getState());

store.dispatch(removeTodo(1));
console.log("State after removing my third todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
