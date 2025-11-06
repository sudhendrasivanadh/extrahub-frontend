// ✅ main.jsx (FULL WORKING VERSION)

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Legacy from "./pages/Legacy.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Protected from "./components/Protected.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "legacy", element: <Legacy /> },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      {
        path: "dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "admin",
        element: (
          <Protected adminOnly>
            <AdminDashboard />
          </Protected>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* ✅ Toast UI handler */}
    <ToastContainer position="top-right" autoClose={2000} />
  </React.StrictMode>
);
