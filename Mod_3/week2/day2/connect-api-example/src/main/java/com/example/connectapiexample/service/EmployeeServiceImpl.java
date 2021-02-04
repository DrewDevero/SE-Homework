package com.example.connectapiexample.service;

import com.example.connectapiexample.model.Employees;
import com.example.connectapiexample.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Iterable<Employees> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employees findEmployeeById(Long id) {
        return employeeRepository.findById(id).get();
    }
    @Override
    public Employees createEmployee(Employees employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public HttpStatus deleteEmployee(Long id) {
        return null;
    }

    @Override
    public Employees editEmployee(Employees employee) {
        return employeeRepository.save(employee);
    }
}
