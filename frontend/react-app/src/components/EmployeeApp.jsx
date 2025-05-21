import { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const EmployeeApp = () => {
  const [employees, setEmployees] = useState([]);
  const fetchEmployees = () => {
    fetch('http://localhost:8080/api/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching employees:', error));
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeForm fetchEmployees={fetchEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeeApp;
