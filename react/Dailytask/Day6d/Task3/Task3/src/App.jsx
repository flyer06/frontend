const App=()=> {
  const employees = [
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Rahul", salary: 35000 },
    { id: 4, name: "Divya", salary: 40000 }
  ];

  return (
<>
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-green-600 mb-5">
          Employee Details
        </h1>

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="text-center hover:bg-green-50">

                <td className="p-3 border">{emp.id}</td>
                <td className="p-3 border">{emp.name}</td>
                <td className="p-3 border">₹{emp.salary}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>




</>
  );
}

export default App;