import { useState } from 'react'

const Task2=()=> {
  const [showText, setShowText] = useState(false)

  return (
   <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">
          Show / Hide Text
        </h1>

        <button
          onClick={() => setShowText(true)}
          className="bg-green-500 text-white px-5 py-2 rounded-lg mr-3"
        >
          Show
        </button>

        <button
          onClick={() => setShowText(false)}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Hide
        </button>

        {showText && (
          <p className="mt-6 text-xl font-semibold text-blue-600">
            Welcome to React
          </p>
        )}
      </div>
    </div>
   
   
   
   
   
   
   </>
  )
}

export default Task2