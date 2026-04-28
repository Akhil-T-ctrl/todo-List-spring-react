package com.WebProjects.Todo_List.Service.Implementation;

import com.WebProjects.Todo_List.Entity.Task;
import com.WebProjects.Todo_List.Exception.TitleAlreadyExists;
import com.WebProjects.Todo_List.Repository.TodoRepository;
import com.WebProjects.Todo_List.Service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TodoServiceImplementation implements TodoService {

    private TodoRepository todoRepository;

    @Override
    public Task createTask(Task task){
        Optional<Task> optionalTask = todoRepository.findByTitle(task.getTitle());

        if(optionalTask.isPresent()){
            throw new TitleAlreadyExists("Title already in use!! Try different title");
        }

//        task.setCompleted(false);
        task.setCreatedAt(java.time.LocalDateTime.now());
        return todoRepository.save(task);
    }

    @Override
    public Task getTaskById(Long taskid){
        Optional<Task> optionalTask = todoRepository.findById(taskid);
        return optionalTask.get();
    }

    @Override
    public List<Task> getAllTasks() {
        return todoRepository.findAll();
    }

    @Override
    public Task updateTask(Task task){
        Task existingTask = getTaskById(task.getId());
        existingTask.setTitle(task.getTitle());
        existingTask.setDescription(task.getDescription());
        existingTask.setCompleted(task.isCompleted());

        return todoRepository.save(existingTask);
    }

    public void deleteTask(Long taskId){
        todoRepository.deleteById(taskId);
    }


}
