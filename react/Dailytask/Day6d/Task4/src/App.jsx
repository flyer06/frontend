import Student from "./components/Student";

const App=()=> {

  const name = "Kumar";
  const age = 22;
  const course = "React JS";

  return (
 <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-96">

        <Student
          name={name}
          age={age}
          course={course}
        />

      </div>

    </div>
 
 
 
 </>
  );
}

export default App;