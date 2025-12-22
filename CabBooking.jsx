import React, { useState } from "react";

function CabBooking() {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cabType, setCabType] = useState("");
  const [distance, setDistance] = useState("");
  const [status, setStatus] = useState("");
  const [fare, setFare] = useState(null);

  const cabRates = {
    Mini: 10,
    Sedan: 15,
    SUV: 20,
  };

  const checkAvailability = () => {
    // Simulated availability (random)
    return Math.random() > 0.3; // 70% chance available
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !pickup || !drop || !cabType || !distance) {
      alert("⚠️ Please fill all details");
      return;
    }

    const available = checkAvailability();

    if (!available) {
      setStatus("❌ No cabs available right now. Please try again later.");
      setFare(null);
      return;
    }

    const totalFare = cabRates[cabType] * distance;
    setFare(totalFare);
    setStatus("✅ Cab Available! Booking Confirmed");
  };

  return (
    <div className="cab-bg">
      <div className="cab-card">
        <h1>🚖 Online Cab Booking</h1>
        <p>Book your ride easily</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <input
            type="text"
            placeholder="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />

          <select value={cabType} onChange={(e) => setCabType(e.target.value)}>
            <option value="">Select Cab Type</option>
            <option value="Mini">Mini (₹10/km)</option>
            <option value="Sedan">Sedan (₹15/km)</option>
            <option value="SUV">SUV (₹20/km)</option>
          </select>

          <input
            type="number"
            placeholder="Distance (km)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />

          <button type="submit">Book Cab</button>
        </form>

        {status && <p className="status">{status}</p>}

        {fare && (
          <div className="bill">
            <h3>🧾 Ride Details</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>Cab:</b> {cabType}</p>
            <p><b>Distance:</b> {distance} km</p>
            <p className="fare">Total Fare: ₹{fare}</p>
          </div>
        )}

        {/* Inline CSS */}
        <style>{`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
          }

          .cab-bg {
            min-height: 100vh;
            background: linear-gradient(to right, #ffecd2, #fcb69f);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .cab-card {
            background: #fff;
            width: 420px;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          }

          h1 {
            text-align: center;
            color: #e65100;
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
            background: #e65100;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #bf360c;
          }

          .status {
            margin-top: 15px;
            font-weight: bold;
            text-align: center;
          }

          .bill {
            margin-top: 20px;
            background: #fff3e0;
            padding: 15px;
            border-radius: 12px;
          }

          .fare {
            font-size: 18px;
            color: #2e7d32;
            font-weight: bold;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CabBooking;
