// ✅ Signup.jsx (FULL TOAST VERSION)

import React, { useState } from "react";
import { signup } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signup(form);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      toast.success("Signup successful! 🎉");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
