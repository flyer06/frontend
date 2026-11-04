
import { useState } from "react";

const App=()=> {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <>
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Student Name Form
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {submittedName && (
          <h2 className="mt-5 text-lg font-semibold text-green-600">
            Student Name: {submittedName}
          </h2>
        )}
      </div>
    </div>
    
    
    </>
  );
}

export default App;
