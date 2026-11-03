import { useState } from "react";

const  Task2=()=> {
  const [count, setCount] = useState(0);

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Simple Counter
        </h1>

        <h2 className="text-4xl font-bold mb-6">
          {count}
        </h2>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
   
   
   </>
  );
}

export default Task2;