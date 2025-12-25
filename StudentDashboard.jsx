import React, { useState } from "react";

const studentsData = [
  { id: 1, name: "Arun Kumar", dept: "CSE", year: 3 },
  { id: 2, name: "Priya Sharma", dept: "ECE", year: 2 },
  { id: 3, name: "Rahul Das", dept: "MECH", year: 4 },
  { id: 4, name: "Sahana M", dept: "IT", year: 1 },
];

function StudentDashboard() {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>🎓 Admin Panel</h3>
        <button style={styles.navBtn} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
        <button style={styles.navBtn} onClick={() => setPage("students")}>
          Students
        </button>
        <button style={styles.navBtn} onClick={() => setPage("reports")}>
          Reports
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {page === "dashboard" && (
          <>
            <h2>📊 Dashboard Overview</h2>
            <div style={styles.cards}>
              <div style={styles.card}>👩‍🎓 Total Students: {studentsData.length}</div>
              <div style={styles.card}>🏫 Departments: 4</div>
              <div style={styles.card}>📘 Courses: 12</div>
            </div>
          </>
        )}

        {page === "students" && (
          <>
            <h2>📋 Student List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.dept}</td>
                    <td>{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {page === "reports" && (
          <>
            <h2>📑 Reports</h2>
            <p>Performance and attendance reports will be shown here.</p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  sidebar: {
    width: "220px",
    background: "#2c3e50",
    color: "#fff",
    padding: "20px",
  },
  navBtn: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    background: "#34495e",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
  },
  content: {
    flex: 1,
    padding: "20px",
    background: "#f4f6f8",
  },
  cards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    minWidth: "200px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
  },
};

export default StudentDashboard;
