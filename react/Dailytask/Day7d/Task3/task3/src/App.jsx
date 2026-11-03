import Student from "./components/Student";

const App=()=> {
  const students = [
    {
      name: "Arun",
      age: 20,
      course: "React",
    },
    {
      name: "Kumar",
      age: 21,
      course: "JavaScript",
    },
    {
      name: "Priya",
      age: 22,
      course: "Python",
    },
  ];

  return (
  <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Student Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  
  </>
  );
}

export default App;