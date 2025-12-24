import React, { useState } from "react";

function AuthSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  // Dummy credentials (simulation)
  const validUser = "admin";
  const validPass = "12345";

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus("");

    if (!username || !password) {
      alert("⚠️ Please enter both username and password");
      return;
    }

    if (username === validUser && password === validPass) {
      alert("✅ Login Successful!");
      setStatus("🎉 Welcome! Authentication Successful.");
    } else {
      alert("❌ Invalid Username or Password");
      setStatus("Authentication Failed. Please try again.");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h1>🔐 User Login</h1>
        <p>Enter credentials to continue</p>

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

          <button type="submit">Login</button>
        </form>

        {status && <p className="status">{status}</p>}

        {/* Inline CSS */}
        <style>{`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
          }

          .auth-bg {
            min-height: 100vh;
            background: linear-gradient(to right, #8360c3, #2ebf91);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .auth-card {
            background: white;
            width: 380px;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
            text-align: center;
          }

          h1 {
            color: #512da8;
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

          input {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 15px;
          }

          button {
            margin-top: 15px;
            padding: 12px;
            background: #512da8;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #311b92;
          }

          .status {
            margin-top: 20px;
            font-weight: bold;
            color: #2e7d32;
          }
        `}</style>
      </div>
    </div>
  );
}

export default AuthSystem;
