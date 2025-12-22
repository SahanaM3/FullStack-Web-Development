import { useState } from "react";

function DialogBox() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [tickets, setTickets] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    // Validation using alert
    if (!name || !destination || !tickets) {
      alert("All fields are required!");
      return;
    }

    if (tickets <= 0) {
      alert("Please enter a valid number of tickets.");
      return;
    }

    // Confirmation dialog
    let confirmBooking = confirm(
      `Confirm Booking Details:\n\nPassenger Name: ${name}\nDestination: ${destination}\nNumber of Tickets: ${tickets}`
    );

    if (confirmBooking) {
      alert(
        `✈️ Flight Booked Successfully!\n\nThank you ${name}.\nHave a safe journey to ${destination}!`
      );
    } else {
      alert("Booking Cancelled.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Flight Ticket Booking</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Passenger Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="Number of Tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
}

export default DialogBox;
