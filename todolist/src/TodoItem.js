import React from "react";

export default function ToDoItem({toDo, removeTask}){
    return(
        <li>
            {toDo.data} -- {toDo.hora} -- : {toDo.text}
            <button styles={styles.button} onClick={() => removeTask(toDo.id)}>X</button>
        </li>
    );
};

const styles = {
    item:{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        display: "flex",
        justifycontent: "space-between",
        alignItens: "center",
    },
    button:{
        background: "red",
        color: "white",
        border: "none",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "4px"
    }
}