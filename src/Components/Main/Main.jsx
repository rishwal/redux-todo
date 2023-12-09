import React, { useState } from "react";
import TodoItem from "../todo/TodoItem";
import { useSelector } from "react-redux";
import AddTodo from "../../features/todos/AddTodo";

const Main = () => {
  const todos = useSelector((state) => state.todos);
  const [currentTodo, setcurrentTodo] = useState(null);
  const [done, setdone] = useState(false);

  console.log(todos);

  return (
    <main id="main">
      <AddTodo currentTodo={currentTodo} setcurrentTodo={setcurrentTodo} setdone={setdone}/>

      <div className="container">
        <div className="row text-center  row-col-4">
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              setcurrentTodo={setcurrentTodo}
              currentTodo={currentTodo}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
