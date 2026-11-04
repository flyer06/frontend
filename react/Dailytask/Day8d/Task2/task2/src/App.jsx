
import { useState } from "react";

const App=()=> {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
 <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-3"
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={student.age}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        {submitted && (
          <div className="mt-5 bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">
              Student Details
            </h2>

            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
          </div>
        )}
      </div>
    </div>
 
 
 </>
  );
}

export default App;
