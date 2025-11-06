// ✅ Protected.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ children, adminOnly }) {
  const token = localStorage.getItem("token");

  // If user is not logged in → redirect to login
  if (!token) return <Navigate to="/login" replace />;

  // If this is admin-only route → check user role
  if (adminOnly) {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role !== "admin") return <Navigate to="/" replace />;
  }

  return children;
}
