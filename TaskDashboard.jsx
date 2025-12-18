import React, { useState } from "react";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([
    "Complete assignment",
    "Prepare presentation",
    "Read React notes",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.card}>
      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          ➕ Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks added yet 🌟</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} style={styles.taskRow}>
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    width: "420px",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  inputRow: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  addBtn: {
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  taskRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
    padding: "10px 12px",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  deleteBtn: {
    backgroundColor: "#ff5252",
    border: "none",
    color: "#fff",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    color: "#777",
  },
};

export default TaskDashboard;
