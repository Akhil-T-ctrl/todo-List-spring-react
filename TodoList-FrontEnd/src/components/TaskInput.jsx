import {useState} from 'react';
import { createTask, getAllTasks } from '../lib/api';
import './TaskInput.css'

export function TaskInput({setTaskLists}) {
    const [inputTask,setInputTask] = useState('');
    const [inputDescription,setInputDescription] = useState('');
    const [isChecked,setIsChecked] = useState(false);

    function saveTheTask(event){
        setInputTask(event.target.value);
    }

    function saveTheDescription(event){
        setInputDescription(event.target.value);
    }

    function handleTick(){
        setIsChecked(!isChecked);
    }

    async function addTheTask(){
        const newTask = {
            title:inputTask,
            description:inputDescription,
            completed:isChecked
        }

        console.log(newTask);

        await createTask(newTask);

        const retrieve = await getAllTasks();

        setTaskLists(retrieve.data);

        setInputTask('');
        setInputDescription('');
        setIsChecked(false);
    }


    return (
        <div className="task-input-container">
            <input 
                placeholder="Add New Task"
                size = "25"
                onChange={saveTheTask}
                value={inputTask}
                className="input-task-bar"
            />

            <input 
                placeholder="Add description to task"
                size = "25"
                onChange={saveTheDescription}
                value={inputDescription}
                className="input-description-bar"
            />

            
            <div className="task-status-checkbox">
                <label for="tick">
                    <span>Is the task finished</span>

                    <input type="checkbox" id="tick" checked={isChecked} onChange={handleTick}></input>
                </label>
                
            </div>

            <button className="add-button" 
                onClick={addTheTask}>
                Add
            </button>

        </div>
    );
}