import React, { useState } from "react";

function ProfileEditing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validate()) {
      setSuccess("✅ Profile updated successfully!");
      alert("Profile updated successfully!");
    }
  };

  return (
    <div className="profile-bg">
      <div className="profile-card">
        <h1>👤 Edit Profile</h1>
        <p>Update your personal details</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <button type="submit">Save Changes</button>
        </form>

        {success && <p className="success">{success}</p>}

        {/* Inline CSS */}
        <style>{`
          body {
            margin: 0;
            font-family: "Segoe UI", sans-serif;
          }

          .profile-bg {
            min-height: 100vh;
            background: linear-gradient(to right, #43cea2, #185a9d);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile-card {
            background: white;
            width: 400px;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
          }

          h1 {
            text-align: center;
            color: #185a9d;
          }

          p {
            text-align: center;
            color: #555;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 10px;
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
            background: #185a9d;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #0d3c6e;
          }

          .error {
            color: red;
            font-size: 13px;
          }

          .success {
            margin-top: 15px;
            text-align: center;
            font-weight: bold;
            color: green;
          }
        `}</style>
      </div>
    </div>
  );
}

export default ProfileEditing;
