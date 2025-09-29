import React, {useState} from "react";
import TodoList from "./TodoList";

// Componente principal
export default function App(){
  // Variável de estado que armazenará todas as atividades
  const [toDos, setToDos] = useState([]); // [] indica um array

  // Variável de estado realtivo a Tarefa
  const [newTask, setNewTask] = useState("");
  // Variável de estado relativo a Data
  const [dataDia, setDataDia] = useState("");
  // Variável de estado relativo a Hora
  const [hora, setHora] = useState("");

  // Função adiciona uma tarefa na lista
  const addTask = () => {
    if (newTask.trim() === "") return;
    // Crio um objeto que representa a tarefa
    const newToDo = {
      id: Date.now(), // Crio um id único baseado na hora atual
      text: newTask,
      data: dataDia,
      hora: hora
    }
    setToDos([...toDos, newToDo]);
    // Limpar as variáveis de estado
    setNewTask("");
    setDataDia("");
    setHora("");
  }

  // Função que remove as tarefas pelo id
  const removeTask = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  return(
    <div style = {styles.container}>
      <h1>Minha To-Do-List</h1>
      <div style = {styles.container}>
        <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={styles.input}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
        <div marginTop="20px">
          <input
            type="time"
            placeholder=""
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            style = {styles.inputdh}
          />
          <input
            type="date"
            placeholder="Digite/Escolha  uma data"
            value={dataDia}
            onChange={(e)=>setDataDia(e.target.value)}
            style={styles.inputdh}
          />
        </div>
      <div>
        <TodoList toDos = {toDos} removeTask = {removeTask}/>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px", 
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  inputdh: {
    padding: "10px",
    width: "39%",
    marginRight: "5px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px"
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
}
