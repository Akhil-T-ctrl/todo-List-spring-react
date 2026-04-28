import { TaskList } from "./TaskList";
import './TaskLists.css'

export function TaskLists({taskLists,setTaskLists}) {

    return (
        <div className="tasks-lists-container">
            {taskLists.map((taskList) => {
                return(
                    <TaskList 
                        title={taskList.title}
                        description={taskList.description}
                        completed={taskList.completed}
                        id={taskList.id}
                        setTaskLists={setTaskLists}
                    />
                );
            })}
        </div>
    );
}