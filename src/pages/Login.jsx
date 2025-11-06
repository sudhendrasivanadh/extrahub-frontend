// ✅ Login.jsx (FULL TOAST VERSION)

import React, { useState } from "react";
import { login } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login(form);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      toast.success("Login successful ✅");

      res.user.role === "admin" ? navigate("/admin") : navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
