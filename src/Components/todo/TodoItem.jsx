import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TodoItem.css";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo, updateCheck } from "../../features/todos/todoSlice";
import { MdCancel } from "react-icons/md";

const TodoItem = ({ todo, setcurrentTodo, currentTodo, setdone }) => {
  const [visibility, setVisibility] = useState(true);
  const [visibility2, setVisibility2] = useState(false);

  const [cancelVisible, setcancelVisible] = useState({
    display: "none",
  });
  const [deleteVisible, setdeleteVisible] = useState({
    display: "unset",
  });

  console.log(currentTodo);
  const dispatch = useDispatch();

  const changeVisible = () => {
    setVisibility(!visibility);
    setVisibility2(!visibility2);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removeTodo(todo.id));
  };

  const handleCheck = (e) => {
    if (e.target.className == "bi bi-circle") {
      dispatch(updateCheck({ id: todo.id, check: true }));
    } else {
      dispatch(updateCheck({ id: todo.id, check: false }));
    }

    changeVisible();
    e.stopPropagation();
  };

  useEffect(() => {
    if (currentTodo === null) {
      setcancelVisible({ display: "none" });
      setdeleteVisible({ display: "unset" });
    }
  }, [currentTodo]);

  const handleCancel = (e) => {
    e.stopPropagation();
    setcancelVisible({ display: "none" });
    setdeleteVisible({ display: "unset" });
    setcurrentTodo(null);
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-4 column">
      <div
        className="container todo "
        style={{ cursor: "pointer"  }}
        title="Click to update"
        onClick={() => {
          setcurrentTodo(todo);
          setdeleteVisible({ display: "none" });
          setcancelVisible({ display: "unset" });
        }}
      >
        {todo.check ? (
          <i
            className="bi bi-check2-circle"
            onClick={handleCheck}
            style={{ color: "green" }}
          ></i>
        ) : (
          <i className="bi bi-circle" onClick={handleCheck}></i>
        )}
       
        <span
          style={{
            display: "inline-flex",
            flexDirection:'column',
            width: "100vw",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
         <span style={{fontSize:'12px'}}>{todo.date}</span>
          <span>{todo.todo}</span>
        </span>

        <MdDelete
          className="deleteIcon"
          onClick={handleRemove}
          style={deleteVisible}
          title="Delete"
        />

        <MdCancel
          className="cancelBtn"
          style={cancelVisible}
          onClick={handleCancel}
          title="Cancel Update"
        />
      </div>
    </div>
  );
};

export default TodoItem;
