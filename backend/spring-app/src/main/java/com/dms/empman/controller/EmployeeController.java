package com.dms.empman.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dms.empman.model.Employee;
import com.dms.empman.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/")
public class EmployeeController {
	
	private EmployeeRepository employeeRepository;
	@Autowired
	public EmployeeController(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>>  fetchAllEmployees(){
		 List<Employee> employees = employeeRepository.findAll();
		 return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}		
	
	@PostMapping("/employees")
	public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
		if(employeeRepository.existsById(employee.getEmployeeId()))
			return new ResponseEntity<String>("An Employee with "+employee.getEmployeeId()+" already exists!", HttpStatus.BAD_REQUEST);
		Employee saved = employeeRepository.save(employee);
		return new ResponseEntity<String>(saved.getFullName() +" 's details saved", HttpStatus.CREATED);
	}
	
	
}
