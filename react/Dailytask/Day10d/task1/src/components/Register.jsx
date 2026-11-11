import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register=()=> {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(form).some(value => !value.trim())) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter valid email");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password does not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === form.email)) {
      setError("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      password: form.password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>

      </form>
    </div>
    
    
    </>
  );
}

export default Register;