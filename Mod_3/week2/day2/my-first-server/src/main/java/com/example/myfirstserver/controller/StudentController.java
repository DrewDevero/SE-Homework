package com.example.myfirstserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myfirstserver.service.StudentService;
import com.example.myfirstserver.model.Student;

@RestController
@RequestMapping("/students")
public class StudentController {
    // @RequestMapping navigates to indicated string, so here we are navigating to http://localhost:8080/students
    @Autowired
    StudentService studentService;
    // StudentService studentService = new StudentService();
    @GetMapping
    public Student getStudent() {
        return studentService.getStudent();
    }
}
