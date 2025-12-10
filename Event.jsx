import { useState } from "react";

export default function Event() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Event Registered Successfully!");
    console.log(formData);
  };

  return (
    <div style={pageStyle}>
      <div style={glassCard}>
        <h2 style={titleStyle}>🎉 Event Registration</h2>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <select
            style={inputStyle}
            name="event"
            required
            onChange={handleChange}
          >
            <option value="">Select Event</option>
            <option value="Tech Talk">Tech Talk</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Workshop">Workshop</option>
          </select>

          <button style={btnStyle} type="submit">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Poppins, sans-serif",
};

const glassCard = {
  background: "rgba(0,0,0,0.7)",
  padding: "30px",
  borderRadius: "20px",
  width: "350px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
};

const titleStyle = {
  color: "#ffffff",
  marginBottom: "20px",
  textAlign: "center",
  fontSize: "24px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  fontSize: "18px",
  background: "linear-gradient(135deg, #00c6ff, #0072ff)",
  color: "white",
  cursor: "pointer",
};
