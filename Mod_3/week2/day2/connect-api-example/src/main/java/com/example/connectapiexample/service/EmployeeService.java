package com.example.connectapiexample.service;

import com.example.connectapiexample.model.Employees;
import org.springframework.http.HttpStatus;
public interface EmployeeService {
    Iterable<Employees> getEmployees();
    Employees findEmployeeById(Long id);
    Employees createEmployee(Employees employee);
    HttpStatus deleteEmployee(Long id);
}
