import { useState } from 'react';
import bgImage from '../assets/image.svg';
const EmployeeForm = ({ fetchEmployees }) => {
  const [employee, setEmployee] = useState({
    employeeId: '',
    fullName: '',
    dateOfBirth: '',
    address: '',
    contactNumber: '',
    dateOfJoining: '',
    bankName: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    })
      .then((res) => {
        if (res.ok) {
          alert('Employee added successfully!');
          setEmployee({
            employeeId: '',
            fullName: '',
            dateOfBirth: '',
            address: '',
            contactNumber: '',
            dateOfJoining: '',
            bankName: '',
            accountNumber: '',
          });
          fetchEmployees();
        } else {
          alert('Failed to add employee');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error adding employee');
      });
  };

  return (
    <div className="no-print flex min-h-screen items-center justify-center bg-purple-100 p-4">
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-lg bg-purple-50 shadow-md md:grid-cols-5">
        <div className="hidden place-items-center md:col-span-2 md:flex">
          <img
            src={bgImage}
            alt="Employee Management System"
            className="w-full"
          />
        </div>

        <div className="p-6 md:col-span-3">
          <h2 className="font- mb-6 text-center font-serif text-4xl italic text-fuchsia-600">
            New Employee Form ...
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Employee ID', name: 'employeeId', type: 'number' },
              { label: 'Full Name', name: 'fullName', type: 'text' },
              { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
              { label: 'Address', name: 'address', type: 'text' },
              {
                label: 'Contact Number',
                name: 'contactNumber',
                type: 'number',
              },
              { label: 'Date of Joining', name: 'dateOfJoining', type: 'date' },
              { label: 'Bank Name', name: 'bankName', type: 'text' },
              {
                label: 'Account Number',
                name: 'accountNumber',
                type: 'number',
              },
            ].map(({ label, name, type }) => (
              <div key={name} className="grid grid-cols-3 items-center gap-6">
                <label
                  htmlFor={name}
                  className="col-span-1 text-right font-medium"
                >
                  {label}:
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={employee[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="col-span-2 w-full rounded border p-2"
                  required
                />
              </div>
            ))}

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="rounded bg-purple-600 px-10 py-2 text-white hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
