package com.WebProjects.Todo_List.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class TitleAlreadyExists extends RuntimeException{
    private String message;

    public TitleAlreadyExists(String message){
        super(message);
    }
}
