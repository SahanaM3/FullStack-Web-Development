import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Project Structure/components/Navbar";
import Dashboard from "./Project Structure/Pages/Dashboard";
import Students from "./Project Structure/Pages/Students";
import Courses from "./Project Structure/Pages/Courses";
import Profile from "./Project Structure/Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
