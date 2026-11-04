
import { useState } from "react";

const App=()=> {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [viewId, setViewId] = useState(null);

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editId !== null) {
      setStudents(
        students.map((item) =>
          item.id === editId
            ? { ...item, ...student }
            : item
        )
      );

      setEditId(null);
    } else {
      setStudents([
        ...students,
        {
          ...student,
          id: Date.now(),
        },
      ]);
    }

    setStudent({
      name: "",
      email: "",
      course: "",
    });
  };

  const handleEdit = (item) => {
    setStudent({
      name: item.name,
      email: item.email,
      course: item.course,
    });

    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setStudents(
      students.filter((item) => item.id !== id)
    );

    if (viewId === id) {
      setViewId(null);
    }
  };

  const handleView = (id) => {
    setViewId(viewId === id ? null : id);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Data Management
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg mb-3"
          />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            {editId !== null ? "Update Student" : "Add Student"}
          </button>

        </form>

        <h2 className="text-xl font-bold mt-8 mb-4">
          Student List
        </h2>

        {students.map((item) => (

          <div
            key={item.id}
            className="border p-4 rounded-lg mb-4"
          >

            <h3 className="font-bold text-lg">
              {item.name}
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">

              <button
                type="button"
                onClick={() => handleView(item.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                View
              </button>

              <button
                type="button"
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

            {viewId === item.id && (

              <div className="bg-gray-100 p-4 mt-4 rounded-lg">

                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Course: {item.course}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
    
    
    </>
  );
}

export default App;
