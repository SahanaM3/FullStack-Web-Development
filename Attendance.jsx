import React, { useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", status: "" },
    { id: 2, name: "Bob", status: "" },
    { id: 3, name: "Charlie", status: "" },
    { id: 4, name: "Diana", status: "" },
    { id: 5, name: "Ethan", status: "" },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div style={styles.card}>
      {students.map((student) => (
        <div key={student.id} style={styles.row}>
          <span style={styles.name}>{student.name}</span>

          <div>
            <button
              style={{
                ...styles.presentBtn,
                opacity: student.status === "Present" ? 1 : 0.6,
              }}
              onClick={() => markAttendance(student.id, "Present")}
            >
              Present
            </button>

            <button
              style={{
                ...styles.absentBtn,
                opacity: student.status === "Absent" ? 1 : 0.6,
              }}
              onClick={() => markAttendance(student.id, "Absent")}
            >
              Absent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    borderRadius: "10px",
    width: "380px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  name: {
    fontWeight: "bold",
  },
  presentBtn: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    marginRight: "8px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  absentBtn: {
    backgroundColor: "#F44336",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Attendance;
