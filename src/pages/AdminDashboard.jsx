// ✅ AdminDashboard.jsx

import React from "react";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <p>Hello, <strong>{user?.name}</strong> 👑</p>
      <p>You are logged in as <b>Admin</b>.</p>

      <p style={{ marginTop: "20px" }}>
        ✅ Only admin users can access this page.
      </p>
    </div>
  );
}
