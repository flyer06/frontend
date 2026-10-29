import { useState } from 'react'

const Task5=()=> {
  const [signal, setSignal] = useState('red')

  return (
    <>
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">
          Traffic Signal
        </h1>

        <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${
          signal === 'red'
            ? 'bg-red-500'
            : signal === 'yellow'
            ? 'bg-yellow-400'
            : 'bg-green-500'
        }`}></div>

        <p className="text-2xl font-bold mb-6">
          {signal === 'red'
            ? 'Stop'
            : signal === 'yellow'
            ? 'Ready'
            : 'Go'}
        </p>

        <button
          onClick={() => setSignal('red')}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Red
        </button>

        <button
          onClick={() => setSignal('yellow')}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg mr-2"
        >
          Yellow
        </button>

        <button
          onClick={() => setSignal('green')}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Green
        </button>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Task5