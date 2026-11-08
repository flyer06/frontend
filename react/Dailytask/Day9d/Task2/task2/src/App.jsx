import { useState, useEffect } from "react";

const App=()=> {
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://jsonplaceholder.typicode.com/todos";

  
  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return response.json();
      })
      .then((data) => {
        const formattedTasks = data.map((task) => ({
          id: task.id,
          title: task.title,
          description: "Existing task",
          status: task.completed ? "Completed" : "Pending",
        }));

        setTasks(formattedTasks);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load tasks");
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
      const isEditing = editId !== null;

      const response = await fetch(
        isEditing ? `${API}/${editId}` : API,
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to save task");
      }

      const result = await response.json();

      if (isEditing) {
        // Update task in state
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editId
              ? { ...task, ...formData }
              : task
          )
        );
      } else {
        
        setTasks((prevTasks) => [
          {
            ...result,
            ...formData,
            id: Date.now(),
          },
          ...prevTasks,
        ]);
      }

    
      setFormData({
        title: "",
        description: "",
        status: "Pending",
      });

      setEditId(null);
    } catch (err) {
      setError(err.message);
    }
  };


  const handleEdit = (task) => {
    setEditId(task.id);

    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  };


  const handleDelete = async (id) => {
    setError("");

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Unable to delete task");
      }

      // Remove task from state
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );

      if (editId === id) {
        setEditId(null);

        setFormData({
          title: "",
          description: "",
          status: "Pending",
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  
  const handleCancel = () => {
    setEditId(null);

    setFormData({
      title: "",
      description: "",
      status: "Pending",
    });
  };

  return (
    <>
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-6 text-center text-3xl font-bold text-indigo-700">
          Task Management System
        </h1>

        {/* Task Form */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-semibold text-gray-800">
            {editId !== null ? "Update Task" : "Add New Task"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">

              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="rounded-lg border p-3 outline-none focus:border-indigo-500"
              />

              <textarea
                name="description"
                placeholder="Task Description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="rounded-lg border p-3 outline-none focus:border-indigo-500"
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-indigo-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

            </div>

            {error && (
              <p className="mt-3 text-red-600">{error}</p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                {editId !== null ? "Update Task" : "Add Task"}
              </button>

              {editId !== null && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}

            </div>
          </form>
        </div>

        {/* Task Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">

          <h2 className="p-6 text-xl font-semibold text-gray-800">
            All Tasks
          </h2>

          {loading ? (
            <p className="p-6 text-gray-500">Loading tasks...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">

                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b hover:bg-indigo-50"
                    >
                      <td className="p-3">{task.id}</td>

                      <td className="p-3 font-medium">
                        {task.title}
                      </td>

                      <td className="p-3">
                        {task.description}
                      </td>

                      <td className="p-3">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            task.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : task.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>

                      <td className="p-3">
                        <div className="flex gap-2">

                          <button
                            onClick={() => handleEdit(task)}
                            className="rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(task.id)}
                            className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                          >
                            Delete
                          </button>

                        </div>
                      </td>
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