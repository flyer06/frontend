const Student=({ name, age, course })=> {

  return (
    <>
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold text-orange-600 mb-5">
        Student Information
      </h2>

      <p className="bg-orange-50 p-3 rounded-lg mb-3">
        Name: {name}
      </p>

      <p className="bg-orange-50 p-3 rounded-lg mb-3">
        Age: {age}
      </p>

      <p className="bg-orange-50 p-3 rounded-lg">
        Course: {course}
      </p>

    </div>
    
    
    
    </>
  );
}

export default Student;