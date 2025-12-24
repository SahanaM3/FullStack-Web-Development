import React, { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !workshop || !level) {
      alert("⚠️ Please fill all required details");
      return;
    }

    alert("✅ Workshop Registration Successful!");
  };

  return (
    <div className="workshop-bg">
      <div className="container">
        {/* Registration Form */}
        <div className="form-card">
          <h1>🧠 Workshop Registration</h1>
          <p>Register & see live preview</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
            >
              <option value="">Select Workshop</option>
              <option value="React Basics">React Basics</option>
              <option value="Web Development">Web Development</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>

            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Experience Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <textarea
              placeholder="Message / Expectations (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Register</button>
          </form>
        </div>

        {/* Live Preview */}
        <div className="preview-card">
          <h2>🔍 Live Preview</h2>
          <p><b>Name:</b> {name || "—"}</p>
          <p><b>Email:</b> {email || "—"}</p>
          <p><b>Workshop:</b> {workshop || "—"}</p>
          <p><b>Level:</b> {level || "—"}</p>
          <p><b>Message:</b> {message || "—"}</p>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .workshop-bg {
          min-height: 100vh;
          background: linear-gradient(to right, #2193b0, #6dd5ed);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          gap: 30px;
        }

        .form-card, .preview-card {
          background: white;
          width: 360px;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        h1, h2 {
          text-align: center;
          color: #0d47a1;
        }

        p {
          color: #555;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }

        input, select, textarea {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        textarea {
          resize: none;
          height: 70px;
        }

        button {
          margin-top: 10px;
          padding: 12px;
          background: #0d47a1;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #08306b;
        }

        .preview-card p {
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
}

export default WorkshopRegistration;
