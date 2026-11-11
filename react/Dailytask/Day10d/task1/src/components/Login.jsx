import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login=()=> {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/" className="text-blue-600 ml-2">
            Register
          </Link>
        </p>

      </form>
    </div>
   
   </>
  );
}

export default Login;