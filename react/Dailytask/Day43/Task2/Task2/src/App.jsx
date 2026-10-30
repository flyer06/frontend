const App=()=> {

  const student = {
    name: "PRAKASH",
    age: 21,
    department: "BE AERONAUTICAL",
    city: "CHOLA DHESAM"
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white w-96 p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-purple-600 mb-5">
          Student Details
        </h1>

        <div className="space-y-4">

          <p className="bg-purple-50 p-3 rounded-lg">
            <span className="font-bold">Name:</span> {student.name}
          </p>

          <p className="bg-purple-50 p-3 rounded-lg">
            <span className="font-bold">Age:</span> {student.age}
          </p>

          <p className="bg-purple-50 p-3 rounded-lg">
            <span className="font-bold">Department:</span> {student.department}
          </p>

          <p className="bg-purple-50 p-3 rounded-lg">
            <span className="font-bold">City:</span> {student.city}
          </p>

        </div>

      </div>

    </div>
    
    
    
    
    </>
  );
}

export default App;