import React from "react";

function HotelReservation() {
  const handleReservation = () => {
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Reservation cancelled!");
      return;
    }

    const roomType = prompt(
      "Enter Room Type:\n1. Single\n2. Double\n3. Deluxe"
    );

    if (!roomType) {
      alert("Reservation cancelled!");
      return;
    }

    const days = prompt("Enter number of days to stay:");
    if (!days || isNaN(days)) {
      alert("Invalid number of days!");
      return;
    }

    let pricePerDay = 0;
    let roomName = "";

    switch (roomType) {
      case "1":
        pricePerDay = 1000;
        roomName = "Single Room";
        break;
      case "2":
        pricePerDay = 2000;
        roomName = "Double Room";
        break;
      case "3":
        pricePerDay = 3000;
        roomName = "Deluxe Room";
        break;
      default:
        alert("Invalid Room Type!");
        return;
    }

    const totalAmount = pricePerDay * days;

    const confirmBooking = confirm(
      `Confirm Reservation?\n\nName: ${name}\nRoom: ${roomName}\nDays: ${days}\nTotal Amount: ₹${totalAmount}`
    );

    if (confirmBooking) {
      alert(
        `✅ Reservation Successful!\n\nThank you ${name}.\nEnjoy your stay!`
      );
    } else {
      alert("Reservation Cancelled!");
    }
  };

  return (
    <div className="container">
      <h1>🏨 Hotel Reservation System</h1>
      <p>Click the button below to book your room</p>
      <button onClick={handleReservation}>Book Now</button>

      {/* Inline CSS */}
      <style>{`
        body {
          background: linear-gradient(to right, #141e30, #243b55);
          font-family: Arial, sans-serif;
        }

        .container {
          text-align: center;
          margin-top: 100px;
          background: white;
          padding: 40px;
          width: 400px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        h1 {
          color: #243b55;
          margin-bottom: 10px;
        }

        p {
          color: #555;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background-color: #243b55;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background-color: #141e30;
        }
      `}</style>
    </div>
  );
}

export default HotelReservation;
