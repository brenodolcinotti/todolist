import React from "react";
import ToDoItem from "./TodoItem";

export default function TodoList({toDos, removeTask}){
    return(
        <ul>
            {toDos.map((toDo) => (
                <ToDoItem key = {toDo.id} toDo = {toDo} removeTask = {removeTask}/>
            ))}
        </ul>
    );
}