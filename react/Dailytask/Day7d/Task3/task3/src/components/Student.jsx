const Student=({ name, age, course })=> {
  return (
   <>
   
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">
        {name}
      </h2>

      <p className="text-gray-700 mb-2">
        Age: {age}
      </p>

      <p className="text-gray-700">
        Course: {course}
      </p>
    </div>
   
   </>
  );
}

export default Student;