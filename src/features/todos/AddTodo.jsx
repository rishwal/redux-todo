import React, { useEffect, useRef, useState } from "react";
import "./AddTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { addTodo, updateTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = ({ currentTodo, setcurrentTodo }) => {
  const dateRef = useRef(null);
  const todoRef = useRef(null);

  const [cancelVisible, setcancelVisible] = useState({
    display: "none",
  });
  const [deleteVisible, setdeleteVisible] = useState({
    display: "unset",
  });

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      todoRef.current.value = currentTodo.todo || "";
      dateRef.current.value = currentTodo.date || "";
    } else {
      todoRef.current.value = "";
    }
  }, [currentTodo]);

  const handleCreateTodo = () => {
    if (todoRef.current.value && dateRef.current.value) {
      dispatch(addTodo(todoRef.current.value, dateRef.current.value));

      todoRef.current.value = "";
      dateRef.current.value = "";
      setcurrentTodo(null);
    }
  };

  const handleUpdate = () => {
    if (todoRef.current.value && dateRef.current.value) {
      dispatch(
        updateTodo({
          id: currentTodo.id,
          updatedTodo: todoRef.current.value,
          updatedDate: dateRef.current.value,
        })
      );
      todoRef.current.value = "";
      dateRef.current.value = "";

      setcurrentTodo(null);
      setcancelVisible({ display: "none" });
      setdeleteVisible({ display: "unset" });
    }
  };

  return (
    <header className="container text-center">
      <div className="row" id="row">
        <section className="col-md-5" id="heading">
          <h1 className="display-1" style={{ color: "#fff" }}>
            <span style={{ color: "#8c52ff" }}>TO</span>DO
          </h1>
        </section>
        <section className="col-md-7 " id="input-section" style={{display:"flex",justifyContent:'center'}}>
          <div className="input-field ">
            <div className="input">
              <input
                type="text"
                ref={todoRef}
                placeholder="Add your task here..."
              />

              <input type="date" id="dateInput" ref={dateRef} />
            </div>
            {currentTodo ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                title="Update"
                className="add-icon update"
                onClick={handleUpdate}
              />
            ) : (
              <FontAwesomeIcon
                className="add-icon"
                title="Crete todo"
                icon={faCirclePlus}
                onClick={handleCreateTodo}
              />
            )}
          </div>
        </section>
      </div>
    </header>
  );
};

export default AddTodo;
