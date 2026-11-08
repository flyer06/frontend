import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load users");
        setLoading(false);
      });
  }, []);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const newUser = await response.json();

      // Add new user without refreshing
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          ...newUser,
          id: Date.now(),
        },
      ]);


      setFormData({
        name: "",
        email: "",
        phone: "",
        username: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          User Registration
        </h1>

        
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-semibold text-gray-800">
            Register New User
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9+\- ]{10,15}"
                title="Enter a valid phone number"
                required
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

            </div>

            {error && (
              <p className="mt-3 text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Register User
            </button>
          </form>
        </div>

        
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <h2 className="p-6 text-xl font-semibold text-gray-800">
            Registered Users
          </h2>

          {loading ? (
            <p className="p-6 text-gray-500">Loading users...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Username</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-blue-50"
                    >
                      <td className="p-3">{user.id}</td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.phone}</td>
                      <td className="p-3">{user.username}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
    
    
    </>
  );
}

export default App;