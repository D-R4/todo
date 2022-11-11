import Task from './components/Task'
import ToDoForm from './components/ToDoForm'
import './assets/App.css';

import { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    
  ])
  
  const addTask = (userInput) =>{
    if(userInput){
      const newTask = {
        id: Math.random.toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTasks([...tasks, newTask])
    }
  }

  const removeTask = (id) =>{
    setTasks([...tasks.filter((todo) => todo.id !== id)])
    
    
  }

  const handleToggle = () =>{

  }



  return (
    <div className="container">
      <h1>Количество задач :{tasks.length} </h1>
      <div className="tasks">
        {tasks.map((todo) => {
          return (
          <Task 
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />)
        })}
        
      </div>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
