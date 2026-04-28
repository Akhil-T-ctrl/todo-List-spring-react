package com.WebProjects.Todo_List.Controller;

import com.WebProjects.Todo_List.Entity.Task;
import com.WebProjects.Todo_List.Service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tasks")
@AllArgsConstructor
@CrossOrigin(origins="*")
public class TodoController {

    private TodoService todoService;

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        System.out.println(task.isCompleted());
        Task savedTask = todoService.createTask(task);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") Long Id){
        Task task = todoService.getTaskById(Id);
        return new ResponseEntity<>(task,HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks(){
        List<Task> tasks = todoService.getAllTasks();
        return new ResponseEntity<>(tasks,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") Long taskId,
                                           @RequestBody Task task){
        task.setId(taskId);
        Task updatedTask = todoService.updateTask(task);
        return new ResponseEntity<>(updatedTask,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public void deleteTask(@PathVariable("id") Long taskId){
        todoService.deleteTask(taskId);
    }
}
