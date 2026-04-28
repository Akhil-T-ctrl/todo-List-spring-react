package com.WebProjects.Todo_List.Service;

import com.WebProjects.Todo_List.Entity.Task;

import java.util.List;

public interface TodoService {

    Task createTask(Task task);

    Task getTaskById(Long id);

    List<Task> getAllTasks();

    Task updateTask(Task task);

    void deleteTask(Long taskId);
}
