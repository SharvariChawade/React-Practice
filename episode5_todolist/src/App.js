import './App.css';
import Task from './Task.js'
import { useState } from 'react'; 

function App() {

  const [todoList, settodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputTask = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName : newTask,
      completed : false
    };
    const newtodolist = [...todoList, task];
    settodoList(newtodolist);
  }

  const deleteTask = (index) =>{
    const newtodolist = todoList.filter((ele)=>{
      if(ele.id === index){
        return false;
      }else{
        return true;
      }
    })
    settodoList(newtodolist);
  }

  const updateTask = (index) =>{
    settodoList(
      todoList.map((task) => {
        if(task.id === index){
          return {...task, completed:true};
        }else{
          return task;
        }
      })
    );
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={inputTask}/>
        <br />
        <br />
        <button onClick={addTask} className='addTaskButton'>Add Task</button>
      </div>
      <div className='taskList'>
        <h1 className='heading'>Your ToDo List!</h1>
        {
          todoList.map((task) => {
            return (
              <Task 
                taskName={task.taskName} 
                id={task.id} 
                completed={task.completed} 
                deleteTask={deleteTask} 
                updateTask={updateTask}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
