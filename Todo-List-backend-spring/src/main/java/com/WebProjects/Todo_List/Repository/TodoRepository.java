package com.WebProjects.Todo_List.Repository;

import com.WebProjects.Todo_List.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TodoRepository extends JpaRepository<Task,Long> {
    Optional<Task> findByTitle(String title);
}
