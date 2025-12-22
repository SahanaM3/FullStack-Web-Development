import React, { useState } from "react";

function HotelReservation() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [days, setDays] = useState("");
  const [bill, setBill] = useState(null);

  const roomPrices = {
    Single: 1000,
    Double: 2000,
    Deluxe: 3000,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !room || !days) {
      alert("⚠️ Please fill all details");
      return;
    }

    const total = roomPrices[room] * days;
    setBill(total);
  };

  return (
    <div className="hotel-bg">
      <div className="card">
        <h1>🏨 Hotel Reservation</h1>
        <p>Book your comfortable stay</p>

        <form onSubmit={handleSubmit}>
          <label>Guest Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Room Type</label>
          <select value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="">-- Select Room --</option>
            <option value="Single">Single Room (₹1000/day)</option>
            <option value="Double">Double Room (₹2000/day)</option>
            <option value="Deluxe">Deluxe Room (₹3000/day)</option>
          </select>

          <label>Number of Days</label>
          <input
            type="number"
            placeholder="Enter days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <button type="submit">Reserve Now</button>
        </form>

        {bill && (
          <div className="bill">
            <h2>🧾 Booking Summary</h2>
            <p><b>Name:</b> {name}</p>
            <p><b>Room:</b> {room}</p>
            <p><b>Days:</b> {days}</p>
            <p className="amount">Total Amount: ₹{bill}</p>
            <p className="success">✅ Reservation Confirmed</p>
          </div>
        )}
      </div>

      {/* Inline CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .hotel-bg {
          height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: #fff;
          width: 420px;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        h1 {
          text-align: center;
          color: #4b0082;
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

        label {
          font-weight: bold;
          color: #333;
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
          border: none;
          border-radius: 10px;
          background: #667eea;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #fcfcfcff;
        }

        .bill {
          margin-top: 25px;
          background: #0d0dd7ff;
          padding: 15px;
          border-radius: 12px;
        }

        .amount {
          font-size: 18px;
          color: #2c3e50;
        }

        .success {
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default HotelReservation;
