import { useState } from 'react'

const Task3=()=> {
  const [number, setNumber] = useState(0)

  return (
<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          Even / Odd Number
        </h1>

        <p className="text-4xl font-bold text-blue-600 mb-4">
          {number}
        </p>

        <p className={`text-xl font-semibold mb-6 ${
          number % 2 === 0 ? 'text-green-600' : 'text-orange-600'
        }`}>
          {number % 2 === 0 ? 'Even Number' : 'Odd Number'}
        </p>

        <button
          onClick={() => setNumber(number + 1)}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
          Increment
        </button>
      </div>
    </div>

</>
  )
}

export default Task3