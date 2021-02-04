package com.example.connectapiexample.repository;

import com.example.connectapiexample.model.Employees;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employees, Long> {

}
