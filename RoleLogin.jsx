import React, { useState } from "react";

function RoleLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password || !role) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // Simple role-based redirection simulation
    if (role === "Admin") {
      setMessage("🔑 Welcome Admin! Redirecting to Admin Dashboard...");
    } else if (role === "User") {
      setMessage("👤 Welcome User! Redirecting to User Home Page...");
    } else if (role === "Guest") {
      setMessage("🎟️ Welcome Guest! Redirecting to Guest Page...");
    }

    alert(`Login Successful as ${role}`);
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1>🔐 Login</h1>
        <p>Select role to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>

          <button type="submit">Login</button>
        </form>

        {message && <p className="redirect">{message}</p>}

        {/* Inline CSS */}
        <style>{`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
          }

          .login-bg {
            min-height: 100vh;
            background: linear-gradient(to right, #141e30, #243b55);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .login-card {
            background: white;
            width: 380px;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
            text-align: center;
          }

          h1 {
            color: #243b55;
          }

          p {
            color: #555;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 20px;
          }

          input, select {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 15px;
          }

          button {
            margin-top: 15px;
            padding: 12px;
            background: #243b55;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #141e30;
          }

          .redirect {
            margin-top: 20px;
            font-weight: bold;
            color: #2e7d32;
          }
        `}</style>
      </div>
    </div>
  );
}

export default RoleLogin;
