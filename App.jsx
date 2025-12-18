import React from "react";
import TaskDashboard from "./Full Stack/Sample/TaskDashboard";

const App = () => {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>📝 My Task Dashboard</h1>
      <TaskDashboard />
    </div>
  );
};

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    color: "#fff",
    marginBottom: "25px",
  },
};

export default App;
