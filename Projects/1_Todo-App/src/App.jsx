import AddTodo from "./componants/AddTodo";
import AppName from "./componants/AppName";
import TodoItem1 from "./componants/TodoItem1";
import TodoItem2 from "./componants/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
