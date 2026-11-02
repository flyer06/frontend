const App=()=> {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python"
  ];

  return (
   <>
   
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-blue-600 mb-5">
          Programming Languages
        </h1>

        <ul className="space-y-3">

          {languages.map((language) => (
            <li
              key={language}
              className="bg-blue-100 text-blue-800 p-3 rounded-lg font-semibold"
            >
              {language}
            </li>
          ))}

        </ul>

      </div>

    </div>
   
   
   
   </>
  );
}

export default App;