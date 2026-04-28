import { deleteTask, getAllTasks,updateTask} from '../lib/api';
import './TaskList.css';
import { useState } from 'react';

export function TaskList({title,description,completed,id,setTaskLists}){
    let statusString = '';
    if(completed){
        statusString = 'completed';
    }else{
        statusString = 'pending';
    }

    const [inputEdit,setInputEditedTask] = useState('');
    const [inputEditedDescription,setInputEditedDescription] = useState('');
    const [isCheckedNew,setIsCheckedNew] = useState(false);
    const [clicked,setClicked] = useState(false);

    

    function saveTheEdit(event){
        setInputEditedTask(event.target.value);
    }

    function saveTheEditedDescription(event){
        setInputEditedDescription(event.target.value);
    }

    function handleTickNew(){
        setIsCheckedNew(!isCheckedNew);
    }

    async function sendPutRequest() {
        await updateTask(id,{
            title:inputEdit,
            description:inputEditedDescription,
            completed:isCheckedNew
        });

        const retrieve = await getAllTasks();

        setClicked(false);

        setTaskLists(retrieve.data);

    }

    async function handleDeleteButton() {
        await deleteTask(id);

        const retrieve = await getAllTasks();

        setTaskLists(retrieve.data);
        
    }

    if(clicked){
        return(
            <div className="single-task">
                <input 
                    placeholder="Add New Task"
                    size = "25"
                    onChange={saveTheEdit}
                    value={inputEdit}
                    className="input-task-bar"
                />

                <input 
                    placeholder="Add description to task"
                    size = "25"
                    onChange={saveTheEditedDescription}
                    value={inputEditedDescription}
                    className="input-description-bar"
                />

                <div className="task-status-checkbox">
                    <label for="tickEdit">
                        <span>Is the task finished</span>

                        <input 
                            type="checkbox" 
                            id="tickEdit" checked={isCheckedNew} 
                            onChange={handleTickNew}>
                        </input>

                    </label>
                </div>

                <button onClick={sendPutRequest} className="save-button">
                    SAVE
                </button>
            </div>
        );

        
    }

    return(
        <div className="single-task">
            <div className="single-task-name-description">
                <span className="task-title">{title.toUpperCase()}</span>
                <span className="task-separator">&nbsp;:&nbsp;</span>
                <span className="task-description">{description}</span>
                <span className="task-divider">&nbsp;--&nbsp;</span>
                <span className="task-status-label">status</span>
                 <span className="task-separator">&nbsp;:&nbsp;</span>
                <span className={`task-status-value ${statusString.toLowerCase()}`}>
                    {statusString}
                </span>
            </div>

            <div className="edit-and-delete-buttons-container">
                <button className="edit-button"  onClick={() => setClicked(true)}>
                    EDIT
                </button>

                <button className="delete-button"  onClick={handleDeleteButton}>
                    DELETE
                </button>
            </div>
        </div>
    );
}