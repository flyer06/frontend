import { useState } from "react";

const Task1=()=> {
  const [name, setName] = useState("Arun");

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Student Name
        </h1>

        <h2 className="text-xl mb-4">
          Name: {name}
        </h2>
<button
  onClick={() => setName("Kumar")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800"
>
  Change Name
</button>
      </div>
    </div>
    
    
    </>
  );
}

export default Task1;