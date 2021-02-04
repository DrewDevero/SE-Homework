package com.example.connectapiexample.controller;

import com.example.connectapiexample.model.Employees;
import com.example.connectapiexample.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/employees")
// http://localhost:8080/employees
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public Iterable<Employees> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/{id}")
    // http://localhost:8080/employees/id
    public Employees getEmployee(@PathVariable Long id) {
        return employeeService.findEmployeeById(id);
    }

    @PostMapping
    public Employees createEmployee(@RequestBody Employees employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteEmployeeById(@PathVariable Long id) {
        return employeeService.deleteEmployee(id);
    }

}
