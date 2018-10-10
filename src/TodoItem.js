import React from "react";
import "./TodoItem.css";

const ToDoItem = ({text, key, deleteFn}) => (
  <li
    className='TodoItem'
    onClick={() => deleteFn(key)}
    key={key}>{text}
  </li>
)