import React from "react";

export default function ToDoItem({toDo, removeTask}){
    return(
        <li>
            {toDo.date} -- {toDo.hora} -- : {toDo.text}
            <button onClick={() => removeTask(toDo.id)}>X</button>
        </li>
    )
}