const EmployeeList = ({ employees }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Employee List</h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Full Name</th>
            <th className="border p-2">DOB</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Joining date</th>
            <th className="border p-2">Bank Name</th>
            <th className="border p-2">Account No</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="8" className="p-4 text-center">
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.employeeId}>
                <td className="border p-2">{emp.employeeId}</td>
                <td className="border p-2">{emp.fullName}</td>
                <td className="border p-2">
                  {new Date(emp.dateOfBirth).toLocaleDateString('en-GB')}
                </td>
                <td className="border p-2">{emp.address}</td>
                <td className="border p-2">{emp.contactNumber}</td>
                <td className="border p-2">
                  {new Date(emp.dateOfJoining).toLocaleDateString('en-GB')}
                </td>
                <td className="border p-2">{emp.bankName}</td>
                <td className="border p-2">{emp.accountNumber}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button
        onClick={handlePrint}
        className="no-print mt-4 rounded bg-purple-600 px-12 py-2 text-white hover:bg-purple-700"
      >
        Print
      </button>
    </div>
  );
};

export default EmployeeList;
