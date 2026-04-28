package com.WebProjects.Todo_List.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(TitleAlreadyExists.class)
    public ResponseEntity<ErrorDetails> handleTitleAlreadyExistsException(
                                                        TitleAlreadyExists exception,
                                                        WebRequest webRequest
                                                        ){

        ErrorDetails errorDetails = new ErrorDetails(
                                                    LocalDateTime.now(),
                                                    exception.getMessage(),
                                                    webRequest.getDescription(false),
                                                    "Task_Title_Already_exists"
        );

        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }
}
