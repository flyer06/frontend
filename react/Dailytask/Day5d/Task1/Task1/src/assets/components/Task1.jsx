import { useState } from 'react'

const Task1=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">
          {isLoggedIn ? 'Welcome User' : 'Please Login'}
        </h1>

        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg mr-3"
        >
          Login
        </button>

        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
    </>
  )
}

export default Task1