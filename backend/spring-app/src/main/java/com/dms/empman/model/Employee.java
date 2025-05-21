package com.dms.empman.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employeeId;
	
	@Column(name = "full_name")
	private String fullName;
	
	@Column(name="date_of_birth")
	private LocalDate dateOfBirth;
	
	@Column(name="address")
	private String address;
	
	@Column(name="contact_number")
	private long contactNumber;
	
	@Column(name = "date_of_joining")
	private LocalDate dateOfJoining;
	
	@Column(name="bank_name")
	private String bankName;
	
	@Column(name="account_number")
	private long accountNumber;

	public Employee(String fullName, LocalDate dateOfBirth, String address, long contactNumber, LocalDate dateOfJoining,
			String bankName, long accountNumber) {
		super();
		this.fullName = fullName;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.contactNumber = contactNumber;
		this.dateOfJoining = dateOfJoining;
		this.bankName = bankName;
		this.accountNumber = accountNumber;
	}
	
	
}
