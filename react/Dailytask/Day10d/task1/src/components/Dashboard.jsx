import { useNavigate } from "react-router-dom";

const Dashboard=()=> {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
 <>   <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Dashboard
        </h1>

        <h2 className="text-xl font-semibold mb-4 text-green-600">
          Welcome, {user.name}!
        </h2>

        <div className="bg-blue-50 p-5 rounded-lg space-y-3">

          <p><b>User ID:</b> {user.id}</p>

          <p><b>Name:</b> {user.name}</p>

          <p><b>Email:</b> {user.email}</p>

        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white p-3 rounded mt-6 hover:bg-red-700"
        >
          Logout
        </button>

      </div>
    </div></>
  );
}

export default Dashboard;