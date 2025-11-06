import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'

export default function App() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="app">
      <Header />

      <nav className="nav">

        {/* Always visible items */}
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>

        <NavLink to="/legacy" className={({ isActive }) => (isActive ? "active" : "")}>
          Legacy
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>


        {/* ✅ Show Login and Signup only if NOT logged in */}
        {!token && (
          <>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>

            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
              Signup
            </NavLink>
          </>
        )}


        {/* ✅ Show Dashboard and Logout only if logged in */}
        {token && (
          <>
            {/* 👤 Username Display */}
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              Welcome, {user?.name}
            </span>

            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>

            {/* 👑 Admin only link */}
            {user?.role === "admin" && (
              <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
                Admin
              </NavLink>
            )}

            {/* 🚪 Logout button */}
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "red",
                fontWeight: "bold"
              }}
            >
              Logout
            </button>
          </>
        )}

      </nav>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <small>ExtraHub • Vite + React • {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}
