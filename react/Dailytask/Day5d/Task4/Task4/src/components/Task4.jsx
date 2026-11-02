import { useState } from 'react'

const Task4=()=> {
  const [marks, setMarks] = useState(35)

  return (
   <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          Pass / Fail Result
        </h1>

        <p className="text-4xl font-bold text-blue-600 mb-4">
          {marks} Marks
        </p>

        <p className={`text-xl font-semibold mb-6 ${
          marks >= 40 ? 'text-green-600' : 'text-red-600'
        }`}>
          {marks >= 40 ? 'Pass' : 'Fail'}
        </p>

        <button
          onClick={() => setMarks(marks + 1)}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
          Increase Marks
        </button>
      </div>
    </div>
   
   
   
   
   </>
  )
}

export default Task4