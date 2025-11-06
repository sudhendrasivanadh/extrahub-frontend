// ✅ Dashboard.jsx

import React from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome back, <strong>{user?.name}</strong></p>
      <p>Your email: <strong>{user?.email}</strong></p>

      <p style={{ marginTop: "20px" }}>
        ✅ You are logged in and authorized to access this page.
      </p>
    </div>
  );
}
