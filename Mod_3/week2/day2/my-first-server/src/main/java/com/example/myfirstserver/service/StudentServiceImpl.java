package com.example.myfirstserver.service;

import com.example.myfirstserver.model.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Override
    public Student getStudent() {
        Student drew = new Student("Alston", "Devero-Belfon", 29);
        return drew;
    }
}
