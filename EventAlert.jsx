import React, { useState } from "react";

function EventAlert() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !event || !tickets) {
      alert("⚠️ Please fill all details");
      return;
    }

    const confirmReg = confirm(
      `📋 Confirm Registration\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}\nTickets: ${tickets}`
    );

    if (confirmReg) {
      setStatus("✅ Registration Successful! Confirmation sent.");
      alert("🎉 Event Registered Successfully!");
    } else {
      setStatus("❌ Registration Cancelled");
      alert("Registration cancelled.");
    }
  };

  return (
    <div className="event-bg">
      <div className="event-card">
        <h1>🎉 Event Registration</h1>
        <p>Register now to reserve your seat</p>

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

          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="">Select Event</option>
            <option value="Tech Conference">Tech Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Cultural Fest">Cultural Fest</option>
            <option value="Seminar">Seminar</option>
          </select>

          <input
            type="number"
            placeholder="Number of Tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {status && <p className="status">{status}</p>}

        {/* Inline CSS */}
        <style>{`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
          }

          .event-bg {
            min-height: 100vh;
            background: linear-gradient(to right, #8360c3, #2ebf91);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .event-card {
            background: white;
            width: 420px;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          }

          h1 {
            text-align: center;
            color: #512da8;
          }

          p {
            text-align: center;
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
            margin-top: 15px;
            font-weight: bold;
            text-align: center;
            color: #2e7d32;
          }
        `}</style>
      </div>
    </div>
  );
}

export default EventAlert;
