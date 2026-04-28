import { useState,useEffect } from 'react';
import './App.css'
import { TaskInput } from './components/TaskInput';
import { TaskLists } from './components/TaskLists';
import { getAllTasks } from './lib/api';

function App() {
  const[taskLists,setTaskLists] = useState([]);
  

  useEffect(() => {
    const loadTasksOnRefresh = async () => {
      const reloadTasks = await getAllTasks();
      setTaskLists(reloadTasks.data);
    };
    loadTasksOnRefresh();
  },[]);
  
  return(

    <div className="app-container">

      <div className="title-text">TASK MANAGER</div>
      
      <div className="taskinput-cum-tasklists-container">
        <div className="task-input-section">
          <TaskInput 
            taskLists={taskLists}
            setTaskLists={setTaskLists}
          />
        </div>
      
        <div>
          <TaskLists 
            taskLists={taskLists}
            setTaskLists={setTaskLists}
          />
        </div>
      </div>

    </div>
  );
}

export default App
