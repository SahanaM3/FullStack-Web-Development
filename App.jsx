import React from "react";
import Attendance from "./Full Stack/Sample/Attendance";

const App = () => {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>📚 Attendance Tracker</h1>
      <Attendance />
    </div>
  );
};

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #74ebd5, #acb6e5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
  },
};

export default App;
