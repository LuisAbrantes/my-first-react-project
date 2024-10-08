import './App.css';
import { useState } from 'react';
import {Task} from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, SetNewTask] = useState(" ");

  const handleChange = (event) => {
    SetNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task])
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask } />;
        })}
      </div>
    </div>
  );
}

export default App;